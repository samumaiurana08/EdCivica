import PageHero from "@/components/PageHero";
import Tilt3D from "@/components/Tilt3D";
import img from "@/assets/aziende.jpg";
import lbgImg from "@/assets/azienda-lbg.jpg";
import enelImg from "@/assets/azienda-enel.jpg";
import energiaFuturaImg from "@/assets/azienda-energia-futura.jpg";
import infomaniakImg from "@/assets/azienda-infomaniak.jpg";
import { MapPin, Globe, Flag, Leaf, Sprout, Recycle, Wind, Sun, Zap, Battery, Server, ShieldCheck, HeartHandshake, Cpu } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const Aziende = () => {
  const t = useT({
    it: {
      hero: {
        eyebrow: "Casi di studio",
        title: "Aziende sostenibili",
        subtitle: "Quattro realtà che, dalla scala locale fino a quella internazionale, dimostrano che fare impresa in modo responsabile è possibile.",
      },
      aziende: [
        {
          id: "lbg", scala: "Locale", name: "Locust Bean Gum (LBG)",
          tagline: "Sostenibilità e innovazione nel mondo alimentare",
          intro: "Il Locust Bean Gum, estratto dai semi della carruba, è un addensante naturale usato in alimenti e cosmetici. Una filiera mediterranea che unisce efficienza, sicurezza e rispetto per l'ambiente.",
          sections: [
            { title: "Produzione sostenibile", text: "Coltivazione della carruba nel bacino mediterraneo con irrigazione efficiente, raccolta manuale e processi a basso impatto energetico. Le scorie diventano fertilizzante o mangime, in linea con l'economia circolare." },
            { title: "Naturale e biodegradabile", text: "LBG è biodegradabile e non tossico: migliora consistenza e stabilità di gelati, salse, dessert e cosmetici riducendo gli additivi chimici grazie a innovazione di laboratorio." },
            { title: "Benefici ambientali e sociali", text: "La carruba preserva terreni marginali, favorisce biodiversità e riduce l'erosione. Sostiene comunità locali generando lavoro agricolo e valorizzando produzioni tipiche siciliane." },
          ],
        },
        {
          id: "energia-futura", scala: "Locale", name: "Energia Futura",
          tagline: "Innovazione green che unisce",
          intro: "Il Gruppo Energia Futura sviluppa impianti da Fonti Energetiche Rinnovabili (FER) puntando al fotovoltaico su larga scala, con l'obiettivo di 400 MW entro il 2030 e un mix che integra eolico e biometano verso il Net Zero.",
          sections: [
            { title: "Tecnologia e agrovoltaico", text: "Sistemi BESS (Battery Energy Storage Systems) stabilizzano la rete superando l'intermittenza. L'agrovoltaico permette la coesistenza tra pannelli solari e agricoltura, mentre l'idrogeno verde decarbonizza i settori hard-to-abate." },
            { title: "Efficienza energetica", text: "Opera come Energy Service Company: relamping LED e cogenerazione riducono gli sprechi industriali e supportano i partner nell'ottenimento dei Titoli di Efficienza Energetica (TEE)." },
            { title: "Responsabilità sociale", text: "Ogni progetto include piani di riforestazione e bonifica. Il crowdfunding energetico consente ai cittadini di partecipare agli investimenti, generando valore economico e sociale condiviso." },
          ],
        },
        {
          id: "enel", scala: "Nazionale", name: "Enel Energia Rinnovabile",
          tagline: "Il futuro dell'energia sostenibile",
          intro: "Enel guida la transizione energetica globale con investimenti in fonti pulite, efficienza e innovazione. Un modello concreto di come il settore energetico possa ridurre le emissioni e promuovere uno sviluppo sostenibile.",
          sections: [
            { title: "Fonti rinnovabili e tecnologia", text: "Investe in solare, eolico, geotermico e idroelettrico. Tecnologie di monitoraggio ottimizzano la produzione, riducono gli sprechi e integrano l'energia accumulata garantendo continuità anche durante i picchi di consumo." },
            { title: "Smart grid e innovazione", text: "Integra smart grid, sistemi di accumulo e digitalizzazione dei processi. Collabora con università e startup per sviluppare tecnologie avanzate, creando occupazione qualificata nel settore green." },
            { title: "Efficienza e città sostenibili", text: "Promuove l'efficienza energetica tra cittadini e imprese con consulenze, incentivi e programmi educativi. Investimenti in smart grid e illuminazione efficiente costruiscono città più sostenibili." },
          ],
        },
        {
          id: "infomaniak", scala: "Internazionale", name: "Infomaniak",
          tagline: "La sostenibilità entra nel web hosting",
          intro: "Azienda svizzera che ha costruito la propria identità attorno allo sviluppo sostenibile: infrastrutture alimentate da energie rinnovabili, ottimizzazione energetica e gestione etica dei dati dimostrano che innovazione e ambiente possono coesistere.",
          sections: [
            { title: "Data center efficienti", text: "Progetta data center ad alta efficienza che riducono drasticamente gli sprechi. Il calore prodotto dai server viene recuperato e riutilizzato per il riscaldamento urbano; l'energia proviene esclusivamente da fonti rinnovabili certificate." },
            { title: "Etica digitale e privacy", text: "Non monetizza i dati personali e garantisce elevati standard di protezione della privacy. I server in Svizzera rispondono a criteri di qualità, sicurezza e controllo diretto dell'impatto ambientale." },
            { title: "Responsabilità sociale", text: "Sostiene progetti locali, iniziative culturali e programmi di solidarietà, dimostrando che le aziende tecnologiche possono diventare protagoniste della transizione ecologica." },
          ],
        },
      ],
    },
    en: {
      hero: {
        eyebrow: "Case studies",
        title: "Sustainable companies",
        subtitle: "Four organisations that, from local to international scale, prove that doing business responsibly is possible.",
      },
      aziende: [
        {
          id: "lbg", scala: "Local", name: "Locust Bean Gum (LBG)",
          tagline: "Sustainability and innovation in the food world",
          intro: "Locust Bean Gum, extracted from carob seeds, is a natural thickener used in food and cosmetics. A Mediterranean supply chain that combines efficiency, safety and respect for the environment.",
          sections: [
            { title: "Sustainable production", text: "Carob is grown in the Mediterranean basin with efficient irrigation, manual harvesting and low-energy processes. Waste becomes fertilizer or feed, in line with the circular economy." },
            { title: "Natural and biodegradable", text: "LBG is biodegradable and non-toxic: it improves the texture and stability of ice cream, sauces, desserts and cosmetics, reducing chemical additives thanks to lab innovation." },
            { title: "Environmental and social benefits", text: "Carob preserves marginal land, supports biodiversity and reduces erosion. It sustains local communities by creating farm jobs and enhancing typical Sicilian production." },
          ],
        },
        {
          id: "energia-futura", scala: "Local", name: "Energia Futura",
          tagline: "Green innovation that brings people together",
          intro: "The Energia Futura Group develops Renewable Energy Source (RES) plants focused on large-scale photovoltaics, aiming for 400 MW by 2030 with a mix that adds wind and biomethane on the path to Net Zero.",
          sections: [
            { title: "Technology and agrivoltaics", text: "BESS (Battery Energy Storage Systems) stabilize the grid and overcome intermittency. Agrivoltaics lets solar panels coexist with farming, while green hydrogen decarbonizes hard-to-abate sectors." },
            { title: "Energy efficiency", text: "It operates as an Energy Service Company: LED relamping and cogeneration cut industrial waste and help partners obtain Energy Efficiency Certificates (TEE)." },
            { title: "Social responsibility", text: "Every project includes reforestation and reclamation plans. Energy crowdfunding lets citizens take part in investments, generating shared economic and social value." },
          ],
        },
        {
          id: "enel", scala: "National", name: "Enel Renewable Energy",
          tagline: "The future of sustainable energy",
          intro: "Enel leads the global energy transition with investments in clean sources, efficiency and innovation. A concrete model of how the energy sector can cut emissions and drive sustainable development.",
          sections: [
            { title: "Renewables and technology", text: "It invests in solar, wind, geothermal and hydropower. Monitoring technologies optimize production, reduce waste and integrate stored energy to ensure continuity even at consumption peaks." },
            { title: "Smart grids and innovation", text: "It integrates smart grids, storage systems and process digitalization. It partners with universities and startups to develop advanced technologies, creating skilled jobs in the green sector." },
            { title: "Efficiency and sustainable cities", text: "It promotes energy efficiency among citizens and businesses through consultancy, incentives and educational programs. Investments in smart grids and efficient lighting build more sustainable cities." },
          ],
        },
        {
          id: "infomaniak", scala: "International", name: "Infomaniak",
          tagline: "Sustainability enters web hosting",
          intro: "A Swiss company that built its identity around sustainable development: infrastructure powered by renewable energy, energy optimization and ethical data management show that innovation and the environment can coexist.",
          sections: [
            { title: "Efficient data centers", text: "It designs high-efficiency data centers that drastically reduce waste. Heat produced by the servers is recovered and reused for district heating; energy comes exclusively from certified renewable sources." },
            { title: "Digital ethics and privacy", text: "It does not monetize personal data and guarantees high standards of privacy protection. The Swiss servers meet strict criteria of quality, security and direct control over environmental impact." },
            { title: "Social responsibility", text: "It supports local projects, cultural initiatives and solidarity programs, proving that tech companies can become protagonists of the ecological transition." },
          ],
        },
      ],
    },
  });

  const scalaIcons: Record<string, typeof MapPin> = {
    Locale: MapPin, Local: MapPin,
    Nazionale: Flag, National: Flag,
    Internazionale: Globe, International: Globe,
  };
  const sectionIconsByCompany: Record<string, (typeof MapPin)[]> = {
    lbg: [Sprout, Leaf, Recycle],
    "energia-futura": [Battery, Zap, HeartHandshake],
    enel: [Wind, Cpu, Sun],
    infomaniak: [Server, ShieldCheck, HeartHandshake],
  };

  return (
    <>
      <PageHero {...t.hero} image={img} />

      <section className="container mx-auto pt-12">
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {t.aziende.map((a) => {
            const Icon = scalaIcons[a.scala];
            return (
              <a key={a.id} href={`#${a.id}`} className="glass glass-shine p-4 rounded-2xl flex items-center gap-3 hover:-translate-y-1 transition-transform">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{a.scala}</div>
                  <div className="text-sm font-semibold text-primary leading-tight">{a.name}</div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto py-16 space-y-20">
        {t.aziende.map((a, idx) => {
          const ScalaIcon = scalaIcons[a.scala];
          const reverse = idx % 2 === 1;
          const sectionIcons = sectionIconsByCompany[a.id];
          const image = { lbg: lbgImg, "energia-futura": energiaFuturaImg, enel: enelImg, infomaniak: infomaniakImg }[a.id];
          return (
            <article key={a.id} id={a.id} className="scroll-mt-24">
              <div className={`grid lg:grid-cols-2 gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="reveal-x">
                  <Tilt3D className="rounded-3xl">
                    <img src={image} alt={a.name} className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-glow" loading="lazy" />
                  </Tilt3D>
                </div>
                <div className="reveal">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-bold uppercase tracking-widest">
                      <ScalaIcon className="w-3.5 h-3.5" /> {a.scala}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 leading-tight">{a.name}</h2>
                  <p className="text-base md:text-lg text-muted-foreground italic mb-5">{a.tagline}</p>
                  <p className="text-foreground leading-relaxed">{a.intro}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5 mt-8">
                {a.sections.map((s, i) => {
                  const Icon = sectionIcons[i];
                  return (
                    <Tilt3D key={s.title} intensity={8} className="reveal">
                      <div className="glass p-6 rounded-2xl h-full">
                        <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary text-primary-foreground mb-3">
                          <Icon className="w-5 h-5" />
                        </span>
                        <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                      </div>
                    </Tilt3D>
                  );
                })}
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Aziende;
