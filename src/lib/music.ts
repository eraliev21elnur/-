export type RepeatMode = "off" | "all" | "one";
export function normalizeOrder(saved: unknown, ids: string[]): string[] {
  const valid = new Set(ids);
  const previous = Array.isArray(saved)
    ? saved.filter(
        (id): id is string => typeof id === "string" && valid.has(id),
      )
    : [];
  return [...new Set([...previous, ...ids])];
}
export function moveTrack(ids: string[], id: string, target: number): string[] {
  const from = ids.indexOf(id);
  if (from < 0 || target < 0 || target >= ids.length || from === target)
    return ids;
  const result = [...ids];
  result.splice(from, 1);
  result.splice(target, 0, id);
  return result;
}
export function followingTrack(
  ids: string[],
  id: string,
  repeat: RepeatMode,
): string | null {
  const index = ids.indexOf(id);
  if (index < 0) return null;
  if (repeat === "one") return id;
  return ids[index + 1] ?? (repeat === "all" ? (ids[0] ?? null) : null);
}
export function shuffleTracks(ids: string[], current: string | null): string[] {
  const result = ids.filter((id) => id !== current);
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return current && ids.includes(current) ? [current, ...result] : result;
}
export function formatTime(seconds: number): string {
  const value = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, "0")}`;
}
