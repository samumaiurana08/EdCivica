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

const bolletta = [
  { anno: "2024", senza: 1800, con: 720 },
  { anno: "2025", senza: 1900, con: 760 },
  { anno: "2026", senza: 2000, con: 800 },
  { anno: "2027", senza: 2080, con: 830 },
  { anno: "2028", senza: 2150, con: 860 },
];

const produzione = [
  { mese: "Gen", kwh: 180 }, { mese: "Feb", kwh: 230 }, { mese: "Mar", kwh: 340 },
  { mese: "Apr", kwh: 410 }, { mese: "Mag", kwh: 510 }, { mese: "Giu", kwh: 560 },
  { mese: "Lug", kwh: 590 }, { mese: "Ago", kwh: 540 }, { mese: "Set", kwh: 430 },
  { mese: "Ott", kwh: 320 }, { mese: "Nov", kwh: 200 }, { mese: "Dic", kwh: 160 },
];

const ammortamento = [
  { anno: 0, saldo: -9000 }, { anno: 2, saldo: -7200 }, { anno: 4, saldo: -5400 },
  { anno: 6, saldo: -3500 }, { anno: 8, saldo: -1500 }, { anno: 9, saldo: 0 },
  { anno: 12, saldo: 2800 }, { anno: 15, saldo: 5800 }, { anno: 20, saldo: 11000 },
  { anno: 25, saldo: 16500 },
];

