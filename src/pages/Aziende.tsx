import PageHero from "@/components/PageHero";
import img from "@/assets/aziende.jpg";
import lbgImg from "@/assets/azienda-lbg.jpg";
import enelImg from "@/assets/azienda-enel.jpg";
import energiaFuturaImg from "@/assets/azienda-energia-futura.jpg";
import infomaniakImg from "@/assets/azienda-infomaniak.jpg";
import { MapPin, Globe, Flag, Leaf, Sprout, Recycle, Wind, Sun, Zap, Battery, Server, ShieldCheck, HeartHandshake, Cpu } from "lucide-react";

interface Azienda {
  id: string;
  scala: string;
  scalaIcon: typeof MapPin;
  name: string;
  tagline: string;
  image: string;
  intro: string;
  sections: { icon: typeof MapPin; title: string; text: string }[];
}

const aziende: Azienda[] = [
  {
    id: "lbg",
    scala: "Locale",
    scalaIcon: MapPin,
    name: "Locust Bean Gum (LBG)",
    tagline: "Sostenibilità e innovazione nel mondo alimentare",
    image: lbgImg,
    intro:
      "Il Locust Bean Gum, estratto dai semi della carruba, è un addensante naturale usato in alimenti e cosmetici. Una filiera mediterranea che unisce efficienza, sicurezza e rispetto per l'ambiente.",
    sections: [
      {
        icon: Sprout,
        title: "Produzione sostenibile",
        text: "Coltivazione della carruba nel bacino mediterraneo con irrigazione efficiente, raccolta manuale e processi a basso impatto energetico. Le scorie diventano fertilizzante o mangime, in linea con l'economia circolare.",
      },
      {
        icon: Leaf,
        title: "Naturale e biodegradabile",
        text: "LBG è biodegradabile e non tossico: migliora consistenza e stabilità di gelati, salse, dessert e cosmetici riducendo gli additivi chimici grazie a innovazione di laboratorio.",
      },
      {
        icon: Recycle,
        title: "Benefici ambientali e sociali",
        text: "La carruba preserva terreni marginali, favorisce biodiversità e riduce l'erosione. Sostiene comunità locali generando lavoro agricolo e valorizzando produzioni tipiche siciliane.",
      },
    ],
  },
  {
    id: "energia-futura",
    scala: "Locale",
    scalaIcon: MapPin,
    name: "Energia Futura",
    tagline: "Innovazione green che unisce",
    image: energiaFuturaImg,
    intro:
      "Il Gruppo Energia Futura sviluppa impianti da Fonti Energetiche Rinnovabili (FER) puntando al fotovoltaico su larga scala, con l'obiettivo di 400 MW entro il 2030 e un mix che integra eolico e biometano verso il Net Zero.",
    sections: [
      {
        icon: Battery,
        title: "Tecnologia e agrovoltaico",
        text: "Sistemi BESS (Battery Energy Storage Systems) stabilizzano la rete superando l'intermittenza. L'agrovoltaico permette la coesistenza tra pannelli solari e agricoltura, mentre l'idrogeno verde decarbonizza i settori hard-to-abate.",
      },
      {
        icon: Zap,
        title: "Efficienza energetica",
        text: "Opera come Energy Service Company: relamping LED e cogenerazione riducono gli sprechi industriali e supportano i partner nell'ottenimento dei Titoli di Efficienza Energetica (TEE).",
      },
      {
        icon: HeartHandshake,
        title: "Responsabilità sociale",
        text: "Ogni progetto include piani di riforestazione e bonifica. Il crowdfunding energetico consente ai cittadini di partecipare agli investimenti, generando valore economico e sociale condiviso.",
      },
    ],
  },
  {
    id: "enel",
    scala: "Nazionale",
    scalaIcon: Flag,
    name: "Enel Energia Rinnovabile",
    tagline: "Il futuro dell'energia sostenibile",
    image: enelImg,
    intro:
      "Enel guida la transizione energetica globale con investimenti in fonti pulite, efficienza e innovazione. Un modello concreto di come il settore energetico possa ridurre le emissioni e promuovere uno sviluppo sostenibile.",
    sections: [
      {
        icon: Wind,
        title: "Fonti rinnovabili e tecnologia",
        text: "Investe in solare, eolico, geotermico e idroelettrico. Tecnologie di monitoraggio ottimizzano la produzione, riducono gli sprechi e integrano l'energia accumulata garantendo continuità anche durante i picchi di consumo.",
      },
      {
        icon: Cpu,
        title: "Smart grid e innovazione",
        text: "Integra smart grid, sistemi di accumulo e digitalizzazione dei processi. Collabora con università e startup per sviluppare tecnologie avanzate, creando occupazione qualificata nel settore green.",
      },
      {
        icon: Sun,
        title: "Efficienza e città sostenibili",
        text: "Promuove l'efficienza energetica tra cittadini e imprese con consulenze, incentivi e programmi educativi. Investimenti in smart grid e illuminazione efficiente costruiscono città più sostenibili.",
      },
    ],
  },
  {
    id: "infomaniak",
    scala: "Internazionale",
    scalaIcon: Globe,
    name: "Infomaniak",
    tagline: "La sostenibilità entra nel web hosting",
    image: infomaniakImg,
    intro:
      "Azienda svizzera che ha costruito la propria identità attorno allo sviluppo sostenibile: infrastrutture alimentate da energie rinnovabili, ottimizzazione energetica e gestione etica dei dati dimostrano che innovazione e ambiente possono coesistere.",
    sections: [
      {
        icon: Server,
        title: "Data center efficienti",
        text: "Progetta data center ad alta efficienza che riducono drasticamente gli sprechi. Il calore prodotto dai server viene recuperato e riutilizzato per il riscaldamento urbano; l'energia proviene esclusivamente da fonti rinnovabili certificate.",
      },
      {
        icon: ShieldCheck,
        title: "Etica digitale e privacy",
        text: "Non monetizza i dati personali e garantisce elevati standard di protezione della privacy. I server in Svizzera rispondono a criteri di qualità, sicurezza e controllo diretto dell'impatto ambientale.",
      },
      {
        icon: HeartHandshake,
        title: "Responsabilità sociale",
        text: "Sostiene progetti locali, iniziative culturali e programmi di solidarietà, dimostrando che le aziende tecnologiche possono diventare protagoniste della transizione ecologica.",
      },
    ],
  },
];

