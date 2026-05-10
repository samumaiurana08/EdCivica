import PageHero from "@/components/PageHero";
import hero from "@/assets/hero-sostenibilita.jpg";
import { GraduationCap, Calendar, Target, Users, BookOpen, CheckCircle2 } from "lucide-react";

const Progetto = () => (
  <>
    <PageHero
      eyebrow="UDA · Educazione Civica · A.S. 2025/2026"
      title="Il Progetto"
      subtitle='"Noi per uno sviluppo sostenibile" — un percorso interdisciplinare della classe 4ª F (Informatica) dell\'I.I.S.S. "G. Ferraris" di Ragusa.'
      image={hero}
    />

    <section className="container mx-auto py-16 space-y-10">
      <div className="reveal glass glass-shine rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-3">
          <GraduationCap className="w-7 h-7 text-primary" />
          <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
            Nucleo concettuale · Sviluppo economico e sostenibilità
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Finalità dell'UDA</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
          Conoscere aziende che producono nel rispetto dell'ambiente e attuano un'economia equa e
          sostenibile, fornendo un orientamento etico sull'uso delle risorse e rafforzando le
          competenze sociali e civiche. Coordinatrice: <strong>Prof.ssa Rosa Azzarelli</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="reveal glass glass-shine rounded-3xl p-8">
          <Calendar className="w-8 h-8 text-primary mb-3" />
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Fase 1 · I quadrimestre</div>
          <h3 className="text-2xl font-bold text-primary mb-3">Progetto di massima</h3>
          <p className="text-muted-foreground leading-relaxed">
            Studio dei contenuti, raccolta materiali, struttura del sito e definizione delle
            responsabilità. <strong>Scadenza: 15 gennaio 2026</strong>.
          </p>
        </div>
        <div className="reveal glass glass-shine rounded-3xl p-8">
          <Calendar className="w-8 h-8 text-primary mb-3" />
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Fase 2 · II quadrimestre</div>
          <h3 className="text-2xl font-bold text-primary mb-3">Sito web finale</h3>
          <p className="text-muted-foreground leading-relaxed">
            Realizzazione completa del sito, presentazione e valutazione del prodotto digitale.
            <strong> Scadenza: 15 maggio 2026</strong>.
          </p>
        </div>
      </div>

      <div className="reveal glass glass-shine rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-7 h-7 text-primary" />
          <h2 className="text-3xl font-extrabold text-primary">Discipline coinvolte</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { d: "Italiano", t: "Letteratura e ambiente" },
            { d: "Informatica", t: "Sviluppo del sito web" },
            { d: "Matematica", t: "Dati e modelli statistici" },
            { d: "Telecomunicazioni", t: "Energie e fotovoltaico" },
            { d: "Inglese", t: "Sustainability e lessico tecnico" },
            { d: "Scienze Motorie", t: "Sport e stili di vita sostenibili" },
          ].map((x) => (
            <div key={x.d} className="rounded-2xl bg-primary/5 p-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{x.d}</div>
              <div className="font-semibold text-primary">{x.t}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal glass glass-shine rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-7 h-7 text-primary" />
          <h2 className="text-3xl font-extrabold text-primary">Il team</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { n: "Alessandro Torrisi", r: "Sviluppo & coordinamento" },
            { n: "Ginevra Papa", r: "Contenuti & ricerca" },
            { n: "Samuele Maiurana", r: "Design & multimedia" },
          ].map((m) => (
            <div key={m.n} className="rounded-2xl bg-primary/5 p-5">
              <div className="font-bold text-primary">{m.n}</div>
              <div className="text-sm text-muted-foreground">{m.r}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal glass glass-shine rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-7 h-7 text-primary" />
          <h2 className="text-3xl font-extrabold text-primary">Obiettivi formativi</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-3">
          {[
            "Sviluppare consapevolezza etica sull'uso delle risorse",
            "Conoscere casi reali di imprese sostenibili",
            "Saper comunicare contenuti complessi tramite il web",
            "Collaborare in team con ruoli e scadenze",
            "Integrare competenze tecniche e civiche",
            "Promuovere comportamenti responsabili nella vita quotidiana",
          ].map((o) => (
            <li key={o} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default Progetto;