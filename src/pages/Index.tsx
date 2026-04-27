import { Link } from "react-router-dom";
import { ArrowRight, Globe, Cpu, Building2, Activity, Sun, Sparkles } from "lucide-react";
import hero from "@/assets/hero-sostenibilita.jpg";
import imgAgenda from "@/assets/agenda-2030.jpg";
import imgGreen from "@/assets/green-computing.jpg";
import imgAziende from "@/assets/aziende.jpg";
import imgSport from "@/assets/sport.jpg";
import imgFoto from "@/assets/fotovoltaico.jpg";

const sections = [
  { to: "/agenda-2030", title: "Agenda 2030", desc: "Gli obiettivi 7, 8, 9, 12 e 13 dell'ONU per uno sviluppo sostenibile.", icon: Globe, image: imgAgenda },
  { to: "/green-computing", title: "Green Computing", desc: "Tecnologia che riduce il proprio impatto ambientale. Il caso Infomaniak.", icon: Cpu, image: imgGreen },
  { to: "/aziende", title: "Aziende sostenibili", desc: "Da LBG ed Energetica Futura, a Enel e Infomaniak: locale, nazionale, globale.", icon: Building2, image: imgAziende },
  { to: "/sport", title: "Sport sostenibile", desc: "Plogging, alimentazione e attrezzature a basso impatto ambientale.", icon: Activity, image: imgSport },
  { to: "/fotovoltaico", title: "Fotovoltaico", desc: "Come funziona un impianto solare e i suoi benefici nelle case.", icon: Sun, image: imgFoto },
];

const Index = () => (
  <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-soft" />
      <div className="container mx-auto relative grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5" /> Educazione Civica · UDA
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.05] mb-6">
            L'informatica <span className="bg-clip-text text-transparent gradient-hero">verde</span> non perde.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Un viaggio attraverso la sostenibilità ambientale, l'Agenda 2030, il green computing e le tecnologie che proteggono il nostro pianeta.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/agenda-2030"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Inizia il viaggio <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => {
                document.getElementById("esplora")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-secondary transition-colors font-semibold text-primary"
            >
              Esplora le sezioni
            </button>
          </div>
        </div>
        <div className="reveal-x">
          <img
            src={hero}
            alt="Sostenibilità e green computing"
            className="w-full h-auto rounded-3xl shadow-glow animate-float"
            width={1536}
            height={1024}
          />
        </div>
      </div>
    </section>

    <section id="esplora" className="container mx-auto py-20">
      <div className="text-center mb-14 reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Esplora gli argomenti</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Cinque temi, un'unica missione: capire come informatica e ambiente possano camminare insieme.
        </p>
      </div>

      <div className="space-y-20">
        {sections.map((s, i) => {
          const Icon = s.icon;
          const reverse = i % 2 === 1;
          return (
            <Link
              to={s.to}
              key={s.to}
              className={`group grid md:grid-cols-2 gap-8 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="reveal-x">
                <div className="overflow-hidden rounded-3xl shadow-card">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
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
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  </>
);

export default Index;
