interface BlogHeroImageProps {
  title: string;
  category: string;
  variant?: "light" | "dark";
  /** className is applied to the container div — caller controls aspect ratio and rounding */
  className?: string;
}

export function BlogHeroImage({
  title,
  category,
  variant = "light",
  className = "",
}: BlogHeroImageProps) {
  const isDark = variant === "dark";
  const bg = isDark ? "#171717" : "#fafafa";
  const fg = isDark ? "#fafafa" : "#171717";
  const accent = isDark ? "#525252" : "#a3a3a3";

  // Unique pattern ID avoids conflicts when multiple instances are on the same page
  const patternId = `grid-${variant}-${category.replace(/[\s&/]/g, "-").toLowerCase()}`;

  const displayTitle = title.length > 110 ? title.slice(0, 108) + "…" : title;

  return (
    <div className={`overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 675"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Background */}
        <rect width="1200" height="675" fill={bg} />

        {/* Grid texture */}
        <defs>
          <pattern
            id={patternId}
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke={accent}
              strokeWidth="0.5"
              opacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="1200" height="675" fill={`url(#${patternId})`} />

        {/* Wordmark — top left */}
        <text
          x="80"
          y="94"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize="36"
          fontWeight="500"
          fill={fg}
          letterSpacing="-0.01em"
        >
          Vertexa
        </text>
        <text
          x="82"
          y="120"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="14"
          fontWeight="600"
          letterSpacing="0.35em"
          fill={fg}
        >
          DIGITALS
        </text>

        {/* Category — top right */}
        <text
          x="1120"
          y="104"
          textAnchor="end"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="13"
          fontWeight="600"
          letterSpacing="0.25em"
          fill={accent}
        >
          {category.toUpperCase()}
        </text>

        {/* Rule */}
        <line
          x1="80"
          y1="150"
          x2="1120"
          y2="150"
          stroke={fg}
          strokeWidth="1"
          opacity="0.12"
        />

        {/* Title via foreignObject for natural wrapping */}
        <foreignObject x="80" y="198" width="1040" height="370">
          <div
            // @ts-expect-error — xmlns required on xhtml children of foreignObject
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "70px",
              fontWeight: 500,
              lineHeight: 1.1,
              color: fg,
              letterSpacing: "-0.02em",
              overflow: "hidden",
              maxHeight: "370px",
            }}
          >
            {displayTitle}
          </div>
        </foreignObject>

        {/* Domain — bottom right */}
        <text
          x="1120"
          y="624"
          textAnchor="end"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="12"
          fontWeight="500"
          letterSpacing="0.2em"
          fill={accent}
        >
          VERTEXADIGITALS.COM
        </text>

        {/* Accent bar — bottom left */}
        <line
          x1="80"
          y1="612"
          x2="260"
          y2="612"
          stroke={fg}
          strokeWidth="1.5"
          opacity="0.2"
        />
      </svg>
    </div>
  );
}
