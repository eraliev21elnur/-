"""Optional local asset generator; not needed by npm build.
Requires Python 3, NumPy and FFmpeg. Produces procedural musical interface demos,
not user portfolio tracks or test tones. No third-party recordings are used.
"""
from pathlib import Path
import subprocess
import tempfile
import wave
import numpy as np

RATE = 22050
SECONDS = 24
OUT = Path(__file__).resolve().parent.parent / 'public/media/music/demo'
OUT.mkdir(parents=True, exist_ok=True)


def frequency(note):
    return 440 * 2 ** ((note - 69) / 12)


def render(name, style, seed):
    rng = np.random.default_rng(seed)
    audio = np.zeros(RATE * SECONDS)

    def mix(signal, start):
        offset = int(start * RATE)
        count = min(len(signal), len(audio) - offset)
        if count > 0:
            audio[offset:offset + count] += signal[:count]

    chords = [[48, 51, 55], [44, 48, 51], [51, 55, 58], [46, 50, 53]]
    for index, chord in enumerate(chords):
        t = np.arange(int(6.8 * RATE)) / RATE
        envelope = np.minimum(t / .8, 1) * np.minimum((6.8 - t) / 1.3, 1)
        pad = sum(np.sin(2 * np.pi * frequency(note) * t)
                  + .15 * np.sin(2 * np.pi * frequency(note) * 2.002 * t)
                  for note in chord) * envelope * .065
        mix(pad, index * 6)

    beat = .6 if style == 'pulse' else .5 if style == 'glass' else 1.5
    for index, start in enumerate(np.arange(0, SECONDS, beat / 2)):
        chord = chords[min(int(start / 6), 3)]
        note = chord[index % 3] + 24 + (12 if style == 'glass' and index % 4 == 3 else 0)
        length = 1.8 if style == 'ambient' else .65
        t = np.arange(int(length * RATE)) / RATE
        envelope = (1 - np.exp(-t * 150)) * np.exp(-t * (2 if style == 'ambient' else 7))
        fundamental = np.sin(2 * np.pi * frequency(note) * t)
        pluck = (fundamental + .25 * np.sin(2 * np.pi * frequency(note) * 2 * t)) * envelope * .08
        mix(pluck, start)
        mix(pluck * .25, start + .28)

    if style != 'ambient':
        for index, start in enumerate(np.arange(0, SECONDS, beat)):
            t = np.arange(int(.32 * RATE)) / RATE
            kick = np.sin(2 * np.pi * (48 * t + 11 * (1 - np.exp(-t * 25)))) * np.exp(-t * 17) * .26
            if index % 2 == 0:
                mix(kick, start)
            else:
                mix(rng.uniform(-1, 1, len(t)) * np.exp(-t * 30) * .07, start)
            t = np.arange(int(.09 * RATE)) / RATE
            noise = rng.uniform(-1, 1, len(t) + 1)
            mix(np.diff(noise) * np.exp(-t * 65) * .025, start + beat / 2)
            t = np.arange(int(beat * .8 * RATE)) / RATE
            bass = np.sin(2 * np.pi * frequency(chords[min(int(start / 6), 3)][0] - 12) * t)
            mix(bass * (1 - np.exp(-t * 80)) * np.exp(-t * 5) * .12, start)

    times = np.arange(len(audio)) / RATE
    fade = np.minimum(times / .5, 1) * np.minimum((SECONDS - times) / 1.4, 1)
    audio = np.tanh(audio * 1.2) * fade
    audio *= .62 / max(np.max(np.abs(audio)), .001)
    delay = int(.012 * RATE)
    right = audio * .85 + np.concatenate([np.zeros(delay), audio[:-delay]]) * .15
    stereo = np.column_stack([audio, right])
    with tempfile.TemporaryDirectory() as temp:
        temp_wav = Path(temp) / 'source.wav'
        with wave.open(str(temp_wav), 'wb') as wav:
            wav.setnchannels(2)
            wav.setsampwidth(2)
            wav.setframerate(RATE)
            wav.writeframes((stereo * 32767).astype('<i2').tobytes())
        subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', str(temp_wav),
                        '-codec:a', 'libmp3lame', '-b:a', '96k',
                        '-metadata', 'artist=Interface Demo', '-metadata', f'title=Demo - {style}',
                        str(OUT / name)], check=True)
    print(name)


if __name__ == '__main__':
    render('ambient.mp3', 'ambient', 41)
    render('pulse.mp3', 'pulse', 42)
    render('glass.mp3', 'glass', 43)
