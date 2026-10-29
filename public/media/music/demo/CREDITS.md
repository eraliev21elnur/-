# Procedural listening demos

ambient.mp3, pulse.mp3, glass.mp3 are short procedural music loops generated
specifically for testing this website's audio player at the owner's request.
No third-party recordings or licensed samples were used. These are not FULL CORE
songs, releases, client work or evidence of the owner's music production skills.

Generation source: scripts/generate-demo-audio.py (Python, NumPy, FFmpeg).
Each loop is approximately 24 seconds, stereo MP3 at 96 kbps, with fades.
The three loops have different arrangements to exercise switching, seeking and
volume. All are labeled Demo in the UI and are hidden when site.demoMode=false.
Remove this directory when temporary audio is no longer wanted.
