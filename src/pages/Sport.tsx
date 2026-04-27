import PageHero from "@/components/PageHero";
import img from "@/assets/sport.jpg";
import {
  Footprints,
  Leaf,
  Recycle,
  Waves,
  Mountain,
  Bike,
  Users,
  HeartPulse,
  TreePine,
  Building2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const Sport = () => (
  <>
    <PageHero
      eyebrow="Sport & ambiente · Agenda 2030 · Obiettivo 3"
      title="Lo sport sostenibile"
      subtitle="Un metodo di organizzare e praticare le attività sportive che minimizza gli impatti ambientali e massimizza i benefici sociali ed economici nel lungo periodo."
      image={img}
    />

    {/* COS'È */}
    <section className="container mx-auto py-16 grid lg:grid-cols-2 gap-10 items-start">
      <div className="reveal">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Cos'è lo sport sostenibile
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">Una nuova idea di sport</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Per <strong>sport sostenibile</strong> si intende un metodo di organizzare e praticare le attività sportive
          con l'obiettivo di <strong>minimizzare gli impatti ambientali</strong> e massimizzare l'impatto positivo,
          sia sociale che economico, nel lungo termine.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          È un concetto orientato alla tutela dei diritti, al benessere e alla sicurezza degli atleti,
          all'accessibilità, all'inclusione, alla parità e al rispetto delle comunità, fino alla creazione
          di un modello di business che garantisca continuità senza gravare sulle generazioni future.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {[
          { icon: Leaf, title: "Ambientale", text: "Gestione responsabile di risorse, emissioni e rifiuti." },
          { icon: Users, title: "Sociale", text: "Inclusione, parità, sicurezza e tutela degli atleti." },
          { icon: Building2, title: "Economica", text: "Bilanci equilibrati, trasparenza e investimenti proporzionati." },
          { icon: HeartPulse, title: "Salute", text: "Benessere collettivo e qualità della vita migliore." },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="reveal glass glass-shine p-5 rounded-2xl">
            <Icon className="w-8 h-8 text-primary mb-2" />
            <h4 className="font-bold text-primary mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* COME PUÒ DIVENTARLO */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-10 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Come può diventarlo?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Uno sport diventa sostenibile cambiando il modo in cui viene <strong>praticato, organizzato e
            finanziato</strong>, riducendo gli impatti negativi a lungo termine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="reveal bg-card rounded-2xl p-6 shadow-card">
            <Leaf className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-xl font-bold text-primary mb-2">Impatto ambientale</h3>
            <p className="text-muted-foreground">
              Gestione responsabile delle risorse naturali, riduzione di emissioni e rifiuti, impianti
              energeticamente efficienti, fonti rinnovabili e minore consumo idrico. Eventi calibrati sul
              contesto, senza strutture sovradimensionate.
            </p>
          </div>
          <div className="reveal bg-card rounded-2xl p-6 shadow-card">
            <Users className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-xl font-bold text-primary mb-2">Dimensione sociale</h3>
            <p className="text-muted-foreground">
              Sport accessibile e sicuro per tutti: investimenti nello sport di base e scolastico, tutela
              di atleti e lavoratori, inclusione delle persone con disabilità, contrasto a discriminazioni
              e violenze, legame con le comunità locali.
            </p>
          </div>
          <div className="reveal bg-card rounded-2xl p-6 shadow-card">
            <Building2 className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-xl font-bold text-primary mb-2">Dimensione economica</h3>
            <p className="text-muted-foreground">
              Modelli di gestione responsabili, bilanci equilibrati, trasparenza e investimenti proporzionati
              alle reali capacità finanziarie, riducendo la dipendenza da finanziamenti straordinari e
              logiche di profitto immediato.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* A COSA SERVE */}
    <section className="container mx-auto py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">A cosa può servire?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Lo sport sostenibile contribuisce a <strong>obiettivi strategici</strong> che vanno oltre la sola
            pratica sportiva: riduce l'impatto ambientale, promuove comportamenti responsabili e diventa uno
            strumento educativo verso stili di vita più consapevoli.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Sul piano sociale favorisce <strong>inclusione e benessere</strong>: migliora la salute pubblica,
            rafforza il senso di comunità e diffonde valori come rispetto, collaborazione e correttezza.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sul piano economico garantisce continuità alle organizzazioni sportive, evita crisi finanziarie e
            consente un uso più efficiente dei finanziamenti pubblici e privati. È inoltre uno strumento di
            <strong> sviluppo territoriale</strong>, valorizzando infrastrutture e aree verdi in modo equilibrato.
          </p>
        </div>

        <div className="reveal grid gap-4">
          {[
            { icon: TreePine, title: "Tutela ambientale", text: "Meno consumo di risorse, meno emissioni, comportamenti responsabili." },
            { icon: HeartPulse, title: "Salute pubblica", text: "Benessere fisico e mentale, partecipazione di tutte le età." },
            { icon: Building2, title: "Sviluppo territoriale", text: "Valorizzazione di infrastrutture, spazi urbani e aree verdi." },
            { icon: ShieldCheck, title: "Stabilità economica", text: "Pianificazione, trasparenza e gestione efficiente delle risorse." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass glass-shine p-5 rounded-2xl flex gap-4 items-start">
              <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">{title}</h4>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SPORT IDEATI COME SOSTENIBILI */}
    <section className="bg-secondary/40 py-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-10 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sport ideati come sostenibili
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Negli ultimi anni sono nati diversi sport pensati fin dall'inizio per unire <strong>movimento
            fisico e sostenibilità</strong>: attività semplici, alla portata di tutti, che uniscono benessere
            e senso civico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Footprints,
              title: "Plogging",
              text: "Nato in Svezia: si corre o si cammina alternando il ritmo per raccogliere i rifiuti trovati lungo il percorso.",
            },
            {
              icon: Bike,
              title: "Plogga-cycling & Pliking",
              text: "Varianti del plogging in bicicletta o a passo di camminata, per coinvolgere ancora più persone.",
            },
            {
              icon: Waves,
              title: "Paddle & Surf cleanup",
              text: "Si pagaia o si cavalcano le onde contribuendo alla pulizia di coste, laghi e fiumi.",
            },
            {
              icon: Mountain,
              title: "Climbing etico",
              text: "Arrampicata che include la cura delle falesie, la rimozione dei rifiuti e il rispetto dei percorsi naturali.",
            },
            {
              icon: TreePine,
              title: "Eco-hiking",
              text: "Escursioni che prevedono piccoli interventi di manutenzione dei sentieri e attenzione agli ambienti attraversati.",
            },
            {
              icon: Recycle,
              title: "Stile di vita attivo",
              text: "Movimenti in crescita che promuovono uno stile di vita che non consuma l'ambiente, ma lo protegge.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="reveal bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-shadow">
              <Icon className="w-8 h-8 text-primary mb-3" />
              <h4 className="text-lg font-bold text-primary mb-2">{title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* IMPATTO */}
    <section className="container mx-auto py-16">
      <div className="max-w-3xl mb-10 reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">L'impatto degli sport sostenibili</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Gli sport nati con un'attenzione particolare all'ambiente producono effetti molto concreti sul
          territorio e sulla società.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="reveal glass glass-shine p-6 rounded-2xl">
          <Recycle className="w-8 h-8 text-primary mb-3" />
          <h3 className="text-xl font-bold text-primary mb-2">Riduzione dei rifiuti</h3>
          <p className="text-muted-foreground leading-relaxed">
            Attività come il plogging hanno permesso di raccogliere quantità enormi di plastica e materiali
            abbandonati, contribuendo alla pulizia di parchi, strade e spiagge e a una sensibilità ambientale
            più forte.
          </p>
        </div>
        <div className="reveal glass glass-shine p-6 rounded-2xl">
          <TreePine className="w-8 h-8 text-primary mb-3" />
          <h3 className="text-xl font-bold text-primary mb-2">Valorizzazione del territorio</h3>
          <p className="text-muted-foreground leading-relaxed">
            Sentieri curati, spiagge pulite e parchi mantenuti in buone condizioni migliorano la qualità della
            vita dei residenti e rendono le aree naturali più attrattive anche per il turismo.
          </p>
        </div>
        <div className="reveal glass glass-shine p-6 rounded-2xl">
          <Users className="w-8 h-8 text-primary mb-3" />
          <h3 className="text-xl font-bold text-primary mb-2">Coinvolgimento sociale</h3>
          <p className="text-muted-foreground leading-relaxed">
            Attività semplici, aperte a tutte le età, che creano comunità: ritrovarsi per pulire un sentiero o
            una spiaggia mentre si fa movimento rafforza i legami tra i partecipanti.
          </p>
        </div>
        <div className="reveal glass glass-shine p-6 rounded-2xl">
          <HeartPulse className="w-8 h-8 text-primary mb-3" />
          <h3 className="text-xl font-bold text-primary mb-2">Migliore qualità dell'allenamento</h3>
          <p className="text-muted-foreground leading-relaxed">
            Allenarsi in un ambiente curato è più piacevole: aria migliore, maggiore motivazione e meno rischi
            di tagli, scivolate o incidenti causati da rifiuti abbandonati.
          </p>
        </div>
      </div>

      <p className="mt-10 text-sm text-muted-foreground italic text-center reveal">
        Lavoro realizzato da Torrisi Alessandro, Papa Ginevra e Maiurana Samuele.
      </p>
    </section>
  </>
);

export default Sport;
