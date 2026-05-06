import PageHero from "@/components/PageHero";
import img from "@/assets/hero-sostenibilita.jpg";
import {
  Target,
  Users,
  Calendar,
  BookOpen,
  Award,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  ClipboardList,
} from "lucide-react";

const competenze = [
  "Comprendere la propria responsabilità nel preservare il pianeta",
  "Comprendere i modelli di produzione e di consumo",
  "Individuare alternative per ridisegnare il modello economico di produzione",
  "Comunicare il bisogno di pratiche sostenibili nella produzione e nel consumo",
  "Promuovere modelli di produzione sostenibili",
];

const discipline = [
  { nome: "Italiano e Storia", focus: "Agenda 2030 · scrittura di articoli" },
  { nome: "Sistemi e Reti", focus: "Green computing · aziende del settore reti" },
  { nome: "Informatica", focus: "Aziende ICT con politiche ambientali" },
  { nome: "Inglese", focus: "Microlingua · letture in L2" },
  { nome: "TPSI", focus: "Agenda 2030 · informatica verde" },
  { nome: "Telecomunicazioni", focus: "Energia rinnovabile · fotovoltaico" },
  { nome: "Matematica e Complementi", focus: "Aziende green del territorio" },
  { nome: "Scienze Motorie", focus: "Sport e sostenibilità ambientale" },
];

const fasi = [
  {
    q: "1° Quadrimestre",
    titolo: "Ricerca e progetto di massima",
    desc: "Raccolta di articoli, immagini, interviste e materiali su aziende sostenibili — locali, nazionali e globali — con stesura del progetto di massima dell'elaborato finale.",
    deadline: "Consegna entro il 15 gennaio 2026",
  },
  {
    q: "2° Quadrimestre",
    titolo: "Prodotto multimediale finale",
    desc: "Realizzazione di un sito web (questo!) con slogan e parole chiave per sensibilizzare sullo sviluppo sostenibile e il risparmio energetico.",
    deadline: "Consegna entro il 15 maggio 2026",
  },
];

const Progetto = () => (
  <>
    <PageHero
      eyebrow="UDA · Educazione Civica · A.S. 2025/2026"
      title="Noi per uno sviluppo sostenibile"
      subtitle="Unità di Apprendimento della classe 4ª F — Indirizzo Informatica. Un percorso interdisciplinare per orientare eticamente l'uso delle risorse e promuovere un'economia equa e sostenibile."
      image={img}
    />

    {/* Identità del progetto */}
    <section className="container mx-auto py-16">
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { icon: GraduationCap, label: "Scuola", value: "I.I.S.S. \"G. Ferraris\" — Ragusa" },
          { icon: Users, label: "Classe", value: "4ª F · Settore Tecnico Industriale · Informatica" },
          { icon: Award, label: "Coordinatrice", value: "Prof.ssa Rosa Azzarelli" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="reveal glass glass-shine rounded-3xl p-6">
            <Icon className="w-8 h-8 text-primary mb-3" />
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{label}</div>
            <div className="font-semibold text-primary">{value}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Nucleo concettuale */}
    <section className="container mx-auto pb-12">
      <div className="reveal glass glass-shine rounded-3xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-5">
          <Target className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-extrabold text-primary">Nucleo concettuale</h2>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          <strong className="text-primary">Sviluppo economico e sostenibilità.</strong> Il percorso, attraverso la
          conoscenza di aziende che producono nel rispetto dell'ambiente e attuano un'economia equa e sostenibile,
          fornisce un orientamento etico sull'uso delle risorse e rafforza le competenze sociali e civiche.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Riferimento: <em>Linee guida per l'insegnamento dell'Educazione civica</em> — Decreto 07/09/2024,
          Competenza N. 5: <em>Comprendere l'importanza della crescita economica</em> nel rispetto dell'ambiente,
          degli ecosistemi e delle risorse naturali.
        </p>
      </div>
    </section>

    {/* Obiettivi formativi */}
    <section className="container mx-auto pb-12">
      <div className="text-center mb-10 reveal">
        <Lightbulb className="w-10 h-10 text-primary mx-auto mb-3" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">Obiettivi formativi</h2>
        <p className="text-muted-foreground">Cinque traguardi cognitivi, socio-emotivi e comportamentali.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {competenze.map((c, i) => (
          <div key={c} className="reveal glass glass-shine rounded-2xl p-5 flex gap-3" style={{ transitionDelay: `${i * 50}ms` }}>
            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <p className="text-foreground">{c}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Discipline coinvolte */}
    <section className="container mx-auto pb-12">
      <div className="text-center mb-10 reveal">
        <BookOpen className="w-10 h-10 text-primary mx-auto mb-3" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">Discipline coinvolte</h2>
        <p className="text-muted-foreground">Un progetto interdisciplinare: ogni materia porta il suo contributo.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {discipline.map((d, i) => (
          <div key={d.nome} className="reveal glass glass-shine rounded-2xl p-5" style={{ transitionDelay: `${i * 40}ms` }}>
            <h3 className="font-bold text-primary mb-1">{d.nome}</h3>
            <p className="text-sm text-muted-foreground">{d.focus}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Fasi del progetto */}
    <section className="container mx-auto pb-12">
      <div className="text-center mb-10 reveal">
        <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">Le due fasi del lavoro</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {fasi.map((f, i) => (
          <article key={f.q} className="reveal glass glass-shine rounded-3xl p-8" style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              {f.q}
            </span>
            <h3 className="text-2xl font-extrabold text-primary mb-3">{f.titolo}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{f.desc}</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <ClipboardList className="w-4 h-4" /> {f.deadline}
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* Team */}
    <section className="container mx-auto pb-20">
      <div className="reveal gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground shadow-glow">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Il nostro gruppo di lavoro</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { ruolo: "Leader", nome: "Alessandro Torrisi" },
            { ruolo: "Segretaria", nome: "Ginevra Papa" },
            { ruolo: "Materiali", nome: "Samuele Maiurana" },
          ].map((m) => (
            <div key={m.nome} className="glass-dark glass-shine rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest opacity-80 mb-1">{m.ruolo}</div>
              <div className="text-xl font-bold">{m.nome}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Progetto;