import PageHero from "@/components/PageHero";
import img from "@/assets/sport.jpg";
import { Footprints, Apple, Leaf, Recycle } from "lucide-react";

const Sport = () => (
  <>
    <PageHero
      eyebrow="Sport & ambiente"
      title="Sport sostenibile"
      subtitle="Quando l'attività fisica diventa un gesto di cura verso il pianeta: dal plogging all'alimentazione consapevole."
      image={img}
    />

    <section className="container mx-auto py-16 grid lg:grid-cols-2 gap-10 items-start">
      <div className="reveal">
        <h2 className="text-3xl font-bold text-primary mb-4">Cos'è lo sport sostenibile</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Lo sport sostenibile è un'attività fisica praticata in modo da ridurre il proprio impatto ambientale, valorizzando
          l'ambiente in cui si svolge. Può diventarlo qualsiasi disciplina, attraverso scelte consapevoli su luoghi,
          attrezzature e abitudini quotidiane.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Praticare sport in un ambiente pulito è un beneficio per la salute e un invito alla responsabilità collettiva.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {[
          { icon: Footprints, title: "Plogging", text: "Correre raccogliendo i rifiuti che si trovano lungo il percorso." },
          { icon: Apple, title: "Alimentazione", text: "Cibo locale, di stagione e a basso impatto." },
          { icon: Recycle, title: "Attrezzature", text: "Materiali riciclati, durevoli e a basso impatto ambientale." },
          { icon: Leaf, title: "Ambiente", text: "Allenarsi all'aperto rispettando la natura che ci ospita." },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="reveal gradient-card p-5 rounded-2xl shadow-card">
            <Icon className="w-8 h-8 text-primary mb-2" />
            <h4 className="font-bold text-primary mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Sport;