const Aziende = () => (
  <>
    <PageHero
      eyebrow="Casi di studio"
      title="Aziende sostenibili"
      subtitle="Quattro realtà che, dalla scala locale fino a quella internazionale, dimostrano che fare impresa in modo responsabile è possibile."
      image={img}
    />

    {/* Quick nav */}
    <section className="container mx-auto pt-12">
      <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {aziende.map((a) => {
          const Icon = a.scalaIcon;
          return (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="glass glass-shine p-4 rounded-2xl flex items-center gap-3 hover:-translate-y-1 transition-transform"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {a.scala}
                </div>
                <div className="text-sm font-semibold text-primary leading-tight">{a.name}</div>
              </div>
            </a>
          );
        })}
      </div>
    </section>

    <section className="container mx-auto py-16 space-y-20">
      {aziende.map((a, idx) => {
        const ScalaIcon = a.scalaIcon;
        const reverse = idx % 2 === 1;
        return (
          <article key={a.id} id={a.id} className="scroll-mt-24">
            <div
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="reveal-x">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-glow"
                  loading="lazy"
                />
              </div>
              <div className="reveal">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-bold uppercase tracking-widest">
                    <ScalaIcon className="w-3.5 h-3.5" /> {a.scala}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 leading-tight">
                  {a.name}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground italic mb-5">
                  {a.tagline}
                </p>
                <p className="text-foreground leading-relaxed">{a.intro}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-8">
              {a.sections.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="reveal glass p-6 rounded-2xl hover:-translate-y-1 transition-transform"
                  >
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary text-primary-foreground mb-3">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </article>
        );
      })}
    </section>
  </>
);

export default Aziende;
