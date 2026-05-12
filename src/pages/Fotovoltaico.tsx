import PageHero from "@/components/PageHero";
import img from "@/assets/fotovoltaico.jpg";
import {
  Sun, Battery, Plug, Home, TrendingDown, Wind, Factory, Lightbulb,
  Layers, Zap, Gauge, ShieldCheck, Cable, CircuitBoard, Building2, Globe2, Leaf,
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend,
  LineChart, Line, AreaChart, Area,
} from "recharts";
import { useT } from "@/i18n/LanguageContext";

const Fotovoltaico = () => {
  const t = useT({
    it: {
      hero: {
        eyebrow: "Energia rinnovabile",
        title: "Fotovoltaico",
        subtitle: "Una presentazione completa: dai componenti del pannello al collegamento dell'impianto, dalle aziende del settore all'impatto sulle bollette di casa.",
      },
      renewTitle: "Fonti rinnovabili",
      renewText: (<>Sole, vento, acqua, biomasse e geotermia: si rigenerano naturalmente in tempi compatibili con la vita umana. Producono energia <strong>senza emissioni dirette di CO₂</strong> e riducono la dipendenza dai combustibili fossili.</>),
      nonRenewTitle: "Fonti non rinnovabili",
      nonRenewText: "Carbone, petrolio e gas naturale: si esauriscono e generano gas serra. Sono la principale causa del cambiamento climatico e del peggioramento della qualità dell'aria nelle aree urbane.",
      sec1Label: "Sezione 1",
      sec1Title: "Anatomia di un pannello solare",
      sec1Sub: "Un modulo fotovoltaico è una struttura stratificata, progettata per durare oltre 25 anni esposta agli agenti atmosferici. Ogni strato ha una funzione precisa.",
      anatomy: [
        { t: "Vetro temperato anti-riflesso", d: "Spessore ~3,2 mm. Protegge le celle da grandine e impatti, lasciando passare oltre il 90% della luce." },
        { t: "Strato EVA superiore", d: "Pellicola di Etilene Vinil Acetato che incapsula le celle, isola dall'umidità e ammortizza le vibrazioni." },
        { t: "Celle in silicio", d: "Mono o policristallino: convertono i fotoni in elettroni grazie all'effetto fotovoltaico (giunzione P-N)." },
        { t: "Bus-bar e ribbon", d: "Sottili nastri di rame stagnato che raccolgono la corrente generata dalle celle e la portano alla scatola di giunzione." },
        { t: "EVA inferiore + backsheet", d: "Sigilla il modulo dal retro in Tedlar/PET garantendo isolamento elettrico e impermeabilità." },
        { t: "Cornice in alluminio", d: "Telaio anodizzato che dà rigidità meccanica e permette il fissaggio alle strutture di supporto." },
        { t: "Junction box & diodi by-pass", d: "Scatola posteriore con diodi che evitano cali di rendimento quando una cella è in ombra." },
        { t: "Connettori MC4", d: "Connettori standard IP67 che collegano in serie/parallelo i moduli in totale sicurezza." },
        { t: "Trattamento anti-PID", d: "Tecnologie che prevengono la degradazione potenziale indotta, mantenendo alta l'efficienza nel tempo." },
      ],
      sec2Label: "Sezione 2",
      sec2Title: "Come si collega un impianto fotovoltaico",
      sec2Sub: "Dal tetto al contatore: il percorso dell'energia in sei tappe, con le sicurezze previste dalla normativa CEI 0-21.",
      steps: [
        { title: "1. Stringa di moduli", text: "I pannelli si collegano in serie per sommare le tensioni e raggiungere il valore di lavoro dell'inverter (200–600 V DC)." },
        { title: "2. Quadro DC", text: "Sezionatore, scaricatori SPD e fusibili proteggono la linea in continua da sovratensioni e cortocircuiti." },
        { title: "3. Inverter", text: "Converte la corrente continua in alternata 230 V / 50 Hz e applica l'algoritmo MPPT per massimizzare la resa." },
        { title: "4. Accumulo (opzionale)", text: "Una batteria al litio immagazzina il surplus diurno per la sera, alzando l'autoconsumo dal 30% all'80%." },
        { title: "5. Quadro AC e SPI", text: "Sistema di Protezione di Interfaccia che scollega l'impianto dalla rete in caso di anomalia (CEI 0-21)." },
        { title: "6. Contatore bidirezionale", text: "Misura sia l'energia consumata sia quella immessa in rete (Scambio sul Posto / Cessione)." },
      ],
      flow: ["Sole", "Pannelli", "Quadro DC", "Inverter", "Batteria", "Quadro AC", "Casa", "Rete"],
      sec3Label: "Sezione 3",
      sec3Title: "Aziende che si occupano di fotovoltaico",
      sec3Sub: "Dall'industria che produce le celle agli installatori locali: una filiera fatta di realtà a diverse scale.",
      companies: [
        { scope: "Globale · Produttori", t: "JinkoSolar, LONGi, Trina, Q CELLS", d: "I principali produttori mondiali di moduli e celle solari. Investono miliardi in R&D per superare il 22% di efficienza sui moduli commerciali." },
        { scope: "Nazionale · Energia", t: "Enel X, Eni Plenitude, A2A, Sorgenia", d: "Utility italiane che offrono impianti chiavi in mano, comunità energetiche rinnovabili (CER) e formule di finanziamento agevolate." },
        { scope: "Locale · Installatori", t: "Energetica Futura ed EPC del territorio", d: "PMI siciliane che si occupano di progettazione, installazione, manutenzione e pratiche GSE. Creano lavoro qualificato sul territorio." },
      ],
      greenBizTitle: 'Come un\'azienda diventa "green"',
      greenBizText: "La transizione di un'azienda verso un modello sostenibile passa da scelte concrete: produzione energetica autonoma, efficienza dei processi e gestione responsabile dei materiali.",
      greenBizCards: [
        { t: "Autoconsumo", d: "Impianti fotovoltaici sui tetti per coprire il fabbisogno produttivo." },
        { t: "Efficienza", d: "Relamping LED, motori ad alta efficienza, recupero del calore di processo." },
        { t: "Economia circolare", d: "Riuso degli scarti, riciclo dei materiali e fornitori certificati." },
      ],
      sec4Label: "Sezione 4 · Conclusione",
      sec4Title: "L'impatto sulle spese di casa",
      sec4Sub: "I numeri parlano chiaro: il fotovoltaico domestico abbatte la bolletta, si ripaga in pochi anni e continua a generare risparmio per oltre due decenni.",
      bolTitle: "Spesa annua bolletta (€)",
      bolSub: "Famiglia tipo: con vs senza impianto da 4 kWp.",
      bolWithout: "Senza FV", bolWith: "Con FV",
      prodTitle: "Produzione mensile (kWh)",
      prodSub: "Impianto da 4 kWp esposto a sud, latitudine Ragusa.",
      ammTitle: "Ammortamento dell'investimento (€)",
      ammSub: "Investimento iniziale 9.000 €: il break-even arriva intorno al 9° anno; dopo 25 anni il guadagno cumulato supera i 16.000 €.",
      ammLabel: "Saldo cumulato €",
      months: ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],
      finalTitle: "Perché conviene installarlo a casa",
      finalText: "Il fotovoltaico domestico riduce drasticamente la bolletta, valorizza l'immobile e abbatte l'impronta di carbonio della famiglia. Con accumulo e gestione intelligente dei carichi, l'autoconsumo supera l'80%.",
      finalStats: [
        { v: "-60%", l: "Bolletta media" },
        { v: "9 anni", l: "Tempo di rientro" },
        { v: "25 anni", l: "Vita utile pannelli" },
        { v: "~1,5 t", l: "CO₂ evitata l'anno" },
      ],
      finalOutro: "Scegliere il fotovoltaico significa partecipare attivamente alla transizione energetica: ogni tetto che produce energia pulita è un piccolo passo verso gli obiettivi 7, 12 e 13 dell'Agenda 2030.",
    },
    en: {
      hero: {
        eyebrow: "Renewable energy",
        title: "Photovoltaics",
        subtitle: "A complete walkthrough: from solar panel components to plant wiring, from sector companies to the impact on household bills.",
      },
      renewTitle: "Renewable sources",
      renewText: (<>Sun, wind, water, biomass and geothermal: they regenerate naturally on timescales compatible with human life. They produce energy <strong>with no direct CO₂ emissions</strong> and cut reliance on fossil fuels.</>),
      nonRenewTitle: "Non-renewable sources",
      nonRenewText: "Coal, oil and natural gas: they run out and generate greenhouse gases. They are the main cause of climate change and worsening urban air quality.",
      sec1Label: "Section 1",
      sec1Title: "Anatomy of a solar panel",
      sec1Sub: "A photovoltaic module is a layered structure designed to last more than 25 years exposed to the elements. Every layer has a precise role.",
      anatomy: [
        { t: "Anti-reflective tempered glass", d: "About 3.2 mm thick. Protects the cells from hail and impact while letting through over 90% of light." },
        { t: "Top EVA layer", d: "Ethylene Vinyl Acetate film that encapsulates the cells, insulates against moisture and damps vibration." },
        { t: "Silicon cells", d: "Mono- or polycrystalline: they convert photons into electrons through the photovoltaic effect (P-N junction)." },
        { t: "Bus-bars and ribbons", d: "Thin tin-plated copper strips collecting the current produced by the cells and carrying it to the junction box." },
        { t: "Bottom EVA + backsheet", d: "Seals the module from behind in Tedlar/PET, providing electrical insulation and waterproofing." },
        { t: "Aluminium frame", d: "Anodised frame providing mechanical rigidity and allowing fixing to support structures." },
        { t: "Junction box & by-pass diodes", d: "Rear box with diodes that prevent performance drops when a cell is shaded." },
        { t: "MC4 connectors", d: "Standard IP67 connectors that link modules in series/parallel in full safety." },
        { t: "Anti-PID treatment", d: "Technologies that prevent potential induced degradation, keeping efficiency high over time." },
      ],
      sec2Label: "Section 2",
      sec2Title: "How a photovoltaic plant is wired",
      sec2Sub: "From the roof to the meter: the path of energy in six steps, with the safety devices required by the CEI 0-21 standard.",
      steps: [
        { title: "1. Module string", text: "Panels are connected in series to add their voltages and reach the inverter's working range (200–600 V DC)." },
        { title: "2. DC switchboard", text: "Disconnector, SPD surge arresters and fuses protect the DC line from over-voltages and short circuits." },
        { title: "3. Inverter", text: "Converts direct current to alternating 230 V / 50 Hz and applies the MPPT algorithm to maximise yield." },
        { title: "4. Storage (optional)", text: "A lithium battery stores daytime surplus for the evening, raising self-consumption from 30% to 80%." },
        { title: "5. AC switchboard and SPI", text: "Interface Protection System that disconnects the plant from the grid in case of fault (CEI 0-21)." },
        { title: "6. Bidirectional meter", text: "Measures both energy consumed and energy fed into the grid (net metering / sale)." },
      ],
      flow: ["Sun", "Panels", "DC board", "Inverter", "Battery", "AC board", "Home", "Grid"],
      sec3Label: "Section 3",
      sec3Title: "Companies working in photovoltaics",
      sec3Sub: "From the industry that makes the cells to local installers: a supply chain made of organisations at different scales.",
      companies: [
        { scope: "Global · Manufacturers", t: "JinkoSolar, LONGi, Trina, Q CELLS", d: "The world's leading makers of solar modules and cells. They invest billions in R&D to push commercial module efficiency past 22%." },
        { scope: "National · Energy", t: "Enel X, Eni Plenitude, A2A, Sorgenia", d: "Italian utilities offering turn-key plants, Renewable Energy Communities (CER) and easy financing schemes." },
        { scope: "Local · Installers", t: "Energetica Futura and local EPCs", d: "Sicilian SMEs that handle design, installation, maintenance and GSE paperwork. They create skilled jobs in the area." },
      ],
      greenBizTitle: 'How a company turns "green"',
      greenBizText: "A company's shift to a sustainable model goes through concrete choices: self-generated energy, process efficiency and responsible material management.",
      greenBizCards: [
        { t: "Self-consumption", d: "Rooftop PV systems to cover production needs." },
        { t: "Efficiency", d: "LED relamping, high-efficiency motors, process heat recovery." },
        { t: "Circular economy", d: "Reuse of waste, recycling of materials and certified suppliers." },
      ],
      sec4Label: "Section 4 · Conclusion",
      sec4Title: "The impact on household spending",
      sec4Sub: "The numbers speak clearly: home photovoltaics slashes the bill, pays for itself in a few years and keeps generating savings for over two decades.",
      bolTitle: "Yearly bill cost (€)",
      bolSub: "Typical family: with vs without a 4 kWp plant.",
      bolWithout: "Without PV", bolWith: "With PV",
      prodTitle: "Monthly production (kWh)",
      prodSub: "4 kWp plant facing south, Ragusa latitude.",
      ammTitle: "Investment payback (€)",
      ammSub: "Initial investment €9,000: break-even arrives around year 9; after 25 years cumulative gains exceed €16,000.",
      ammLabel: "Cumulative balance €",
      months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      finalTitle: "Why installing it at home pays off",
      finalText: "Home photovoltaics drastically cuts the bill, increases property value and lowers the family's carbon footprint. With storage and smart load management, self-consumption goes beyond 80%.",
      finalStats: [
        { v: "-60%", l: "Average bill" },
        { v: "9 years", l: "Payback time" },
        { v: "25 years", l: "Panel lifetime" },
        { v: "~1.5 t", l: "CO₂ avoided per year" },
      ],
      finalOutro: "Choosing photovoltaics means actively taking part in the energy transition: every roof that produces clean energy is a small step toward goals 7, 12 and 13 of the 2030 Agenda.",
    },
  });

  const bolletta = [
    { anno: "2024", senza: 1800, con: 720 },
    { anno: "2025", senza: 1900, con: 760 },
    { anno: "2026", senza: 2000, con: 800 },
    { anno: "2027", senza: 2080, con: 830 },
    { anno: "2028", senza: 2150, con: 860 },
  ];
  const produzione = t.months.map((mese, i) => ({ mese, kwh: [180,230,340,410,510,560,590,540,430,320,200,160][i] }));
  const ammortamento = [
    { anno: 0, saldo: -9000 }, { anno: 2, saldo: -7200 }, { anno: 4, saldo: -5400 },
    { anno: 6, saldo: -3500 }, { anno: 8, saldo: -1500 }, { anno: 9, saldo: 0 },
    { anno: 12, saldo: 2800 }, { anno: 15, saldo: 5800 }, { anno: 20, saldo: 11000 },
    { anno: 25, saldo: 16500 },
  ];

  const anatomyIcons = [ShieldCheck, Layers, CircuitBoard, Cable, Layers, Gauge, Plug, Zap, Sun];
  const stepIcons = [Sun, ShieldCheck, Plug, Battery, ShieldCheck, Home];
  const compIcons = [Globe2, Building2, Leaf];

  return (
    <>
      <PageHero {...t.hero} image={img} />

      <section className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="reveal glass glass-shine rounded-3xl p-8">
            <Wind className="w-10 h-10 text-primary mb-3" />
            <h2 className="text-2xl font-extrabold text-primary mb-3">{t.renewTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.renewText}</p>
          </div>
          <div className="reveal glass glass-shine rounded-3xl p-8">
            <Factory className="w-10 h-10 text-primary mb-3" />
            <h2 className="text-2xl font-extrabold text-primary mb-3">{t.nonRenewTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.nonRenewText}</p>
          </div>
        </div>

        <div className="text-center mb-10 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-3">{t.sec1Label}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">{t.sec1Title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t.sec1Sub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {t.anatomy.map((a, i) => {
            const Icon = anatomyIcons[i];
            return (
              <article key={a.t} className="reveal glass glass-shine rounded-3xl p-6 hover-scale" style={{ transitionDelay: `${i * 40}ms` }}>
                <Icon className="w-9 h-9 text-primary mb-3" />
                <h3 className="font-bold text-primary mb-2">{a.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
              </article>
            );
          })}
        </div>

        <div className="text-center mb-10 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-3">{t.sec2Label}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">{t.sec2Title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t.sec2Sub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {t.steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <article key={s.title} className="reveal glass glass-shine p-6 rounded-3xl hover-scale" style={{ transitionDelay: `${i * 60}ms` }}>
                <Icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </article>
            );
          })}
        </div>

        <div className="reveal glass glass-shine rounded-3xl p-6 md:p-8 mb-16 overflow-x-auto">
          <div className="flex items-center gap-3 min-w-[720px] justify-between text-center text-sm font-semibold text-primary">
            {t.flow.map((s, i, arr) => (
              <div key={s} className="flex items-center gap-2">
                <div className="px-3 py-2 rounded-xl bg-primary/10 whitespace-nowrap">{s}</div>
                {i < arr.length - 1 && <span className="text-primary/60">→</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-10 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-3">{t.sec3Label}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">{t.sec3Title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t.sec3Sub}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {t.companies.map((c, i) => {
            const Icon = compIcons[i];
            return (
              <article key={c.t} className="reveal glass glass-shine rounded-3xl p-6 hover-scale">
                <Icon className="w-9 h-9 text-primary mb-3" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.scope}</div>
                <h3 className="font-bold text-primary mb-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </article>
            );
          })}
        </div>

        <div className="reveal glass glass-shine rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-extrabold text-primary">{t.greenBizTitle}</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-4xl">{t.greenBizText}</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {t.greenBizCards.map((s) => (
              <div key={s.t} className="rounded-2xl bg-primary/5 p-5">
                <div className="font-bold text-primary mb-1">{s.t}</div>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-10 reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-3">{t.sec4Label}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">{t.sec4Title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t.sec4Sub}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div className="reveal glass glass-shine rounded-3xl p-6">
            <h3 className="font-bold text-primary mb-1">{t.bolTitle}</h3>
            <p className="text-xs text-muted-foreground mb-4">{t.bolSub}</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bolletta}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="anno" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
                  <Legend />
                  <Bar dataKey="senza" name={t.bolWithout} fill="hsl(var(--muted-foreground))" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="con" name={t.bolWith} fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="reveal glass glass-shine rounded-3xl p-6">
            <h3 className="font-bold text-primary mb-1">{t.prodTitle}</h3>
            <p className="text-xs text-muted-foreground mb-4">{t.prodSub}</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={produzione}>
                  <defs>
                    <linearGradient id="prodFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.6} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="mese" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
                  <Area type="monotone" dataKey="kwh" name="kWh" stroke="hsl(var(--primary))" strokeWidth={3} fill="url(#prodFill)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="reveal glass glass-shine rounded-3xl p-6 lg:col-span-2">
            <h3 className="font-bold text-primary mb-1">{t.ammTitle}</h3>
            <p className="text-xs text-muted-foreground mb-4">{t.ammSub}</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ammortamento}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="anno" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
                  <Line type="monotone" dataKey="saldo" name={t.ammLabel} stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="reveal gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground shadow-glow">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-extrabold">{t.finalTitle}</h2>
          </div>
          <p className="text-lg opacity-90 max-w-3xl mb-8">{t.finalText}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.finalStats.map((s) => (
              <div key={s.l} className="glass-dark glass-shine rounded-2xl p-5">
                <div className="text-4xl font-extrabold">{s.v}</div>
                <div className="opacity-80 text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <p className="opacity-90 mt-8 max-w-3xl">{t.finalOutro}</p>
        </div>
      </section>
    </>
  );
};

export default Fotovoltaico;
