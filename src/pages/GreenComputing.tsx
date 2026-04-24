import PageHero from "@/components/PageHero";
import img from "@/assets/green-computing.jpg";
import { Server, Leaf, Globe2, Cpu, Cloud, Shield, Flame, Sparkles } from "lucide-react";

const intro = [
  {
    icon: Leaf,
    title: "Cos'è il green computing",
    text: "Un approccio all'informatica che mira a ridurre l'impatto ambientale delle tecnologie digitali, attraverso un uso efficiente delle risorse e pratiche sostenibili.",
  },
  {
    icon: Server,
    title: "A cosa serve",
    text: "I data center consumano enormi quantità di energia e contribuiscono in modo significativo alle emissioni di CO₂. Il green computing unisce progresso tecnologico e tutela dell'ambiente.",
  },
  {
    icon: Globe2,
    title: "Un futuro digitale responsabile",
    text: "È la strada da seguire per uno sviluppo digitale che rispetti il pianeta e le generazioni future, generando vantaggi anche competitivi per chi lo adotta.",
  },
];

const infomaniakChoices = [
  {
    icon: Cpu,
    title: "100% energia rinnovabile",
    text: "I data center funzionano esclusivamente con energia da fonti rinnovabili, eliminando la dipendenza dai combustibili fossili.",
  },
  {
    icon: Flame,
    title: "Calore riutilizzato",
    text: "Il nuovo data center di Ginevra valorizza il 100% dell'energia elettrica trasformandola in calore, riutilizzato per riscaldare migliaia di abitazioni.",
  },
  {
    icon: Shield,
    title: "Cloud etico",
    text: "Promuove un modello di cloud rispettoso della privacy e dei valori umani, evitando pratiche invasive come l'analisi dei dati degli utenti.",
  },
  {
    icon: Cloud,
    title: "Compensazione +200%",
    text: "L'azienda compensa il 200% delle proprie emissioni di CO₂, generando un impatto ambientale netto positivo.",
  },
];

const stats = [
  { v: "100%", l: "Energia rinnovabile" },
  { v: "200%", l: "Emissioni compensate" },
  { v: "0", l: "Combustibili fossili" },
];

const GreenComputing = () => (
  <>
    <PageHero
      eyebrow="Tecnologia sostenibile"
      title="Green Computing"
      subtitle="L'informatica che riduce il proprio impatto ambientale grazie a pratiche, infrastrutture e scelte energetiche responsabili."
      image={img}
    />

    {/* Intro a 3 colonne */}
    <section className="container mx-auto py-16 grid lg:grid-cols-3 gap-6">
      {intro.map(({ icon: Icon, title, text }, idx) => (
        <article
          key={title}
          className="reveal glass glass-shine p-7 rounded-3xl hover:-translate-y-1 hover:shadow-glow transition-all duration-500"
          style={{ transitionDelay: `${idx * 80}ms` }}
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group">
            <Icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{text}</p>
        </article>
      ))}
    </section>

    {/* Caso studio Infomaniak — hero */}
    <section className="container mx-auto pb-12">
      <div className="reveal gradient-hero rounded-3xl p-8 md:p-14 text-primary-foreground shadow-glow relative overflow-hidden">
        <Sparkles className="absolute top-6 right-6 w-8 h-8 opacity-40 animate-pulse" />
        <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wider uppercase mb-4">
          Caso studio
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Infomaniak: il modello svizzero</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mb-8 leading-relaxed">
          Azienda svizzera di hosting e cloud che ha scelto di basare la sua intera struttura su principi di sostenibilità,
          dimostrando che tecnologia e ambiente possono convivere armoniosamente.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="glass-dark glass-shine rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-5xl font-extrabold">{s.v}</div>
              <div className="opacity-80 text-sm mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Scelte sostenibili */}
    <section className="container mx-auto py-12">
      <div className="reveal text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          Le scelte sostenibili
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">Sostenibilità a 360°</h2>
        <p className="text-muted-foreground text-lg">
          Quattro decisioni che rendono Infomaniak un modello da imitare nel settore digitale.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {infomaniakChoices.map(({ icon: Icon, title, text }, idx) => (
          <article
            key={title}
            className="reveal glass glass-shine p-7 rounded-3xl hover:-translate-y-1 transition-transform duration-500"
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* Conclusione */}
    <section className="container mx-auto py-16">
      <div className="reveal glass glass-shine rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-5">Un'informatica più verde è possibile</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Il caso di Infomaniak dimostra che il green computing non è un'utopia, ma una <strong>realtà concreta e vantaggiosa</strong>.
          Ridurre consumi energetici ed emissioni significa salvaguardare il pianeta e, allo stesso tempo,
          rispondere alla crescente sensibilità dei consumatori verso le tematiche ambientali.
        </p>
      </div>
    </section>
  </>
);

export default GreenComputing;
