"use client";

export default function Home() {
  return (
    <main className="page">
      <section className="card">
        <header className="header">
          <h1>Classic Game Boy</h1>
          <p>
            Scalable vector art capturing the nostalgic grey brick handheld, ready to
            drop into any modern project.
          </p>
        </header>

        <figure className="figure">
          <svg
            role="img"
            aria-labelledby="title desc"
            viewBox="0 0 320 560"
            className="gameboy"
          >
            <title id="title">Classic Game Boy handheld console</title>
            <desc id="desc">
              Rounded rectangular handheld with monochrome screen, D-pad, A and B buttons,
              speaker vent, and start/select buttons.
            </desc>

            <defs>
              <linearGradient id="body-shade" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f6f7f8" />
                <stop offset="60%" stopColor="#d9dde3" />
                <stop offset="100%" stopColor="#c3c7ce" />
              </linearGradient>

              <linearGradient id="screen-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8bbf85" />
                <stop offset="35%" stopColor="#6e9e68" />
                <stop offset="100%" stopColor="#4d6d48" />
              </linearGradient>

              <linearGradient id="screen-plastic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4c475a" />
                <stop offset="100%" stopColor="#201b2c" />
              </linearGradient>

              <radialGradient id="button-highlight" cx="30%" cy="30%" r="75%">
                <stop offset="0%" stopColor="#fbc5d5" />
                <stop offset="45%" stopColor="#d66186" />
                <stop offset="100%" stopColor="#9b264c" />
              </radialGradient>

              <pattern
                id="speaker-cutouts"
                x="0"
                y="0"
                width="14"
                height="14"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="7" cy="7" r="3.25" fill="#4a4e57" opacity="0.75" />
              </pattern>

              <clipPath id="screen-clip">
                <rect x="55" y="88" width="210" height="168" rx="14" ry="14" />
              </clipPath>
            </defs>

            <rect
              x="20"
              y="12"
              width="280"
              height="536"
              rx="38"
              ry="38"
              fill="url(#body-shade)"
              stroke="#9fa3ad"
              strokeWidth="4"
            />

            <rect
              x="44"
              y="56"
              width="232"
              height="240"
              rx="26"
              ry="26"
              fill="url(#screen-plastic)"
              stroke="#1a1625"
              strokeWidth="3"
            />

            <g clipPath="url(#screen-clip)">
              <rect x="55" y="88" width="210" height="168" rx="14" fill="url(#screen-glow)" />
              <rect
                x="55"
                y="88"
                width="210"
                height="168"
                rx="14"
                fill="url(#screen-glow)"
                opacity="0.2"
              />
              <path
                d="M55 105 C140 160 220 160 265 105 V88 H55 Z"
                fill="#ffffff"
                opacity="0.08"
              />
            </g>

            <rect
              x="60"
              y="290"
              width="200"
              height="14"
              rx="7"
              fill="#3c3749"
              opacity="0.4"
            />
            <rect x="62" y="295" width="196" height="6" rx="3" fill="#f13061" opacity="0.7" />

            <circle cx="82" cy="320" r="8" fill="#c31d4a" />
            <circle cx="238" cy="320" r="8" fill="#3fb34f" />

            <g transform="translate(82 368)">
              <rect x="-36" y="-36" width="72" height="72" rx="12" fill="#3d3d4d" />
              <rect x="-12" y="-32" width="24" height="64" rx="7" fill="#161622" />
              <rect x="-32" y="-12" width="64" height="24" rx="7" fill="#161622" />
              <rect x="-12" y="-12" width="24" height="24" rx="5" fill="#232330" />
              <circle cx="0" cy="0" r="6" fill="#454558" />
            </g>

            <g transform="translate(218 398)">
              <circle cx="0" cy="0" r="30" fill="url(#button-highlight)" />
              <circle cx="52" cy="32" r="30" fill="url(#button-highlight)" />
              <circle cx="0" cy="0" r="8" fill="#f7e5ec" opacity="0.35" />
              <circle cx="52" cy="32" r="8" fill="#f7e5ec" opacity="0.35" />
            </g>

            <g transform="translate(160 460)">
              <rect
                x="-52"
                y="0"
                width="44"
                height="14"
                rx="7"
                fill="#4a4a58"
                stroke="#1c1c28"
                strokeWidth="2"
              />
              <rect
                x="8"
                y="0"
                width="44"
                height="14"
                rx="7"
                fill="#4a4a58"
                stroke="#1c1c28"
                strokeWidth="2"
              />
            </g>

            <rect
              x="76"
              y="500"
              width="168"
              height="44"
              rx="20"
              fill="#1d1f2a"
              opacity="0.9"
            />
            <rect
              x="84"
              y="508"
              width="152"
              height="28"
              rx="14"
              fill="url(#speaker-cutouts)"
            />

            <path
              d="M90 72 L100 50 H138"
              stroke="#ff2e74"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <circle cx="120" cy="50" r="6" fill="#ff2e74" />

            <path
              d="M220 48 h32 a10 10 0 0 1 10 10 v8"
              stroke="#aeafbd"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <figcaption>
            Download the `.svg` directly from this page or copy the markup for your own use.
          </figcaption>
        </figure>

        <section className="code">
          <h2>SVG Markup</h2>
          <p>
            Reuse the handheld illustration by copying the code below into any HTML, React, or
            design tool that supports vectors.
          </p>
          <pre>
            <code>{`<!-- Classic Game Boy SVG -->
<svg role="img" aria-labelledby="title desc" viewBox="0 0 320 560">
  <!-- ...markup truncated for brevity... -->
</svg>`}</code>
          </pre>
        </section>
      </section>
    </main>
  );
}
