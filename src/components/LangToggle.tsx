import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

const COOKIE = "googtrans";

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

const LangToggle = ({ className = "" }: { className?: string }) => {
  const [lang, setLang] = useState<"it" | "en">("it");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setLang(readLang());
    const obs = new MutationObserver(purgeBanner);
    obs.observe(document.documentElement, { childList: true, subtree: true });
    purgeBanner();
    return () => obs.disconnect();
  }, []);

  const toggle = async () => {
    if (busy) return;
    setBusy(true);
    const next = lang === "it" ? "en" : "it";
    writeCookie(`/it/${next}`);

    // Try to switch live without reload
    let ok = applyLang(next);
    if (!ok) {
      // Wait for the widget select to be ready
      for (let i = 0; i < 25 && !ok; i++) {
        await new Promise((r) => setTimeout(r, 120));
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