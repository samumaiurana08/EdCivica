import { Link } from "react-router-dom";
import { ArrowRight, Globe, Cpu, Building2, Activity, Sun, Sparkles, GraduationCap, Calendar, Target } from "lucide-react";
import Tilt3D from "@/components/Tilt3D";
import hero from "@/assets/hero-sostenibilita.jpg";
import imgAgenda from "@/assets/agenda-2030.jpg";
import imgGreen from "@/assets/green-computing.jpg";
import imgAziende from "@/assets/aziende.jpg";
import imgSport from "@/assets/sport.jpg";
import imgFoto from "@/assets/fotovoltaico.jpg";
import { useT } from "@/i18n/LanguageContext";

const Index = () => {
  const t = useT({
    it: {
      eyebrow: "UDA · Noi per uno sviluppo sostenibile · 4ª F",
      heroLead: "L'informatica ",
      heroAccent: "verde",
      heroTail: " non perde.",
      heroSub: "Un viaggio attraverso la sostenibilità ambientale, l'Agenda 2030, il green computing e le tecnologie che proteggono il nostro pianeta.",
      ctaPrimary: "Inizia il viaggio",
      ctaSecondary: "Esplora le sezioni",
      heroAlt: "Sostenibilità e green computing",
      sectionsTitle: "Esplora gli argomenti",
      sectionsSub: "Cinque temi, un'unica missione: capire come informatica e ambiente possano camminare insieme.",
      learnMore: "Scopri di più",
      sections: [
        { to: "/agenda-2030", title: "Agenda 2030", desc: "Gli obiettivi 7, 8, 9, 12 e 13 dell'ONU per uno sviluppo sostenibile." },
        { to: "/green-computing", title: "Green Computing", desc: "Tecnologia che riduce il proprio impatto ambientale. Il caso Infomaniak." },
        { to: "/aziende", title: "Aziende sostenibili", desc: "Da LBG ed Energetica Futura, a Enel e Infomaniak: locale, nazionale, globale." },
        { to: "/sport", title: "Sport sostenibile", desc: "Plogging, alimentazione e attrezzature a basso impatto ambientale." },
        { to: "/fotovoltaico", title: "Fotovoltaico", desc: "Come funziona un impianto solare e i suoi benefici nelle case." },
      ],
      udaEyebrow: "Unità di Apprendimento · Educazione Civica · A.S. 2025/2026",
      udaTitle: '"Noi per uno sviluppo sostenibile"',
      udaText: (
        <>
          Un percorso interdisciplinare della classe <strong>4ª F · Indirizzo Informatica</strong> dell'I.I.S.S.
          {" "}"G. Ferraris" di Ragusa. Attraverso la conoscenza di aziende che producono nel rispetto dell'ambiente
          e attuano un'economia equa e sostenibile, l'UDA fornisce un orientamento etico sull'uso delle risorse
          e rafforza le competenze sociali e civiche. Coordinatrice: <strong>Prof.ssa Rosa Azzarelli</strong>.
        </>
      ),
      udaCards: [
        { eyebrow: "Nucleo concettuale", title: "Sviluppo economico e sostenibilità", icon: Target },
        { eyebrow: "I quadrimestre", title: "Progetto di massima · 15 gen 2026", icon: Calendar },
        { eyebrow: "II quadrimestre", title: "Sito web finale · 15 mag 2026", icon: Calendar },
      ],
    },
    en: {
      eyebrow: "Learning Unit · We for sustainable development · class 4F",
      heroLead: "",
      heroAccent: "Green",
      heroTail: " computing is never losing.",
      heroSub: "A journey through environmental sustainability, the 2030 Agenda, green computing and the technologies that protect our planet.",
      ctaPrimary: "Start the journey",
      ctaSecondary: "Explore the sections",
      heroAlt: "Sustainability and green computing",
      sectionsTitle: "Explore the topics",
      sectionsSub: "Five themes, one mission: discover how computing and the environment can move forward together.",
      learnMore: "Learn more",
      sections: [
        { to: "/agenda-2030", title: "2030 Agenda", desc: "UN Sustainable Development Goals 7, 8, 9, 12 and 13." },
        { to: "/green-computing", title: "Green Computing", desc: "Technology that reduces its environmental impact. The Infomaniak case." },
        { to: "/aziende", title: "Sustainable companies", desc: "From LBG and Energetica Futura to Enel and Infomaniak: local, national, global." },
        { to: "/sport", title: "Sustainable sport", desc: "Plogging, nutrition and low-impact sports gear." },
        { to: "/fotovoltaico", title: "Photovoltaics", desc: "How a solar plant works and its benefits at home." },
      ],
      udaEyebrow: "Learning Unit · Civic Education · School year 2025/2026",
      udaTitle: '"We for sustainable development"',
      udaText: (
        <>
          An interdisciplinary path by class <strong>4F · Computer Science track</strong> of the I.I.S.S.
          {" "}"G. Ferraris" in Ragusa. By studying companies that produce while respecting the environment
          and pursuing a fair, sustainable economy, the unit provides ethical guidance on the use of resources
          and strengthens social and civic skills. Coordinator: <strong>Prof. Rosa Azzarelli</strong>.
        </>
      ),
      udaCards: [
        { eyebrow: "Concept core", title: "Economic development and sustainability", icon: Target },
        { eyebrow: "First semester", title: "Outline project · 15 Jan 2026", icon: Calendar },
        { eyebrow: "Second semester", title: "Final website · 15 May 2026", icon: Calendar },
      ],
    },
  });

  const icons = [Globe, Cpu, Building2, Activity, Sun];
  const images = [imgAgenda, imgGreen, imgAziende, imgSport, imgFoto];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-soft" />
        <div className="container mx-auto relative grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" /> {t.eyebrow}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.05] mb-6">
              {t.heroLead}<span className="bg-clip-text text-transparent gradient-hero">{t.heroAccent}</span>{t.heroTail}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">{t.heroSub}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/agenda-2030"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
              >
                {t.ctaPrimary} <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  document.getElementById("esplora")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-secondary transition-colors font-semibold text-primary"
              >
                {t.ctaSecondary}
              </button>
            </div>
          </div>
          <div className="reveal-x">
            <img
              src={hero}
              alt={t.heroAlt}
              className="w-full h-auto rounded-3xl shadow-glow animate-float"
              width={1536}
              height={1024}
            />
          </div>
        </div>
      </section>

      <section id="esplora" className="container mx-auto py-20">
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{t.sectionsTitle}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.sectionsSub}</p>
        </div>

        <div className="space-y-20">
          {t.sections.map((s, i) => {
            const Icon = icons[i];
            const reverse = i % 2 === 1;
            return (
              <Link
                to={s.to}
                key={s.to}
                className={`group grid md:grid-cols-2 gap-8 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="reveal-x">
                  <Tilt3D className="rounded-3xl">
                    <div className="overflow-hidden rounded-3xl shadow-glow">
                      <img
                        src={images[i]}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </Tilt3D>
                </div>
                <div className="reveal">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 group-hover:text-primary-glow transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 text-lg">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    {t.learnMore} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto pb-20">
        <div className="reveal glass glass-shine rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap className="w-7 h-7 text-primary" />
            <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
              {t.udaEyebrow}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">{t.udaTitle}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-4xl">{t.udaText}</p>
          <div className="grid md:grid-cols-3 gap-4">
            {t.udaCards.map((c) => {
              const I = c.icon;
              return (
                <div key={c.title} className="rounded-2xl bg-primary/5 p-5">
                  <I className="w-7 h-7 text-primary mb-2" />
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.eyebrow}</div>
                  <div className="font-semibold text-primary">{c.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
