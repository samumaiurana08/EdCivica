import PageHero from "@/components/PageHero";
import img from "@/assets/agenda-2030.jpg";
import lakeImg from "@/assets/agenda-lake.jpg";
import { Zap, Briefcase, Cog, Recycle, ThermometerSun, Globe2, Sparkles } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const Agenda2030 = () => {
  const t = useT({
    it: {
      hero: {
        eyebrow: "Sviluppo sostenibile",
        title: "Agenda 2030",
        subtitle: "Un'alleanza globale di 193 Paesi e 17 obiettivi per garantire entro il 2030 un futuro più equo, prospero e rispettoso dell'ambiente.",
      },
      badge: "193 Paesi · 17 Obiettivi",
      introTitle: "Cos'è l'Agenda 2030",
      introText: (
        <>
          Approvata dalle Nazioni Unite nel <strong>2015</strong>, l'Agenda 2030 è un'alleanza globale fondata su <strong>17 Obiettivi di Sviluppo Sostenibile</strong>.
          Qui ci concentriamo sugli obiettivi <strong>7, 8, 9, 12 e 13</strong>: energia, lavoro, innovazione, consumo e clima — la rotta della transizione ecologica ed economica.
        </>
      ),
      goalLabel: "OBIETTIVO",
      goals: [
        { n: 7, title: "Energia pulita e accessibile", short: "Energia rinnovabile per tutti", desc: "Garantire energia sostenibile significa ridurre la dipendenza dai combustibili fossili e investire in fonti rinnovabili come solare, eolico e idroelettrico. L'accesso universale a energia moderna e sicura è essenziale per lo sviluppo economico e sociale, soprattutto nei Paesi in via di sviluppo." },
        { n: 8, title: "Lavoro dignitoso e crescita", short: "Green jobs e diritti", desc: "La crescita economica deve essere inclusiva e rispettosa dei diritti dei lavoratori. L'obiettivo punta a creare occupazione di qualità, ridurre la disoccupazione giovanile e favorire un'economia che non sfrutti persone né ambiente. I green jobs ne sono un esempio concreto." },
        { n: 9, title: "Innovazione e infrastrutture", short: "Tecnologia e ricerca", desc: "Lo sviluppo di infrastrutture resilienti e l'industrializzazione sostenibile sono fondamentali. Innovazione tecnologica, digitalizzazione e ricerca scientifica sono strumenti indispensabili per rendere le città più intelligenti e ridurre l'impatto ambientale delle attività produttive." },
        { n: 12, title: "Consumo e produzione responsabili", short: "Economia circolare", desc: "Un obiettivo a doppio binario: chi produce (lato offerta) deve garantire modelli sostenibili in un'ottica di economia circolare — impiego degli scarti, riciclo e riutilizzo delle materie già entrate nel processo produttivo. Chi consuma (lato domanda) deve poter compiere scelte consapevoli, preferendo prodotti con garanzia di sostenibilità." },
        { n: 13, title: "Lotta al cambiamento climatico", short: "Azione per il clima", desc: "Dalla rivoluzione industriale il consumo di risorse naturali, la produzione di rifiuti e le emissioni di gas serra sono cresciuti senza sosta. Dissociare la crescita economica dall'uso intensivo di risorse e contrastare i rischi climatici è la sfida più importante della società contemporanea: serve una radicale inversione di rotta, con politiche orientate alla sostenibilità a tutti i livelli — produzione, commercializzazione e consumo." },
      ],
      conclLabel: "Conclusione",
      conclTitle: "Un pianeta da consegnare al futuro",
      conclText: (
        <>
          Energia pulita, lavoro dignitoso, innovazione, consumo responsabile e lotta al cambiamento climatico
          sono pagine dello stesso libro. Solo attraverso la collaborazione tra <strong>governi, imprese e cittadini</strong> potremo
          consegnare alle generazioni future un pianeta abitabile.
        </>
      ),
      lakeAlt: "Lago tra le montagne — un pianeta da proteggere",
    },
    en: {
      hero: {
        eyebrow: "Sustainable development",
        title: "2030 Agenda",
        subtitle: "A global alliance of 193 countries and 17 goals to deliver a fairer, more prosperous and environmentally sound future by 2030.",
      },
      badge: "193 Countries · 17 Goals",
      introTitle: "What is the 2030 Agenda",
      introText: (
        <>
          Adopted by the United Nations in <strong>2015</strong>, the 2030 Agenda is a global alliance built on <strong>17 Sustainable Development Goals</strong>.
          Here we focus on goals <strong>7, 8, 9, 12 and 13</strong>: energy, work, innovation, consumption and climate — the path of the ecological and economic transition.
        </>
      ),
      goalLabel: "GOAL",
      goals: [
        { n: 7, title: "Affordable and clean energy", short: "Renewable energy for all", desc: "Securing sustainable energy means cutting our reliance on fossil fuels and investing in renewable sources such as solar, wind and hydropower. Universal access to modern, reliable energy is essential for economic and social development, especially in developing countries." },
        { n: 8, title: "Decent work and growth", short: "Green jobs and rights", desc: "Economic growth must be inclusive and respect workers' rights. The goal aims to create quality employment, reduce youth unemployment and promote an economy that exploits neither people nor the environment. Green jobs are a concrete example." },
        { n: 9, title: "Innovation and infrastructure", short: "Technology and research", desc: "Building resilient infrastructure and sustainable industrialization is essential. Technological innovation, digitalization and scientific research are key tools to make cities smarter and reduce the environmental footprint of production." },
        { n: 12, title: "Responsible consumption and production", short: "Circular economy", desc: "A two-sided goal: producers (supply side) must adopt sustainable models in line with the circular economy — using waste, recycling and reusing materials already in the production process. Consumers (demand side) must be able to make informed choices, favoring products with sustainability guarantees." },
        { n: 13, title: "Climate action", short: "Action for the climate", desc: "Since the industrial revolution, the use of natural resources, waste output and greenhouse gas emissions have grown relentlessly. Decoupling economic growth from intensive resource use and tackling climate risk is the greatest challenge of contemporary society: a radical change of course is needed, with sustainability-oriented policies across production, distribution and consumption." },
      ],
      conclLabel: "Conclusion",
      conclTitle: "A planet to hand to the future",
      conclText: (
        <>
          Clean energy, decent work, innovation, responsible consumption and climate action
          are chapters of the same book. Only through cooperation between <strong>governments, businesses and citizens</strong> can we
          hand future generations a livable planet.
        </>
      ),
      lakeAlt: "Lake between the mountains — a planet to protect",
    },
  });

  const icons = [Zap, Briefcase, Cog, Recycle, ThermometerSun];
  const colors = [
    "from-yellow-400/40 to-orange-400/40",
    "from-red-400/40 to-pink-400/40",
    "from-orange-400/40 to-amber-400/40",
    "from-amber-400/40 to-lime-400/40",
    "from-green-400/40 to-emerald-400/40",
  ];

  return (
    <>
      <PageHero {...t.hero} image={img} />

      <section className="container mx-auto py-16">
        <div className="max-w-3xl mx-auto reveal text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass glass-shine text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <Globe2 className="w-4 h-4" /> {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-5">{t.introTitle}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.introText}</p>
        </div>
      </section>

      <section className="container mx-auto pb-12 space-y-10">
        {t.goals.map((g, idx) => {
          const Icon = icons[idx];
          const flipped = idx % 2 === 1;
          return (
            <article
              key={g.n}
              className={`reveal glass glass-shine rounded-3xl p-8 md:p-10 grid md:grid-cols-[auto,1fr] gap-6 md:gap-10 items-center hover:-translate-y-1 transition-transform duration-500 ${
                flipped ? "md:[&>*:first-child]:order-2" : ""
              }`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="relative shrink-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${colors[idx]} blur-2xl rounded-full opacity-70 animate-pulse`} />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl glass glass-shine flex flex-col items-center justify-center">
                  <Icon className="w-8 h-8 text-primary mb-1" />
                  <div className="text-5xl md:text-6xl font-extrabold text-primary leading-none">{g.n}</div>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold text-muted-foreground tracking-[0.25em] mb-2">
                  {t.goalLabel} {g.n} · {g.short.toUpperCase()}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-4">{g.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{g.desc}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="container mx-auto py-16">
        <div className="reveal relative rounded-3xl overflow-hidden shadow-glow group">
          <img
            src={lakeImg}
            alt={t.lakeAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary/50" />

          <div className="relative p-8 md:p-14 text-primary-foreground text-center">
            <Sparkles className="absolute top-6 right-6 w-8 h-8 opacity-50 animate-pulse" />
            <Sparkles className="absolute bottom-6 left-6 w-6 h-6 opacity-40 animate-pulse" style={{ animationDelay: "1s" }} />
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold tracking-wider uppercase mb-4">
              {t.conclLabel}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 drop-shadow-lg">{t.conclTitle}</h2>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed drop-shadow">{t.conclText}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Agenda2030;
