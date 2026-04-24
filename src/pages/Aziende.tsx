import PageHero from "@/components/PageHero";
import img from "@/assets/aziende.jpg";
import { MapPin, Globe, Flag } from "lucide-react";

const aziende = [
  { scala: "Locale", icon: MapPin, name: "LBG", desc: "Azienda siciliana che si occupa della produzione di derivati del carrubo, valorizzando una filiera mediterranea sostenibile." },
  { scala: "Locale", icon: MapPin, name: "Energetica Futura", desc: "Progettazione e realizzazione di impianti per la produzione di energia fotovoltaica ed eolica." },
  { scala: "Nazionale", icon: Flag, name: "Enel — Enel Green Power", desc: "Sviluppa e gestisce impianti fotovoltaici, eolici, idroelettrici e geotermici su scala nazionale e internazionale." },
  { scala: "Internazionale", icon: Globe, name: "Infomaniak", desc: "Azienda svizzera di hosting che alimenta i propri data center solo con energia rinnovabile." },
];

const Aziende = () => (
  <>
    <PageHero
      eyebrow="Casi di studio"
      title="Aziende sostenibili"
      subtitle="Quattro realtà che, dalla scala locale fino a quella internazionale, dimostrano che fare impresa in modo responsabile è possibile."
      image={img}
    />
    <section className="container mx-auto py-16 grid md:grid-cols-2 gap-6">
      {aziende.map((a) => {
        const Icon = a.icon;
        return (
          <article key={a.name} className="reveal gradient-card p-7 rounded-3xl shadow-card hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary text-primary-foreground">
                <Icon className="w-6 h-6" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{a.scala}</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">{a.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{a.desc}</p>
          </article>
        );
      })}
    </section>
  </>
);

export default Aziende;
