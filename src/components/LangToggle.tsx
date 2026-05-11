import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

const COOKIE = "googtrans";

function setCookie(value: string) {
  // Set on current domain and root domain to cover Google Translate variations
  document.cookie = `${COOKIE}=${value};path=/`;
  const host = window.location.hostname;
  const parts = host.split(".");
  if (parts.length > 1) {
    const root = "." + parts.slice(-2).join(".");
    document.cookie = `${COOKIE}=${value};path=/;domain=${root}`;
  }
  document.cookie = `${COOKIE}=${value};path=/;domain=.${host}`;
}

function getCurrentLang(): "it" | "en" {
  const m = document.cookie.match(/(?:^|;\s*)googtrans=\/[a-z]+\/([a-z]+)/i);
  return (m?.[1] as "it" | "en") === "en" ? "en" : "it";
}

const LangToggle = ({ className = "" }: { className?: string }) => {
  const [lang, setLang] = useState<"it" | "en">("it");

  useEffect(() => {
    setLang(getCurrentLang());
  }, []);

  const toggle = () => {
    const next = lang === "it" ? "en" : "it";
    setCookie(`/it/${next}`);
    setLang(next);
    window.location.reload();
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Cambia lingua (attuale: ${lang.toUpperCase()})`}
      className={`notranslate inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold text-primary hover:bg-white/40 transition-all ${className}`}
    >
      <Languages className="w-4 h-4" />
      <span>{lang === "it" ? "EN" : "IT"}</span>
    </button>
  );
};

export default LangToggle;