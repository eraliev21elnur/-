import { useCallback, useSyncExternalStore } from "react";
import { messages } from "./messages";
export type Language = "en" | "ru" | "kk";
export const languages: { id: Language; label: string; name: string }[] = [
  { id: "en", label: "EN", name: "English" },
  { id: "ru", label: "RU", name: "Русский" },
  { id: "kk", label: "KZ", name: "Қазақша" },
];
const key = "full-core-language";
let memory: Language = "en";
let loaded = false;
const listeners = new Set<() => void>();
const valid = (value: unknown): value is Language =>
  value === "en" || value === "ru" || value === "kk";
function snapshot(): Language {
  if (!loaded && typeof window !== "undefined") {
    loaded = true;
    try {
      const saved = localStorage.getItem(key);
      if (valid(saved)) memory = saved;
    } catch {
      /* Storage may be blocked; memory selection still works. */
    }
  }
  return memory;
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  const storage = (event: StorageEvent) => {
    if (event.key === key) {
      memory = valid(event.newValue) ? event.newValue : "en";
      listeners.forEach((fn) => fn());
    }
  };
  window.addEventListener("storage", storage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", storage);
  };
}
export function setLanguage(language: Language) {
  memory = language;
  loaded = true;
  try {
    localStorage.setItem(key, language);
  } catch {
    /* Keep selection in memory. */
  }
  listeners.forEach((fn) => fn());
}
export function translate(text: string, language: Language = "en"): string {
  if (language === "en") return text;
  return messages[text]?.[language] ?? text;
}
export function useLocale() {
  const language = useSyncExternalStore(
    subscribe,
    snapshot,
    () => "en" as Language,
  );
  const t = useCallback(
    (text: string) => translate(text, language),
    [language],
  );
  return { language, setLanguage, t };
}
