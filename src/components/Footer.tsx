import { Leaf } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const Footer = () => {
  const t = useT({
    it: {
      brand: "Green computing is never losing",
      tagline: (
        <>
          UDA <em>“Noi per uno sviluppo sostenibile”</em> — Educazione Civica, classe 4ª F, Indirizzo Informatica. I.I.S.S. "G. Ferraris", Ragusa — A.S. 2025/2026.
        </>
      ),
      teamTitle: "Il team",
      team: [
        { role: "Leader:", name: "Alessandro Torrisi" },
        { role: "Segretaria:", name: "Ginevra Papa" },
        { role: "Materiali:", name: "Samuele Maiurana" },
      ],
      resTitle: "Risorse",
      resources: [
        "Coordinatrice: Prof.ssa Rosa Azzarelli",
        "HTML · CSS · JavaScript · React",
        "GitHub Pages · Canva · MS Designer",
      ],
      copyright: "© 2026 — UDA Educazione Civica",
    },
    en: {
      brand: "Green computing is never losing",
      tagline: (
        <>
          Learning Unit <em>“We for sustainable development”</em> — Civic Education, class 4F, Computer Science track. I.I.S.S. "G. Ferraris", Ragusa — School year 2025/2026.
        </>
      ),
      teamTitle: "The team",
      team: [
        { role: "Leader:", name: "Alessandro Torrisi" },
        { role: "Secretary:", name: "Ginevra Papa" },
        { role: "Materials:", name: "Samuele Maiurana" },
      ],
      resTitle: "Resources",
      resources: [
        "Coordinator: Prof. Rosa Azzarelli",
        "HTML · CSS · JavaScript · React",
        "GitHub Pages · Canva · MS Designer",
      ],
      copyright: "© 2026 — Civic Education Learning Unit",
    },
  });

  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container mx-auto py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="font-bold text-primary">{t.brand}</span>
          </div>
          <p className="text-sm text-muted-foreground">{t.tagline}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-primary">{t.teamTitle}</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {t.team.map((m) => (
              <li key={m.name}>
                <span className="font-medium text-foreground">{m.role}</span> {m.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-primary">{t.resTitle}</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {t.resources.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;
