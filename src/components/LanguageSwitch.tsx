import { languages, useLocale } from "../i18n";
export function LanguageSwitch() {
  const { language, setLanguage, t } = useLocale();
  return (
    <div
      className="language-switch"
      role="group"
      aria-label={t("Select language")}
    >
      {languages.map((item) => (
        <button
          type="button"
          key={item.id}
          lang={item.id}
          aria-label={item.name}
          title={item.name}
          aria-pressed={language === item.id}
          onClick={() => setLanguage(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
