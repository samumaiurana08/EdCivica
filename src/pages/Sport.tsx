import PageHero from "@/components/PageHero";
import img from "@/assets/sport.jpg";
import {
  Footprints, Leaf, Recycle, Waves, Mountain, Bike, Users, HeartPulse, TreePine, Building2, ShieldCheck, Sparkles,
} from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const Sport = () => {
  const t = useT({
    it: {
      hero: {
        eyebrow: "Sport & ambiente · UDA Scienze Motorie",
        title: "Lo sport sostenibile",
        subtitle: "Un metodo di organizzare e praticare le attività sportive che minimizza gli impatti ambientali e massimizza i benefici sociali ed economici nel lungo periodo.",
      },
      whatBadge: "Cos'è lo sport sostenibile",
      whatTitle: "Una nuova idea di sport",
      whatP1: (<>Per <strong>sport sostenibile</strong> si intende un metodo di organizzare e praticare le attività sportive con l'obiettivo di <strong>minimizzare gli impatti ambientali</strong> e massimizzare l'impatto positivo, sia sociale che economico, nel lungo termine.</>),
      whatP2: "È un concetto orientato alla tutela dei diritti, al benessere e alla sicurezza degli atleti, all'accessibilità, all'inclusione, alla parità e al rispetto delle comunità, fino alla creazione di un modello di business che garantisca continuità senza gravare sulle generazioni future.",
      pillars: [
        { title: "Ambientale", text: "Gestione responsabile di risorse, emissioni e rifiuti." },
        { title: "Sociale", text: "Inclusione, parità, sicurezza e tutela degli atleti." },
        { title: "Economica", text: "Bilanci equilibrati, trasparenza e investimenti proporzionati." },
        { title: "Salute", text: "Benessere collettivo e qualità della vita migliore." },
      ],
      howTitle: "Come può diventarlo?",
      howSub: (<>Uno sport diventa sostenibile cambiando il modo in cui viene <strong>praticato, organizzato e finanziato</strong>, riducendo gli impatti negativi a lungo termine.</>),
      howCards: [
        { title: "Impatto ambientale", text: "Gestione responsabile delle risorse naturali, riduzione di emissioni e rifiuti, impianti energeticamente efficienti, fonti rinnovabili e minore consumo idrico. Eventi calibrati sul contesto, senza strutture sovradimensionate." },
        { title: "Dimensione sociale", text: "Sport accessibile e sicuro per tutti: investimenti nello sport di base e scolastico, tutela di atleti e lavoratori, inclusione delle persone con disabilità, contrasto a discriminazioni e violenze, legame con le comunità locali." },
        { title: "Dimensione economica", text: "Modelli di gestione responsabili, bilanci equilibrati, trasparenza e investimenti proporzionati alle reali capacità finanziarie, riducendo la dipendenza da finanziamenti straordinari e logiche di profitto immediato." },
      ],
      useTitle: "A cosa può servire?",
      useP1: (<>Lo sport sostenibile contribuisce a <strong>obiettivi strategici</strong> che vanno oltre la sola pratica sportiva: riduce l'impatto ambientale, promuove comportamenti responsabili e diventa uno strumento educativo verso stili di vita più consapevoli.</>),
      useP2: (<>Sul piano sociale favorisce <strong>inclusione e benessere</strong>: migliora la salute pubblica, rafforza il senso di comunità e diffonde valori come rispetto, collaborazione e correttezza.</>),
      useP3: (<>Sul piano economico garantisce continuità alle organizzazioni sportive, evita crisi finanziarie e consente un uso più efficiente dei finanziamenti pubblici e privati. È inoltre uno strumento di <strong>sviluppo territoriale</strong>, valorizzando infrastrutture e aree verdi in modo equilibrato.</>),
      useCards: [
        { title: "Tutela ambientale", text: "Meno consumo di risorse, meno emissioni, comportamenti responsabili." },
        { title: "Salute pubblica", text: "Benessere fisico e mentale, partecipazione di tutte le età." },
        { title: "Sviluppo territoriale", text: "Valorizzazione di infrastrutture, spazi urbani e aree verdi." },
        { title: "Stabilità economica", text: "Pianificazione, trasparenza e gestione efficiente delle risorse." },
      ],
      newSportsTitle: "Sport ideati come sostenibili",
      newSportsSub: (<>Negli ultimi anni sono nati diversi sport pensati fin dall'inizio per unire <strong>movimento fisico e sostenibilità</strong>: attività semplici, alla portata di tutti, che uniscono benessere e senso civico.</>),
      newSports: [
        { title: "Plogging", text: "Nato in Svezia: si corre o si cammina alternando il ritmo per raccogliere i rifiuti trovati lungo il percorso." },
        { title: "Plogga-cycling & Pliking", text: "Varianti del plogging in bicicletta o a passo di camminata, per coinvolgere ancora più persone." },
        { title: "Paddle & Surf cleanup", text: "Si pagaia o si cavalcano le onde contribuendo alla pulizia di coste, laghi e fiumi." },
        { title: "Climbing etico", text: "Arrampicata che include la cura delle falesie, la rimozione dei rifiuti e il rispetto dei percorsi naturali." },
        { title: "Eco-hiking", text: "Escursioni che prevedono piccoli interventi di manutenzione dei sentieri e attenzione agli ambienti attraversati." },
        { title: "Stile di vita attivo", text: "Movimenti in crescita che promuovono uno stile di vita che non consuma l'ambiente, ma lo protegge." },
      ],
      impactTitle: "L'impatto degli sport sostenibili",
      impactSub: "Gli sport nati con un'attenzione particolare all'ambiente producono effetti molto concreti sul territorio e sulla società.",
      impactCards: [
        { title: "Riduzione dei rifiuti", text: "Attività come il plogging hanno permesso di raccogliere quantità enormi di plastica e materiali abbandonati, contribuendo alla pulizia di parchi, strade e spiagge e a una sensibilità ambientale più forte." },
        { title: "Valorizzazione del territorio", text: "Sentieri curati, spiagge pulite e parchi mantenuti in buone condizioni migliorano la qualità della vita dei residenti e rendono le aree naturali più attrattive anche per il turismo." },
        { title: "Coinvolgimento sociale", text: "Attività semplici, aperte a tutte le età, che creano comunità: ritrovarsi per pulire un sentiero o una spiaggia mentre si fa movimento rafforza i legami tra i partecipanti." },
        { title: "Migliore qualità dell'allenamento", text: "Allenarsi in un ambiente curato è più piacevole: aria migliore, maggiore motivazione e meno rischi di tagli, scivolate o incidenti causati da rifiuti abbandonati." },
      ],
      credits: "Lavoro realizzato da Torrisi Alessandro, Papa Ginevra e Maiurana Samuele.",
    },
    en: {
      hero: {
        eyebrow: "Sport & environment · Physical Education unit",
        title: "Sustainable sport",
        subtitle: "A way of organising and practising sport that minimises environmental impact and maximises long-term social and economic benefits.",
      },
      whatBadge: "What sustainable sport is",
      whatTitle: "A new idea of sport",
      whatP1: (<><strong>Sustainable sport</strong> is a way of organising and practising sporting activities aimed at <strong>minimising environmental impact</strong> and maximising long-term positive social and economic effects.</>),
      whatP2: "It is a concept oriented to protecting rights, the wellbeing and safety of athletes, accessibility, inclusion, equality and respect for communities, up to a business model that ensures continuity without burdening future generations.",
      pillars: [
        { title: "Environmental", text: "Responsible management of resources, emissions and waste." },
        { title: "Social", text: "Inclusion, equality, safety and protection of athletes." },
        { title: "Economic", text: "Balanced budgets, transparency and proportionate investments." },
        { title: "Health", text: "Collective wellbeing and a better quality of life." },
      ],
      howTitle: "How can it become so?",
      howSub: (<>A sport becomes sustainable by changing the way it is <strong>practised, organised and funded</strong>, reducing negative long-term impacts.</>),
      howCards: [
        { title: "Environmental impact", text: "Responsible management of natural resources, lower emissions and waste, energy-efficient facilities, renewables and reduced water use. Events sized to context, without oversized infrastructure." },
        { title: "Social dimension", text: "Sport accessible and safe for all: investment in grassroots and school sport, protection of athletes and workers, inclusion of people with disabilities, fight against discrimination and violence, ties to local communities." },
        { title: "Economic dimension", text: "Responsible management models, balanced budgets, transparency and investments proportionate to real financial capacity, reducing reliance on extraordinary funding and short-term profit logic." },
      ],
      useTitle: "What is it for?",
      useP1: (<>Sustainable sport contributes to <strong>strategic goals</strong> that go beyond practice itself: it cuts environmental impact, promotes responsible behaviour and becomes an educational tool toward more conscious lifestyles.</>),
      useP2: (<>On the social side it fosters <strong>inclusion and wellbeing</strong>: it improves public health, strengthens community spirit and spreads values such as respect, cooperation and fairness.</>),
      useP3: (<>On the economic side it ensures continuity for sport organisations, prevents financial crises and enables more efficient use of public and private funding. It is also a tool for <strong>territorial development</strong>, enhancing infrastructure and green areas in a balanced way.</>),
      useCards: [
        { title: "Environmental protection", text: "Less resource use, fewer emissions, responsible behaviour." },
        { title: "Public health", text: "Physical and mental wellbeing, participation across all ages." },
        { title: "Territorial development", text: "Enhancement of infrastructure, urban spaces and green areas." },
        { title: "Economic stability", text: "Planning, transparency and efficient resource management." },
      ],
      newSportsTitle: "Sports designed as sustainable",
      newSportsSub: (<>In recent years several sports have been born to combine <strong>physical movement and sustainability</strong> from the start: simple activities, accessible to everyone, that pair wellbeing with civic spirit.</>),
      newSports: [
        { title: "Plogging", text: "Born in Sweden: you run or walk at varying paces while collecting litter found along the route." },
        { title: "Plogga-cycling & Pliking", text: "Variants of plogging on a bike or at walking pace, to involve even more people." },
        { title: "Paddle & Surf cleanup", text: "You paddle or surf while helping to clean coasts, lakes and rivers." },
        { title: "Ethical climbing", text: "Climbing that includes care of crags, removal of waste and respect for natural routes." },
        { title: "Eco-hiking", text: "Hikes that include small trail maintenance work and attention to the environments crossed." },
        { title: "Active lifestyle", text: "Growing movements that promote a lifestyle that does not consume the environment, but protects it." },
      ],
      impactTitle: "The impact of sustainable sports",
      impactSub: "Sports born with a special focus on the environment produce very concrete effects on land and society.",
      impactCards: [
        { title: "Waste reduction", text: "Activities like plogging have collected huge amounts of plastic and abandoned materials, helping clean parks, streets and beaches and raising environmental awareness." },
        { title: "Territorial enhancement", text: "Well-kept trails, clean beaches and properly maintained parks improve residents' quality of life and make natural areas more attractive for tourism too." },
        { title: "Social engagement", text: "Simple activities open to all ages that build community: meeting up to clean a trail or a beach while exercising strengthens ties between participants." },
        { title: "Better training quality", text: "Training in a well-kept environment is more pleasant: better air, more motivation and fewer risks of cuts, slips or accidents caused by abandoned waste." },
      ],
      credits: "Project by Torrisi Alessandro, Papa Ginevra and Maiurana Samuele.",
    },
  });

  const pillarIcons = [Leaf, Users, Building2, HeartPulse];
  const howIcons = [Leaf, Users, Building2];
  const useIcons = [TreePine, HeartPulse, Building2, ShieldCheck];
  const newSportIcons = [Footprints, Bike, Waves, Mountain, TreePine, Recycle];
  const impactIcons = [Recycle, TreePine, Users, HeartPulse];

  return (
    <>
      <PageHero {...t.hero} image={img} />

      <section className="container mx-auto py-16 grid lg:grid-cols-2 gap-10 items-start">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> {t.whatBadge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">{t.whatTitle}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t.whatP1}</p>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.whatP2}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {t.pillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <div key={p.title} className="reveal glass glass-shine p-5 rounded-2xl">
                <Icon className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-bold text-primary mb-1">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.howTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.howSub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.howCards.map((c, i) => {
              const Icon = howIcons[i];
              return (
                <div key={c.title} className="reveal bg-card rounded-2xl p-6 shadow-card">
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-bold text-primary mb-2">{c.title}</h3>
                  <p className="text-muted-foreground">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.useTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t.useP1}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{t.useP2}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.useP3}</p>
          </div>

          <div className="reveal grid gap-4">
            {t.useCards.map((c, i) => {
              const Icon = useIcons[i];
              return (
                <div key={c.title} className="glass glass-shine p-5 rounded-2xl flex gap-4 items-start">
                  <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{c.title}</h4>
                    <p className="text-sm text-muted-foreground">{c.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.newSportsTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.newSportsSub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.newSports.map((s, i) => {
              const Icon = newSportIcons[i];
              return (
                <div key={s.title} className="reveal bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-shadow">
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="text-lg font-bold text-primary mb-2">{s.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <div className="max-w-3xl mb-10 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.impactTitle}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.impactSub}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.impactCards.map((c, i) => {
            const Icon = impactIcons[i];
            return (
              <div key={c.title} className="reveal glass glass-shine p-6 rounded-2xl">
                <Icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-bold text-primary mb-2">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-muted-foreground italic text-center reveal">{t.credits}</p>
      </section>
    </>
  );
};

export default Sport;
