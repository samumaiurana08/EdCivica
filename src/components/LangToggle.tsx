import { Languages } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const LangToggle = ({ className = "" }: { className?: string }) => {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label={lang === "it" ? "Switch language to English" : "Cambia lingua in italiano"}
      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold text-primary hover:bg-white/40 active:scale-95 transition-all ${className}`}
    >
      <Languages className="w-4 h-4" />
      <span className="tabular-nums">{lang === "it" ? "EN" : "IT"}</span>
    </button>
  );
};

export default LangToggle;
