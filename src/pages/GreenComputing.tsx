import PageHero from "@/components/PageHero";
import img from "@/assets/green-computing.jpg";
import circuitImg from "@/assets/green-circuit.jpg";
import laptopImg from "@/assets/green-laptop.jpg";
import { Server, Leaf, Globe2, Cpu, Cloud, Shield, Flame, Sparkles } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const GreenComputing = () => {
  const t = useT({
    it: {
      hero: {
        eyebrow: "Tecnologia sostenibile",
        title: "Green Computing",
        subtitle: "L'informatica che riduce il proprio impatto ambientale grazie a pratiche, infrastrutture e scelte energetiche responsabili.",
      },
      circuitAlt: "Pianta verde che cresce su un circuito elettronico",
      featuredEyebrow: "Tecnologia + Natura",
      featuredTitle: "Quando l'informatica incontra il pianeta",
      featuredText: "Hardware efficiente, software ottimizzato, energia rinnovabile e raffreddamento sostenibile: il green computing è un nuovo modo di pensare il digitale, dove ogni byte ha un costo ambientale che possiamo ridurre.",
      intro: [
        { title: "Cos'è il green computing", text: "Un approccio all'informatica che mira a ridurre l'impatto ambientale delle tecnologie digitali, attraverso un uso efficiente delle risorse e pratiche sostenibili." },
        { title: "A cosa serve", text: "I data center consumano enormi quantità di energia e contribuiscono in modo significativo alle emissioni di CO₂. Il green computing unisce progresso tecnologico e tutela dell'ambiente." },
        { title: "Un futuro digitale responsabile", text: "È la strada da seguire per uno sviluppo digitale che rispetti il pianeta e le generazioni future, generando vantaggi anche competitivi per chi lo adotta." },
      ],
      caseLabel: "Caso studio",
      caseTitle: "Infomaniak: il modello svizzero",
      caseText: "Azienda svizzera di hosting e cloud che ha scelto di basare la sua intera struttura su principi di sostenibilità, dimostrando che tecnologia e ambiente possono convivere armoniosamente.",
      stats: [
        { v: "100%", l: "Energia rinnovabile" },
        { v: "200%", l: "Emissioni compensate" },
        { v: "0", l: "Combustibili fossili" },
      ],
      choicesEyebrow: "Le scelte sostenibili",
      choicesTitle: "Sostenibilità a 360°",
      choicesSub: "Quattro decisioni che rendono Infomaniak un modello da imitare nel settore digitale.",
      choices: [
        { title: "100% energia rinnovabile", text: "I data center funzionano esclusivamente con energia da fonti rinnovabili, eliminando la dipendenza dai combustibili fossili." },
        { title: "Calore riutilizzato", text: "Il nuovo data center di Ginevra valorizza il 100% dell'energia elettrica trasformandola in calore, riutilizzato per riscaldare migliaia di abitazioni." },
        { title: "Cloud etico", text: "Promuove un modello di cloud rispettoso della privacy e dei valori umani, evitando pratiche invasive come l'analisi dei dati degli utenti." },
        { title: "Compensazione +200%", text: "L'azienda compensa il 200% delle proprie emissioni di CO₂, generando un impatto ambientale netto positivo." },
      ],
      laptopAlt: "Laptop su un prato verde — informatica sostenibile",
      conclLabel: "Conclusione",
      conclTitle: "Un'informatica più verde è possibile",
      conclText: (
        <>Il caso di Infomaniak dimostra che il green computing non è un'utopia, ma una <strong>realtà concreta e vantaggiosa</strong>. Ridurre consumi energetici ed emissioni significa salvaguardare il pianeta e rispondere alla crescente sensibilità dei consumatori verso le tematiche ambientali.</>
      ),
    },
    en: {
      hero: {
        eyebrow: "Sustainable technology",
        title: "Green Computing",
        subtitle: "The kind of computing that reduces its environmental impact through responsible practices, infrastructure and energy choices.",
      },
      circuitAlt: "Green plant growing on an electronic circuit",
      featuredEyebrow: "Technology + Nature",
      featuredTitle: "When computing meets the planet",
      featuredText: "Efficient hardware, optimized software, renewable energy and sustainable cooling: green computing is a new way of thinking about digital, where every byte has an environmental cost we can reduce.",
      intro: [
        { title: "What green computing is", text: "An approach to computing aimed at reducing the environmental impact of digital technologies through efficient use of resources and sustainable practices." },
        { title: "Why it matters", text: "Data centers consume huge amounts of energy and significantly contribute to CO₂ emissions. Green computing brings together technological progress and environmental protection." },
        { title: "A responsible digital future", text: "It is the path to follow for digital development that respects the planet and future generations, also delivering competitive benefits to those who adopt it." },
      ],
      caseLabel: "Case study",
      caseTitle: "Infomaniak: the Swiss model",
      caseText: "A Swiss hosting and cloud company that has built its entire structure on sustainability principles, proving that technology and the environment can coexist harmoniously.",
      stats: [
        { v: "100%", l: "Renewable energy" },
        { v: "200%", l: "Emissions offset" },
        { v: "0", l: "Fossil fuels" },
      ],
      choicesEyebrow: "Sustainable choices",
      choicesTitle: "Sustainability all around",
      choicesSub: "Four decisions that make Infomaniak a model to follow in the digital sector.",
      choices: [
        { title: "100% renewable energy", text: "The data centers run exclusively on renewable energy, eliminating dependence on fossil fuels." },
        { title: "Reused heat", text: "The new Geneva data center turns 100% of its electricity into heat that is reused to warm thousands of homes." },
        { title: "Ethical cloud", text: "It promotes a cloud model that respects privacy and human values, avoiding intrusive practices like user data analysis." },
        { title: "+200% offsetting", text: "The company offsets 200% of its CO₂ emissions, generating a net positive environmental impact." },
      ],
      laptopAlt: "Laptop on a green meadow — sustainable computing",
      conclLabel: "Conclusion",
      conclTitle: "A greener computing is possible",
      conclText: (
        <>Infomaniak's case shows that green computing is not a utopia but a <strong>concrete and rewarding reality</strong>. Cutting energy use and emissions means protecting the planet and meeting growing consumer awareness of environmental issues.</>
      ),
    },
  });

  const introIcons = [Leaf, Server, Globe2];
  const choiceIcons = [Cpu, Flame, Shield, Cloud];

  return (
    <>
      <PageHero {...t.hero} image={img} />

      <section className="container mx-auto py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal-x order-2 lg:order-1 relative group rounded-3xl overflow-hidden shadow-glow">
            <img src={circuitImg} alt={t.circuitAlt} className="w-full h-auto object-cover transition-transform duration-[1500ms] group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="reveal order-1 lg:order-2">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">{t.featuredEyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-5">{t.featuredTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.featuredText}</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto pb-16 grid lg:grid-cols-3 gap-6">
        {t.intro.map((it, idx) => {
          const Icon = introIcons[idx];
          return (
            <article key={it.title} className="reveal glass glass-shine p-7 rounded-3xl hover:-translate-y-1 hover:shadow-glow transition-all duration-500 group" style={{ transitionDelay: `${idx * 80}ms` }}>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.text}</p>
            </article>
          );
        })}
      </section>

      <section className="container mx-auto pb-12">
        <div className="reveal gradient-hero rounded-3xl p-8 md:p-14 text-primary-foreground shadow-glow relative overflow-hidden">
          <Sparkles className="absolute top-6 right-6 w-8 h-8 opacity-40 animate-pulse" />
          <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wider uppercase mb-4">{t.caseLabel}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{t.caseTitle}</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mb-8 leading-relaxed">{t.caseText}</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {t.stats.map((s, i) => (
              <div key={s.l} className="glass-dark glass-shine rounded-2xl p-6 hover:scale-105 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-5xl font-extrabold">{s.v}</div>
                <div className="opacity-80 text-sm mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <div className="reveal text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">{t.choicesEyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">{t.choicesTitle}</h2>
          <p className="text-muted-foreground text-lg">{t.choicesSub}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {t.choices.map((c, idx) => {
            const Icon = choiceIcons[idx];
            return (
              <article key={c.title} className="reveal glass glass-shine p-7 rounded-3xl hover:-translate-y-1 transition-transform duration-500" style={{ transitionDelay: `${idx * 80}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{c.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{c.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto py-16">
        <div className="reveal relative rounded-3xl overflow-hidden shadow-glow group">
          <img src={laptopImg} alt={t.laptopAlt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          <div className="relative p-8 md:p-14 text-primary-foreground max-w-3xl">
            <Sparkles className="absolute top-6 right-6 w-7 h-7 opacity-50 animate-pulse" />
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold tracking-wider uppercase mb-4">{t.conclLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">{t.conclTitle}</h2>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed drop-shadow">{t.conclText}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GreenComputing;
