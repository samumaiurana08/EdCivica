import PageHero from "@/components/PageHero";
import img from "@/assets/agenda-2030.jpg";
import lakeImg from "@/assets/agenda-lake.jpg";
import { Zap, Briefcase, Cog, Recycle, ThermometerSun, Globe2, Sparkles } from "lucide-react";

const goals = [
  {
    n: 7,
    title: "Energia pulita e accessibile",
    short: "Energia rinnovabile per tutti",
    desc: "Garantire energia sostenibile significa ridurre la dipendenza dai combustibili fossili e investire in fonti rinnovabili come solare, eolico e idroelettrico. L'accesso universale a energia moderna e sicura è essenziale per lo sviluppo economico e sociale, soprattutto nei Paesi in via di sviluppo.",
    icon: Zap,
    color: "bg-yellow-100 text-yellow-700",
    accent: "from-yellow-400/40 to-orange-400/40",
  },
  {
    n: 8,
    title: "Lavoro dignitoso e crescita",
    short: "Green jobs e diritti",
    desc: "La crescita economica deve essere inclusiva e rispettosa dei diritti dei lavoratori. L'obiettivo punta a creare occupazione di qualità, ridurre la disoccupazione giovanile e favorire un'economia che non sfrutti persone né ambiente. I green jobs ne sono un esempio concreto.",
    icon: Briefcase,
    color: "bg-red-100 text-red-700",
    accent: "from-red-400/40 to-pink-400/40",
  },
  {
    n: 9,
    title: "Innovazione e infrastrutture",
    short: "Tecnologia e ricerca",
    desc: "Lo sviluppo di infrastrutture resilienti e l'industrializzazione sostenibile sono fondamentali. Innovazione tecnologica, digitalizzazione e ricerca scientifica sono strumenti indispensabili per rendere le città più intelligenti e ridurre l'impatto ambientale delle attività produttive.",
    icon: Cog,
    color: "bg-orange-100 text-orange-700",
    accent: "from-orange-400/40 to-amber-400/40",
  },
  {
    n: 12,
    title: "Consumo e produzione responsabili",
    short: "Economia circolare",
    desc: "Ridurre sprechi e promuovere l'economia circolare significa ripensare i modelli di produzione e consumo. L'obiettivo invita a gestire in modo sostenibile le risorse naturali, diminuire i rifiuti e incoraggiare comportamenti responsabili da parte di cittadini e imprese.",
    icon: Recycle,
    color: "bg-amber-100 text-amber-700",
    accent: "from-amber-400/40 to-lime-400/40",
  },
  {
    n: 13,
    title: "Lotta al cambiamento climatico",
    short: "Azione per il clima",
    desc: "Il cambiamento climatico è la sfida più urgente del nostro tempo. L'obiettivo 13 richiede azioni immediate per ridurre le emissioni di gas serra, promuovere politiche di adattamento e rafforzare la cooperazione internazionale: senza un impegno concreto, gli altri obiettivi rischiano di essere vanificati.",
    icon: ThermometerSun,
    color: "bg-green-100 text-green-700",
    accent: "from-green-400/40 to-emerald-400/40",
  },
];

const Agenda2030 = () => (
  <>
    <PageHero
      eyebrow="Sviluppo sostenibile"
      title="Agenda 2030"
      subtitle="Un'alleanza globale di 193 Paesi e 17 obiettivi per garantire entro il 2030 un futuro più equo, prospero e rispettoso dell'ambiente."
      image={img}
    />

    {/* Intro */}
    <section className="container mx-auto py-16">
      <div className="max-w-3xl mx-auto reveal text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass glass-shine text-xs font-bold uppercase tracking-widest text-primary mb-6">
          <Globe2 className="w-4 h-4" /> 193 Paesi · 17 Obiettivi
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-5">Cos'è l'Agenda 2030</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Approvata dalle Nazioni Unite nel <strong>2015</strong>, l'Agenda 2030 è un'alleanza globale fondata su <strong>17 Obiettivi di Sviluppo Sostenibile</strong>.
          Qui ci concentriamo sugli obiettivi <strong>7, 8, 9, 12 e 13</strong>: energia, lavoro, innovazione, consumo e clima — la rotta della transizione ecologica ed economica.
        </p>
      </div>
    </section>

    {/* Obiettivi alternati left/right */}
    <section className="container mx-auto pb-12 space-y-10">
      {goals.map((g, idx) => {
        const Icon = g.icon;
        const flipped = idx % 2 === 1;
        return (
          <article
            key={g.n}
            className={`reveal glass glass-shine rounded-3xl p-8 md:p-10 grid md:grid-cols-[auto,1fr] gap-6 md:gap-10 items-center hover:-translate-y-1 transition-transform duration-500 ${
              flipped ? "md:[&>*:first-child]:order-2" : ""
            }`}
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            {/* Numero gigante con gradient */}
            <div className="relative shrink-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${g.accent} blur-2xl rounded-full opacity-70 animate-pulse`} />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl glass glass-shine flex flex-col items-center justify-center">
                <Icon className="w-8 h-8 text-primary mb-1" />
                <div className="text-5xl md:text-6xl font-extrabold text-primary leading-none">{g.n}</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-muted-foreground tracking-[0.25em] mb-2">
                OBIETTIVO {g.n} · {g.short.toUpperCase()}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-4">{g.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{g.desc}</p>
            </div>
          </article>
        );
      })}
    </section>

    {/* Conclusione */}
    <section className="container mx-auto py-16">
      <div className="reveal relative rounded-3xl overflow-hidden shadow-glow group">
        {/* Foto di sfondo con zoom on hover */}
        <img
          src={lakeImg}
          alt="Lago tra le montagne — un pianeta da proteggere"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay gradient per leggibilità */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary/50" />

        <div className="relative p-8 md:p-14 text-primary-foreground text-center">
          <Sparkles className="absolute top-6 right-6 w-8 h-8 opacity-50 animate-pulse" />
          <Sparkles className="absolute bottom-6 left-6 w-6 h-6 opacity-40 animate-pulse" style={{ animationDelay: "1s" }} />
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold tracking-wider uppercase mb-4">
            Conclusione
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 drop-shadow-lg">
            Un pianeta da consegnare al futuro
          </h2>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed drop-shadow">
            Energia pulita, lavoro dignitoso, innovazione, consumo responsabile e lotta al cambiamento climatico
            sono pagine dello stesso libro. Solo attraverso la collaborazione tra <strong>governi, imprese e cittadini</strong> potremo
            consegnare alle generazioni future un pianeta abitabile.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Agenda2030;