const Fotovoltaico = () => (
  <>
    <PageHero
      eyebrow="Energia rinnovabile"
      title="Fotovoltaico"
      subtitle="Una presentazione completa: dai componenti del pannello al collegamento dell'impianto, dalle aziende del settore all'impatto sulle bollette di casa."
      image={img}
    />

    <section className="container mx-auto py-16">
      {/* Fonti rinnovabili vs non rinnovabili */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="reveal glass glass-shine rounded-3xl p-8">
          <Wind className="w-10 h-10 text-primary mb-3" />
          <h2 className="text-2xl font-extrabold text-primary mb-3">Fonti rinnovabili</h2>
          <p className="text-muted-foreground leading-relaxed">
            Sole, vento, acqua, biomasse e geotermia: si rigenerano naturalmente in tempi compatibili con
            la vita umana. Producono energia <strong>senza emissioni dirette di CO₂</strong> e riducono la
            dipendenza dai combustibili fossili.
          </p>
        </div>
        <div className="reveal glass glass-shine rounded-3xl p-8">
          <Factory className="w-10 h-10 text-primary mb-3" />
          <h2 className="text-2xl font-extrabold text-primary mb-3">Fonti non rinnovabili</h2>
          <p className="text-muted-foreground leading-relaxed">
            Carbone, petrolio e gas naturale: si esauriscono e generano gas serra. Sono la principale causa
            del cambiamento climatico e del peggioramento della qualità dell'aria nelle aree urbane.
          </p>
        </div>
      </div>

      {/* Sezione 1 — Anatomia del pannello */}
      <div className="text-center mb-10 reveal">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
          Sezione 1
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">Anatomia di un pannello solare</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Un modulo fotovoltaico è una struttura stratificata, progettata per durare oltre 25 anni esposta agli agenti
          atmosferici. Ogni strato ha una funzione precisa.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {[
          { icon: ShieldCheck, t: "Vetro temperato anti-riflesso", d: "Spessore ~3,2 mm. Protegge le celle da grandine e impatti, lasciando passare oltre il 90% della luce." },
          { icon: Layers, t: "Strato EVA superiore", d: "Pellicola di Etilene Vinil Acetato che incapsula le celle, isola dall'umidità e ammortizza le vibrazioni." },
          { icon: CircuitBoard, t: "Celle in silicio", d: "Mono o policristallino: convertono i fotoni in elettroni grazie all'effetto fotovoltaico (giunzione P-N)." },
          { icon: Cable, t: "Bus-bar e ribbon", d: "Sottili nastri di rame stagnato che raccolgono la corrente generata dalle celle e la portano alla scatola di giunzione." },
          { icon: Layers, t: "EVA inferiore + backsheet", d: "Sigilla il modulo dal retro in Tedlar/PET garantendo isolamento elettrico e impermeabilità." },
          { icon: Gauge, t: "Cornice in alluminio", d: "Telaio anodizzato che dà rigidità meccanica e permette il fissaggio alle strutture di supporto." },
          { icon: Plug, t: "Junction box & diodi by-pass", d: "Scatola posteriore con diodi che evitano cali di rendimento quando una cella è in ombra." },
          { icon: Zap, t: "Connettori MC4", d: "Connettori standard IP67 che collegano in serie/parallelo i moduli in totale sicurezza." },
          { icon: Sun, t: "Trattamento anti-PID", d: "Tecnologie che prevengono la degradazione potenziale indotta, mantenendo alta l'efficienza nel tempo." },
        ].map(({ icon: Icon, t, d }, i) => (
          <article
            key={t}
            className="reveal glass glass-shine rounded-3xl p-6 hover-scale"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <Icon className="w-9 h-9 text-primary mb-3" />
            <h3 className="font-bold text-primary mb-2">{t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
          </article>
        ))}
      </div>

      {/* Sezione 2 — Collegamento impianto */}
      <div className="text-center mb-10 reveal">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
          Sezione 2
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">Come si collega un impianto fotovoltaico</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Dal tetto al contatore: il percorso dell'energia in sei tappe, con le sicurezze previste dalla normativa CEI 0-21.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {[
          { icon: Sun, title: "1. Stringa di moduli", text: "I pannelli si collegano in serie per sommare le tensioni e raggiungere il valore di lavoro dell'inverter (200–600 V DC)." },
          { icon: ShieldCheck, title: "2. Quadro DC", text: "Sezionatore, scaricatori SPD e fusibili proteggono la linea in continua da sovratensioni e cortocircuiti." },
          { icon: Plug, title: "3. Inverter", text: "Converte la corrente continua in alternata 230 V / 50 Hz e applica l'algoritmo MPPT per massimizzare la resa." },
          { icon: Battery, title: "4. Accumulo (opzionale)", text: "Una batteria al litio immagazzina il surplus diurno per la sera, alzando l'autoconsumo dal 30% all'80%." },
          { icon: ShieldCheck, title: "5. Quadro AC e SPI", text: "Sistema di Protezione di Interfaccia che scollega l'impianto dalla rete in caso di anomalia (CEI 0-21)." },
          { icon: Home, title: "6. Contatore bidirezionale", text: "Misura sia l'energia consumata sia quella immessa in rete (Scambio sul Posto / Cessione)." },
        ].map(({ icon: Icon, title, text }, i) => (
          <article
            key={title}
            className="reveal glass glass-shine p-6 rounded-3xl hover-scale"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <Icon className="w-10 h-10 text-primary mb-3" />
            <h3 className="font-bold text-primary mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>

      <div className="reveal glass glass-shine rounded-3xl p-6 md:p-8 mb-16 overflow-x-auto">
        <div className="flex items-center gap-3 min-w-[720px] justify-between text-center text-sm font-semibold text-primary">
          {["Sole", "Pannelli", "Quadro DC", "Inverter", "Batteria", "Quadro AC", "Casa", "Rete"].map((s, i, arr) => (
            <div key={s} className="flex items-center gap-2">
              <div className="px-3 py-2 rounded-xl bg-primary/10 whitespace-nowrap">{s}</div>
              {i < arr.length - 1 && <span className="text-primary/60">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Sezione 3 — Aziende */}
      <div className="text-center mb-10 reveal">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
          Sezione 3
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">Aziende che si occupano di fotovoltaico</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Dall'industria che produce le celle agli installatori locali: una filiera fatta di realtà a diverse scale.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {[
          { icon: Globe2, scope: "Globale · Produttori", t: "JinkoSolar, LONGi, Trina, Q CELLS", d: "I principali produttori mondiali di moduli e celle solari. Investono miliardi in R&D per superare il 22% di efficienza sui moduli commerciali." },
          { icon: Building2, scope: "Nazionale · Energia", t: "Enel X, Eni Plenitude, A2A, Sorgenia", d: "Utility italiane che offrono impianti chiavi in mano, comunità energetiche rinnovabili (CER) e formule di finanziamento agevolate." },
          { icon: Leaf, scope: "Locale · Installatori", t: "Energetica Futura ed EPC del territorio", d: "PMI siciliane che si occupano di progettazione, installazione, manutenzione e pratiche GSE. Creano lavoro qualificato sul territorio." },
        ].map(({ icon: Icon, scope, t, d }) => (
          <article key={t} className="reveal glass glass-shine rounded-3xl p-6 hover-scale">
            <Icon className="w-9 h-9 text-primary mb-3" />
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{scope}</div>
            <h3 className="font-bold text-primary mb-2">{t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
          </article>
        ))}
      </div>

      {/* Come un'azienda diventa green */}
      <div className="reveal glass glass-shine rounded-3xl p-8 md:p-12 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-extrabold text-primary">Come un'azienda diventa "green"</h2>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-4xl">
          La transizione di un'azienda verso un modello sostenibile passa da scelte concrete: produzione
          energetica autonoma, efficienza dei processi e gestione responsabile dei materiali.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { t: "Autoconsumo", d: "Impianti fotovoltaici sui tetti per coprire il fabbisogno produttivo." },
            { t: "Efficienza", d: "Relamping LED, motori ad alta efficienza, recupero del calore di processo." },
            { t: "Economia circolare", d: "Riuso degli scarti, riciclo dei materiali e fornitori certificati." },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl bg-primary/5 p-5">
              <div className="font-bold text-primary mb-1">{s.t}</div>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sezione 4 — Conclusione e grafici */}
      <div className="text-center mb-10 reveal">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/30 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
          Sezione 4 · Conclusione
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">L'impatto sulle spese di casa</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          I numeri parlano chiaro: il fotovoltaico domestico abbatte la bolletta, si ripaga in pochi anni e
          continua a generare risparmio per oltre due decenni.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        <div className="reveal glass glass-shine rounded-3xl p-6">
          <h3 className="font-bold text-primary mb-1">Spesa annua bolletta (€)</h3>
          <p className="text-xs text-muted-foreground mb-4">Famiglia tipo: con vs senza impianto da 4 kWp.</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bolletta}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="anno" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
                <Legend />
                <Bar dataKey="senza" name="Senza FV" fill="hsl(var(--muted-foreground))" radius={[8, 8, 0, 0]} />
                <Bar dataKey="con" name="Con FV" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="reveal glass glass-shine rounded-3xl p-6">
          <h3 className="font-bold text-primary mb-1">Produzione mensile (kWh)</h3>
          <p className="text-xs text-muted-foreground mb-4">Impianto da 4 kWp esposto a sud, latitudine Ragusa.</p>
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
          <h3 className="font-bold text-primary mb-1">Ammortamento dell'investimento (€)</h3>
          <p className="text-xs text-muted-foreground mb-4">
            Investimento iniziale 9.000 €: il break-even arriva intorno al 9° anno; dopo 25 anni il guadagno cumulato supera i 16.000 €.
          </p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ammortamento}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="anno" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))", borderRadius: 12 }} />
                <Line type="monotone" dataKey="saldo" name="Saldo cumulato €" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="reveal gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground shadow-glow">
        <div className="flex items-center gap-3 mb-4">
          <TrendingDown className="w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-extrabold">Perché conviene installarlo a casa</h2>
        </div>
        <p className="text-lg opacity-90 max-w-3xl mb-8">
          Il fotovoltaico domestico riduce drasticamente la bolletta, valorizza l'immobile e abbatte l'impronta
          di carbonio della famiglia. Con accumulo e gestione intelligente dei carichi, l'autoconsumo supera l'80%.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { v: "-60%", l: "Bolletta media" },
            { v: "9 anni", l: "Tempo di rientro" },
            { v: "25 anni", l: "Vita utile pannelli" },
            { v: "~1,5 t", l: "CO₂ evitata l'anno" },
          ].map((s) => (
            <div key={s.l} className="glass-dark glass-shine rounded-2xl p-5">
              <div className="text-4xl font-extrabold">{s.v}</div>
              <div className="opacity-80 text-sm mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <p className="opacity-90 mt-8 max-w-3xl">
          Scegliere il fotovoltaico significa partecipare attivamente alla transizione energetica:
          ogni tetto che produce energia pulita è un piccolo passo verso gli obiettivi 7, 12 e 13 dell'Agenda 2030.
        </p>
      </div>
    </section>
  </>
);

export default Fotovoltaico;
