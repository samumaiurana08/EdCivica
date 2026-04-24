import PageHero from "@/components/PageHero";
import img from "@/assets/fotovoltaico.jpg";
import { Sun, Battery, Plug, Home, TrendingDown } from "lucide-react";

const Fotovoltaico = () => (
  <>
    <PageHero
      eyebrow="Energia rinnovabile"
      title="Fotovoltaico"
      subtitle="Come l'energia del sole può alimentare le nostre case riducendo costi e impatto ambientale."
      image={img}
    />

    <section className="container mx-auto py-16">
      <div className="text-center mb-12 reveal">
        <h2 className="text-3xl font-bold text-primary mb-3">Come funziona un impianto</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Un percorso in quattro tappe, dalla luce del sole alla presa di casa.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-5">
        {[
          { icon: Sun, title: "1. Pannelli", text: "Le celle in silicio catturano la luce del sole e producono corrente continua." },
          { icon: Plug, title: "2. Inverter", text: "Trasforma la corrente continua in corrente alternata per la rete domestica." },
          { icon: Battery, title: "3. Accumulo", text: "Le batterie immagazzinano l'energia in eccesso per usarla la sera." },
          { icon: Home, title: "4. Casa & rete", text: "L'energia alimenta gli elettrodomestici; il surplus va in rete." },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title} className="reveal glass glass-shine p-6 rounded-3xl">
            <Icon className="w-10 h-10 text-primary mb-3" />
            <h3 className="font-bold text-primary mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>

      <div className="reveal mt-16 gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground shadow-glow">
        <div className="flex items-center gap-3 mb-4">
          <TrendingDown className="w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-extrabold">Benefici per la casa</h2>
        </div>
        <p className="text-lg opacity-90 max-w-3xl mb-8">
          Il fotovoltaico domestico riduce nettamente la bolletta elettrica e l'impronta di carbonio della famiglia.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { v: "-60%", l: "Bolletta media" },
            { v: "25 anni", l: "Vita utile pannelli" },
            { v: "~1,5 t", l: "CO₂ evitata l'anno" },
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

export default Fotovoltaico;
