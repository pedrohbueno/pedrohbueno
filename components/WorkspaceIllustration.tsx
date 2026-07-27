"use client";

interface Hotspot {
  id: string;
  top: string;
  left: string;
  dotTop: string;
  dotLeft: string;
  title: string;
  description: string;
  href: string;
  align?: "left" | "right";
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "stack",
    top: "6%",
    left: "48%",
    dotTop: "34%",
    dotLeft: "50%",
    title: "Stack principal",
    description: "Tecnologias e ferramentas que utilizo no dia a dia.",
    href: "#sobre",
  },
  {
    id: "projetos",
    top: "40%",
    left: "78%",
    dotTop: "46%",
    dotLeft: "62%",
    title: "Projetos",
    description: "Mobile, web, RPA e ETL em destaque.",
    href: "#projetos",
  },
  {
    id: "sobre",
    top: "72%",
    left: "70%",
    dotTop: "64%",
    dotLeft: "58%",
    title: "Sobre mim",
    description: "Minha jornada, objetivos e valores.",
    href: "#sobre",
  },
  {
    id: "infra",
    top: "86%",
    left: "10%",
    dotTop: "78%",
    dotLeft: "34%",
    title: "Infraestrutura",
    description: "Automação, integrações e ambientes que mantenho.",
    href: "#projetos",
  },
];

