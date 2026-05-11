import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

const COOKIE = "googtrans";
const WIDGET_ID = "google_translate_element";
const SCRIPT_ID = "google-translate-script";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          element: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
    __googleTranslateReady?: Promise<boolean>;
  }
}

function writeCookie(value: string) {
  const host = window.location.hostname;
  document.cookie = `${COOKIE}=${value};path=/`;
  document.cookie = `${COOKIE}=${value};path=/;domain=${host}`;
  document.cookie = `${COOKIE}=${value};path=/;domain=.${host}`;
  const parts = host.split(".");
  if (parts.length > 1) {
    const root = "." + parts.slice(-2).join(".");
    document.cookie = `${COOKIE}=${value};path=/;domain=${root}`;
  }
}

function readLang(): "it" | "en" {
  const m = document.cookie.match(/googtrans=\/[a-z]+\/([a-z]+)/i);
  return m?.[1] === "en" ? "en" : "it";
}

function applyLang(target: "it" | "en"): boolean {
  const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (!select) return false;
  select.value = target;
  select.dispatchEvent(new Event("change"));
  return true;
}

/** Remove the Google Translate banner/iframe if it shows up. */
function purgeBanner() {
  document.querySelectorAll(
    ".goog-te-banner-frame, iframe.goog-te-banner-frame, .skiptranslate iframe"
  ).forEach((el) => ((el as HTMLElement).style.display = "none"));
  if (document.body) {
    document.body.style.top = "0";
    document.body.style.position = "static";
  }
}

function ensureWidgetMount() {
  if (document.getElementById(WIDGET_ID)) return;
  const el = document.createElement("div");
  el.id = WIDGET_ID;
  el.setAttribute("aria-hidden", "true");
  document.body.appendChild(el);
}

function initWidget() {
  if (document.querySelector(".goog-te-combo")) return true;
  if (!window.google?.translate?.TranslateElement) return false;
  ensureWidgetMount();
  try {
    new window.google.translate.TranslateElement(
      { pageLanguage: "it", includedLanguages: "en,it", autoDisplay: false },
      WIDGET_ID
    );
    return true;
  } catch {
    return false;
  }
}

function waitForCombo(timeout = 4500): Promise<boolean> {
  return new Promise((resolve) => {
    const started = Date.now();
    const tick = () => {
      purgeBanner();
      if (document.querySelector(".goog-te-combo")) return resolve(true);
      if (Date.now() - started > timeout) return resolve(false);
      window.setTimeout(tick, 100);
    };
    tick();
  });
}

async function ensureTranslateReady(): Promise<boolean> {
  if (document.querySelector(".goog-te-combo")) return true;
  if (window.__googleTranslateReady) return window.__googleTranslateReady;

  window.__googleTranslateReady = new Promise<boolean>((resolve) => {
    ensureWidgetMount();

    const ready = async () => {
      initWidget();
      resolve(await waitForCombo());
    };

    window.googleTranslateElementInit = () => {
      void ready();
    };

    if (window.google?.translate?.TranslateElement) {
      void ready();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[src*="translate_a/element.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    } else if (!existingScript.id) {
      existingScript.id = SCRIPT_ID;
    }
  });

  return window.__googleTranslateReady;
}

const LangToggle = ({ className = "" }: { className?: string }) => {
  const [lang, setLang] = useState<"it" | "en">("it");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setLang(readLang());
    const obs = new MutationObserver(purgeBanner);
    obs.observe(document.documentElement, { childList: true, subtree: true });
    purgeBanner();
    void ensureTranslateReady().then(() => {
      const savedLang = readLang();
      setLang(savedLang);
      if (savedLang === "en") applyLang("en");
    });
    return () => obs.disconnect();
  }, []);

  const toggle = async () => {
    if (busy) return;
    setBusy(true);
    const next = lang === "it" ? "en" : "it";
    const ready = await ensureTranslateReady();
    writeCookie(`/it/${next}`);

    // Try to switch live without reload
    let ok = ready && applyLang(next);
    if (!ok) {
      // Wait for the widget select to be ready
      for (let i = 0; i < 20 && !ok; i++) {
        await new Promise((r) => setTimeout(r, 100));
        ok = applyLang(next);
      }
    }
    setLang(next);
    setTimeout(purgeBanner, 300);
    setTimeout(purgeBanner, 1000);
    setBusy(false);

    if (!ok) window.location.reload();
  };

  return (
    <button
      onClick={toggle}
      disabled={busy}
      aria-label={`Cambia lingua (attuale: ${lang.toUpperCase()})`}
      className={`notranslate inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold text-primary hover:bg-white/40 active:scale-95 transition-all disabled:opacity-60 ${className}`}
    >
      <Languages className="w-4 h-4" />
      <span className="tabular-nums">{lang === "it" ? "EN" : "IT"}</span>
    </button>
  );
};

export default LangToggle;