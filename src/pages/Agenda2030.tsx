import PageHero from "@/components/PageHero";
import img from "@/assets/agenda-2030.jpg";
import { Zap, Briefcase, Cog, Recycle, ThermometerSun } from "lucide-react";

const goals = [
  { n: 7, title: "Energia pulita e accessibile", desc: "Promuove l'uso di energie rinnovabili e accessibili a tutti.", icon: Zap, color: "bg-yellow-100 text-yellow-700" },
  { n: 8, title: "Lavoro dignitoso e crescita", desc: "Un'economia inclusiva con lavori di qualità e green jobs.", icon: Briefcase, color: "bg-red-100 text-red-700" },
  { n: 9, title: "Imprese, innovazione, infrastrutture", desc: "Sviluppo di infrastrutture moderne e innovazione tecnologica.", icon: Cog, color: "bg-orange-100 text-orange-700" },
  { n: 12, title: "Consumo e produzione responsabili", desc: "Riduzione degli sprechi ed economia circolare.", icon: Recycle, color: "bg-amber-100 text-amber-700" },
  { n: 13, title: "Lotta al cambiamento climatico", desc: "Azioni urgenti per proteggere il pianeta dal cambiamento climatico.", icon: ThermometerSun, color: "bg-green-100 text-green-700" },
];

const Agenda2030 = () => (
  <>
    <PageHero
      eyebrow="Sviluppo sostenibile"
      title="Agenda 2030"
      subtitle="Il programma globale dell'ONU che indica la rotta verso un futuro sostenibile per persone, pianeta e prosperità."
      image={img}
    />
    <section className="container mx-auto py-16">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-3xl font-bold text-primary mb-4">Cosa è l'Agenda 2030</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          L'Agenda 2030 è un piano d'azione adottato dalle Nazioni Unite nel 2015 e composto da 17 Obiettivi di Sviluppo Sostenibile.
          In questa pagina ci concentriamo sui cinque obiettivi più strettamente legati alla sostenibilità ambientale e al mondo digitale.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {goals.map((g) => {
          const Icon = g.icon;
          return (
            <article key={g.n} className="reveal glass glass-shine p-6 rounded-3xl hover:shadow-glow transition-shadow">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${g.color} mb-4`}>
                <Icon className="w-7 h-7" />
              </div>
              <div className="text-xs font-bold text-muted-foreground tracking-widest mb-1">OBIETTIVO {g.n}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{g.title}</h3>
              <p className="text-muted-foreground">{g.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  </>
);

export default Agenda2030;
