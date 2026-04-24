/**
 * Filtro SVG per la distorsione "liquid glass".
 * Va montato una sola volta (nel Layout) e referenziato da CSS:
 *   backdrop-filter: url(#liquid-glass) blur(8px) saturate(180%);
 *
 * - feTurbulence: genera un pattern organico tipo onde
 * - feDisplacementMap: usa il pattern per spostare i pixel dello sfondo
 *   creando l'effetto di rifrazione del vetro liquido.
 */
const GlassFilter = () => (
  <svg
    aria-hidden="true"
    style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}
  >
    <defs>
      {/* Distorsione forte: per card e pannelli grandi */}
      <filter id="liquid-glass" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012 0.018"
          numOctaves="2"
          seed="7"
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation="2" result="softNoise" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softNoise"
          scale="60"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>

      {/* Distorsione leggera: per la navbar e elementi piccoli */}
      <filter id="liquid-glass-soft" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.02 0.03"
          numOctaves="2"
          seed="3"
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation="1.5" result="softNoise" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softNoise"
          scale="22"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  </svg>
);

export default GlassFilter;
