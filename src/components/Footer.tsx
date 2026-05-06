import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="mt-24 border-t border-border bg-secondary/40">
    <div className="container mx-auto py-10 grid md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Leaf className="w-5 h-5 text-primary" />
          <span className="font-bold text-primary">L'informatica verde non perde</span>
        </div>
        <p className="text-sm text-muted-foreground">
          UDA <em>“Noi per uno sviluppo sostenibile”</em> — Educazione Civica, classe 4ª F, Indirizzo Informatica. I.I.S.S. "G. Ferraris", Ragusa — A.S. 2025/2026.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-primary">Il team</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li><span className="font-medium text-foreground">Leader:</span> Alessandro Torrisi</li>
          <li><span className="font-medium text-foreground">Segretaria:</span> Ginevra Papa</li>
          <li><span className="font-medium text-foreground">Materiali:</span> Samuele Maiurana</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-primary">Risorse</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>Coordinatrice: Prof.ssa Rosa Azzarelli</li>
          <li>HTML · CSS · JavaScript · React</li>
          <li>GitHub Pages · Canva · MS Designer</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
      © 2026 — UDA Educazione Civica
    </div>
  </footer>
);

export default Footer;
