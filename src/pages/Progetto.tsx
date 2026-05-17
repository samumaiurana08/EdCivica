import PageHero from "@/components/PageHero";
import hero from "@/assets/hero-sostenibilita.jpg";
import { GraduationCap, Calendar, Target, Users, CheckCircle2 } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const Progetto = () => {
  const t = useT({
    it: {
      hero: {
        eyebrow: "UDA · Educazione Civica · A.S. 2025/2026",
        title: "Il Progetto",
        subtitle: `"Noi per uno sviluppo sostenibile" — un percorso interdisciplinare della classe 4ª F (Informatica) dell'I.I.S.S. "G. Ferraris" di Ragusa.`,
      },
      coreLabel: "Nucleo concettuale · Sviluppo economico e sostenibilità",
      finTitle: "Finalità dell'UDA",
      finText: (<>Conoscere aziende che producono nel rispetto dell'ambiente e attuano un'economia equa e sostenibile, fornendo un orientamento etico sull'uso delle risorse e rafforzando le competenze sociali e civiche. Coordinatrice: <strong>Prof.ssa Rosa Azzarelli</strong>.</>),
      phases: [
        { eyebrow: "Fase 1 · I quadrimestre", title: "Progetto di massima", text: (<>Studio dei contenuti, raccolta materiali, struttura del sito e definizione delle responsabilità. <strong>Scadenza: 15 gennaio 2026</strong>.</>) },
        { eyebrow: "Fase 2 · II quadrimestre", title: "Sito web finale", text: (<>Realizzazione completa del sito, presentazione e valutazione del prodotto digitale.<strong> Scadenza: 15 maggio 2026</strong>.</>) },
      ],
      teamTitle: "Il team",
      team: [
        { n: "Alessandro Torrisi", r: "Sviluppo & coordinamento" },
        { n: "Ginevra Papa", r: "Contenuti & ricerca" },
        { n: "Samuele Maiurana", r: "Design & multimedia" },
      ],
      goalsTitle: "Obiettivi formativi",
      goals: [
        "Sviluppare consapevolezza etica sull'uso delle risorse",
        "Conoscere casi reali di imprese sostenibili",
        "Saper comunicare contenuti complessi tramite il web",
        "Collaborare in team con ruoli e scadenze",
        "Integrare competenze tecniche e civiche",
        "Promuovere comportamenti responsabili nella vita quotidiana",
      ],
    },
    en: {
      hero: {
        eyebrow: "Learning Unit · Civic Education · School year 2025/2026",
        title: "The Project",
        subtitle: `"We for sustainable development" — an interdisciplinary path by class 4F (Computer Science) of the I.I.S.S. "G. Ferraris" in Ragusa.`,
      },
      coreLabel: "Concept core · Economic development and sustainability",
      finTitle: "Aim of the unit",
      finText: (<>Getting to know companies that produce while respecting the environment and pursuing a fair, sustainable economy, providing ethical guidance on the use of resources and strengthening social and civic skills. Coordinator: <strong>Prof. Rosa Azzarelli</strong>.</>),
      phases: [
        { eyebrow: "Phase 1 · First semester", title: "Outline project", text: (<>Content study, collection of materials, site structure and definition of responsibilities. <strong>Deadline: 15 January 2026</strong>.</>) },
        { eyebrow: "Phase 2 · Second semester", title: "Final website", text: (<>Full delivery of the website, presentation and assessment of the digital product.<strong> Deadline: 15 May 2026</strong>.</>) },
      ],
      teamTitle: "The team",
      team: [
        { n: "Alessandro Torrisi", r: "Development & coordination" },
        { n: "Ginevra Papa", r: "Content & research" },
        { n: "Samuele Maiurana", r: "Design & multimedia" },
      ],
      goalsTitle: "Learning goals",
      goals: [
        "Develop ethical awareness on the use of resources",
        "Learn about real cases of sustainable companies",
        "Communicate complex content through the web",
        "Collaborate in a team with roles and deadlines",
        "Integrate technical and civic skills",
        "Promote responsible behaviour in everyday life",
      ],
    },
  });

  return (
    <>
      <PageHero {...t.hero} image={hero} />
      <section className="container mx-auto py-16 space-y-10">
        <div className="reveal glass glass-shine rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap className="w-7 h-7 text-primary" />
            <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">{t.coreLabel}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">{t.finTitle}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">{t.finText}</p>

          <div className="mt-8 pt-8 border-t border-border/60">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-extrabold text-primary">{t.goalsTitle}</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-3">
              {t.goals.map((o) => (
                <li key={o} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.phases.map((p) => (
            <div key={p.title} className="reveal glass glass-shine rounded-3xl p-8">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{p.eyebrow}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal glass glass-shine rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-7 h-7 text-primary" />
            <h2 className="text-3xl font-extrabold text-primary">{t.teamTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {t.team.map((m) => (
              <div key={m.n} className="rounded-2xl bg-primary/5 p-5">
                <div className="font-bold text-primary">{m.n}</div>
                <div className="text-sm text-muted-foreground">{m.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Progetto;