export default function WorkspaceIllustration() {
  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-xl select-none">
      <svg
        viewBox="0 0 600 500"
        className="h-full w-full"
        role="img"
        aria-label="Ilustração de uma estação de trabalho de desenvolvedor, com dois monitores, teclado e elementos neon ao fundo"
      >
        <defs>
          <radialGradient id="ambientGlow" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="screenMain" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="screenSide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#12121F" />
            <stop offset="100%" stopColor="#1c1c30" />
          </linearGradient>
          <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1b1b2c" />
            <stop offset="100%" stopColor="#0f0f1a" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="600" height="500" fill="url(#ambientGlow)" />

        {/* wall neon frames */}
        <rect x="470" y="40" width="90" height="90" rx="6" fill="none" stroke="#EC4899" strokeWidth="2.5" opacity="0.8" filter="url(#glow)" />
        <rect x="497" y="67" width="36" height="36" rx="3" fill="#EC4899" opacity="0.7" />
        <rect x="470" y="150" width="70" height="70" rx="6" fill="none" stroke="#3B82F6" strokeWidth="2.5" opacity="0.8" filter="url(#glow)" />
        <rect x="493" y="173" width="24" height="24" rx="3" fill="#3B82F6" opacity="0.7" />

        {/* shelf with books */}
        <rect x="60" y="150" width="330" height="8" rx="3" fill="#8B5CF6" opacity="0.35" filter="url(#glow)" />
        <rect x="70" y="112" width="10" height="38" fill="#A78BFA" opacity="0.7" />
        <rect x="82" y="108" width="10" height="42" fill="#EC4899" opacity="0.7" />
        <rect x="94" y="115" width="10" height="35" fill="#60A5FA" opacity="0.7" />
        <rect x="106" y="105" width="10" height="45" fill="#A78BFA" opacity="0.5" />
        <rect x="118" y="118" width="10" height="32" fill="#F472B6" opacity="0.7" />

        {/* speakers */}
        <circle cx="65" cy="185" r="20" fill="#171728" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.8" />
        <circle cx="65" cy="185" r="9" fill="none" stroke="#8B5CF6" strokeWidth="1.2" opacity="0.6" />
        <circle cx="380" cy="185" r="20" fill="#171728" stroke="#3B82F6" strokeWidth="1.5" opacity="0.8" />
        <circle cx="380" cy="185" r="9" fill="none" stroke="#3B82F6" strokeWidth="1.2" opacity="0.6" />

        {/* monitor side (code) */}
        <g>
          <rect x="60" y="210" width="120" height="85" rx="4" fill="url(#screenSide)" stroke="#8B5CF6" strokeOpacity="0.4" />
          <rect x="70" y="220" width="60" height="4" rx="2" fill="#60A5FA" opacity="0.7" />
          <rect x="70" y="230" width="80" height="3" rx="1.5" fill="#4b4b66" />
          <rect x="70" y="238" width="70" height="3" rx="1.5" fill="#4b4b66" />
          <rect x="70" y="246" width="90" height="3" rx="1.5" fill="#4b4b66" />
          <rect x="70" y="254" width="50" height="3" rx="1.5" fill="#EC4899" opacity="0.6" />
          <rect x="70" y="262" width="75" height="3" rx="1.5" fill="#4b4b66" />
        </g>

        {/* monitor main (gradient sunset) */}
        <g filter="url(#glow)">
          <rect x="195" y="195" width="230" height="130" rx="6" fill="url(#screenMain)" opacity="0.9" />
        </g>
        <path d="M195 300 L280 250 L330 285 L425 220 L425 325 L195 325 Z" fill="#0A0A14" opacity="0.35" />

        {/* stands */}
        <rect x="112" y="295" width="16" height="18" fill="#22222f" />
        <rect x="300" y="325" width="20" height="20" fill="#22222f" />
        <rect x="90" y="313" width="60" height="6" rx="3" fill="#2b2b3c" />
        <rect x="280" y="345" width="60" height="6" rx="3" fill="#2b2b3c" />

        {/* desk */}
        <rect x="20" y="352" width="480" height="14" rx="3" fill="url(#deskGrad)" stroke="#8B5CF6" strokeOpacity="0.25" />
        <rect x="70" y="330" width="80" height="10" rx="2" fill="#171728" opacity="0.9" />
        <rect x="240" y="335" width="150" height="8" rx="2" fill="#171728" opacity="0.9" />

        {/* keyboard + mouse */}
        <rect x="230" y="337" width="100" height="7" rx="2" fill="#1c1c30" opacity="0" />

        {/* tower */}
        <rect x="40" y="372" width="46" height="100" rx="6" fill="#14141f" stroke="#8B5CF6" strokeOpacity="0.4" />
        <circle cx="63" cy="405" r="9" fill="none" stroke="#A78BFA" strokeWidth="1.6" opacity="0.8" />
        <circle cx="63" cy="430" r="9" fill="none" stroke="#3B82F6" strokeWidth="1.6" opacity="0.8" />

        {/* chair */}
        <g opacity="0.9">
          <path d="M330 250 Q370 240 385 280 L385 340 Q385 350 375 350 L340 350 Q330 350 330 340 Z" fill="#171728" stroke="#EC4899" strokeOpacity="0.35" />
          <rect x="340" y="350" width="45" height="60" rx="10" fill="#14141f" stroke="#3B82F6" strokeOpacity="0.3" />
          <rect x="335" y="410" width="55" height="8" rx="4" fill="#0f0f1a" />
          <line x1="360" y1="418" x2="360" y2="450" stroke="#22222f" strokeWidth="6" />
        </g>

        {/* floor glow */}
        <ellipse cx="330" cy="470" rx="140" ry="16" fill="#8B5CF6" opacity="0.08" />
      </svg>

      {/* hotspot pulse dots */}
      {HOTSPOTS.map((spot) => (
        <span
          key={`dot-${spot.id}`}
          className="absolute h-2 w-2 rounded-full bg-purple-soft shadow-[0_0_12px_4px_rgba(167,139,250,0.6)] animate-pulse-glow"
          style={{ top: spot.dotTop, left: spot.dotLeft }}
        />
      ))}

      {/* hotspot cards */}
      {HOTSPOTS.map((spot, i) => (
        <a
          key={spot.id}
          href={spot.href}
          className="group absolute w-44 animate-float rounded-xl border border-border bg-surface/90 p-3 shadow-lg shadow-black/40 backdrop-blur-sm transition-colors hover:border-purple-soft sm:w-52"
          style={{
            top: spot.top,
            left: spot.left,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          <p className="font-mono text-[10px] uppercase tracking-wider text-purple-soft">
            {spot.title}
          </p>
          <p className="mt-1 text-[11px] leading-snug text-muted group-hover:text-ink sm:text-xs">
            {spot.description}
          </p>
        </a>
      ))}
    </div>
  );
}
