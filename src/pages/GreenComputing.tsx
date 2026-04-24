import PageHero from "@/components/PageHero";
import img from "@/assets/green-computing.jpg";
import { Server, Leaf, Globe2 } from "lucide-react";

const GreenComputing = () => (
  <>
    <PageHero
      eyebrow="Tecnologia sostenibile"
      title="Green Computing"
      subtitle="L'informatica che riduce il proprio impatto ambientale grazie a pratiche, infrastrutture e scelte energetiche responsabili."
      image={img}
    />
    <section className="container mx-auto py-16 grid lg:grid-cols-3 gap-6">
      {[
        { icon: Leaf, title: "Cosa è il green computing", text: "Insieme di pratiche che permettono alle tecnologie digitali di ridurre il loro impatto ambientale: hardware efficiente, software ottimizzato, energia rinnovabile." },
        { icon: Server, title: "Il peso dei data center", text: "I data center consumano una quota crescente dell'energia mondiale: servono soluzioni più efficienti, raffreddamento sostenibile e fonti rinnovabili." },
        { icon: Globe2, title: "Verso un futuro digitale responsabile", text: "Il green computing è la strada per uno sviluppo digitale che rispetti il pianeta e le generazioni future." },
      ].map(({ icon: Icon, title, text }) => (
        <article key={title} className="reveal glass glass-shine p-7 rounded-3xl">
          <Icon className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-muted-foreground">{text}</p>
        </article>
      ))}
    </section>

    <section className="container mx-auto pb-20">
      <div className="reveal gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground shadow-glow">
        <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wider uppercase mb-4">
          Caso studio
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Infomaniak: il modello svizzero</h2>
        <p className="text-lg opacity-90 max-w-3xl mb-8">
          Infomaniak è un'azienda svizzera che utilizza il <strong>100% di energia rinnovabile</strong> nei suoi data center
          e compensa il <strong>200% delle proprie emissioni</strong> di anidride carbonica.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { v: "100%", l: "Energia rinnovabile" },
            { v: "200%", l: "Emissioni compensate" },
            { v: "0", l: "Combustibili fossili" },
          ].map((s) => (
            <div key={s.l} className="glass-dark glass-shine rounded-2xl p-5">
              <div className="text-4xl font-extrabold">{s.v}</div>
              <div className="opacity-80 text-sm mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default GreenComputing;
