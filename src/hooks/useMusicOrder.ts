import { useCallback, useMemo, useSyncExternalStore } from "react";
import { normalizeOrder } from "../lib/music";
const key = "full-core-music-order-v1";
let memory: string | null | undefined;
const listeners = new Set<() => void>();
function snapshot() {
  if (memory === undefined) {
    try {
      memory = localStorage.getItem(key);
    } catch {
      memory = null;
    }
  }
  return memory;
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  const storage = (event: StorageEvent) => {
    if (event.key === key) {
      memory = event.newValue;
      listeners.forEach((fn) => fn());
    }
  };
  window.addEventListener("storage", storage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", storage);
  };
}
export function useMusicOrder(defaultIds: string[]) {
  const raw = useSyncExternalStore(subscribe, snapshot, () => null);
  const order = useMemo(() => {
    let saved: unknown = null;
    try {
      saved = raw ? JSON.parse(raw) : null;
    } catch {
      /* Recover from corrupt storage. */
    }
    return normalizeOrder(saved, defaultIds);
  }, [raw, defaultIds]);
  const setOrder = useCallback(
    (ids: string[]) => {
      memory = JSON.stringify(normalizeOrder(ids, defaultIds));
      try {
        localStorage.setItem(key, memory);
      } catch {
        /* In-memory changes still work. */
      }
      listeners.forEach((fn) => fn());
    },
    [defaultIds],
  );
  return [order, setOrder] as const;
}
