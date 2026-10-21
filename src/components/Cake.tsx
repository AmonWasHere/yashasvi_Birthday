import { useId } from 'react';

const candleX = [146, 173, 200, 227, 254];

function SugarFlower({ x, y, className = '' }: { x: number; y: number; className?: string }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <g className={className} transform={`translate(${x} ${y})`}>
      {petals.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <circle
            key={angle}
            cx={Math.cos(rad) * 5.2}
            cy={Math.sin(rad) * 5.2}
            r="3.6"
            fill="#f8ecd8"
            stroke="#7d8c64"
            strokeWidth="1"
          />
        );
      })}
      <circle r="2.7" fill="#b6362c" />
    </g>
  );
}

export default function Cake({
  lit,
  onBlow,
}: {
  lit: boolean[];
  onBlow: (index: number) => void;
}) {
  const id = useId().replace(/[:]/g, '');

  return (
    <svg
      className="cake-svg"
      viewBox="0 0 400 380"
      role="group"
      aria-label="A three-tier birthday cake with five candles."
    >
      <defs>
        <linearGradient id={`${id}-flame`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#b6362c" />
          <stop offset=".55" stopColor="#df9343" />
          <stop offset="1" stopColor="#f9edc7" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#f6d79a" stopOpacity=".55" />
          <stop offset="1" stopColor="#f6d79a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="206" cy="354" rx="172" ry="17" fill="#2b1810" fillOpacity=".22" />
      <ellipse
        cx="200"
        cy="345"
        rx="168"
        ry="15"
        fill="#e9d2a8"
        stroke="#2b1810"
        strokeWidth="2"
      />

      {/* bottom tier */}
      <g>
        <rect
          x="56"
          y="272"
          width="288"
          height="66"
          rx="5"
          fill="#e6cda2"
          stroke="#2b1810"
          strokeWidth="2"
        />
        <path d="M56 284h288" stroke="#2b1810" strokeWidth="1" opacity=".45" />
        <rect x="56" y="272" width="288" height="12" fill="#f8ecd8" />
        <path
          d="M62 282c10 15 22 15 32 0s22-15 32 0 22 15 32 0 22-15 32 0 22 15 32 0 22-15 32 0 22 15 32 0 22-15 32 0 22 15 32 0"
          fill="none"
          stroke="#f8ecd8"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <path
          d="M62 282c10 15 22 15 32 0s22-15 32 0 22 15 32 0 22-15 32 0 22 15 32 0 22-15 32 0 22 15 32 0 22-15 32 0 22 15 32 0"
          fill="none"
          stroke="#2b1810"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity=".35"
        />
        <path
          d="M73 309h270M73 321h270"
          stroke="#a92b25"
          strokeWidth="1.4"
          strokeDasharray="2 7"
          strokeLinecap="round"
          opacity=".65"
        />
        <SugarFlower x={92} y={312} />
        <SugarFlower x={308} y={312} />
        <circle cx="200" cy="312" r="3.2" fill="#a92b25" />
        <circle cx="178" cy="316" r="2.2" fill="#7d8c64" />
        <circle cx="222" cy="316" r="2.2" fill="#7d8c64" />
        <text
          x="200"
          y="331"
          textAnchor="middle"
          fill="#2b1810"
          fontFamily="'Oswald', sans-serif"
          fontSize="7.5"
          letterSpacing="3.6"
          opacity=".75"
        >
          HAPPY BIRTHDAY
        </text>
      </g>

      {/* middle tier */}
      <g>
        <rect
          x="86"
          y="208"
          width="228"
          height="64"
          rx="5"
          fill="#ecd6ad"
          stroke="#2b1810"
          strokeWidth="2"
        />
        <rect x="86" y="208" width="228" height="11" fill="#f8ecd8" />
        <path
          d="M92 218c9 13 20 13 29 0s20-13 29 0 20 13 29 0 20-13 29 0 20 13 29 0 20-13 29 0 20 13 29 0"
          fill="none"
          stroke="#f8ecd8"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M92 218c9 13 20 13 29 0s20-13 29 0 20 13 29 0 20-13 29 0 20 13 29 0 20-13 29 0 20 13 29 0"
          fill="none"
          stroke="#2b1810"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity=".35"
        />
        <path
          d="M108 244h184"
          stroke="#2b1810"
          strokeWidth="1.2"
          strokeDasharray="1 6"
          strokeLinecap="round"
          opacity=".4"
        />
        <SugarFlower x={122} y={240} />
        <SugarFlower x={278} y={240} />
        <circle cx="200" cy="240" r="2.4" fill="#a92b25" />
      </g>

      {/* top tier */}
      <g>
        <rect
          x="118"
          y="150"
          width="164"
          height="58"
          rx="5"
          fill="#f0ddb9"
          stroke="#2b1810"
          strokeWidth="2"
        />
        <rect x="118" y="150" width="164" height="11" fill="#f8ecd8" />
        <path
          d="M124 160c8 12 18 12 26 0s18-12 26 0 18 12 26 0 18-12 26 0 18 12 26 0 18-12 26 0"
          fill="none"
          stroke="#f8ecd8"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M124 160c8 12 18 12 26 0s18-12 26 0 18 12 26 0 18-12 26 0 18 12 26 0 18-12 26 0"
          fill="none"
          stroke="#2b1810"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity=".35"
        />
        <SugarFlower x={140} y={184} />
        <SugarFlower x={260} y={184} />
        <circle cx="200" cy="184" r="2.2" fill="#7d8c64" />
      </g>

      {/* candles */}
      {candleX.map((x, index) => {
        const isLit = lit[index];
        return (
          <g
            key={x}
            className={`candle${isLit ? ' is-lit' : ' is-out'}`}
            role="button"
            tabIndex={0}
            aria-label={isLit ? `Blow out candle ${index + 1}` : `Candle ${index + 1} is out`}
            onClick={() => onBlow(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onBlow(index);
              }
            }}
          >
            <rect
              className="candle-hit"
              x={x - 13}
              y="58"
              width="26"
              height="100"
              fill="transparent"
            />
            <circle
              className="candle-ring"
              cx={x}
              cy="123"
              r="16"
              fill="none"
              stroke="#f8ecd8"
              strokeWidth="1"
              opacity="0"
            />
            <rect
              x={x - 4}
              y="102"
              width="8"
              height="50"
              rx="2"
              fill="#f2e2c2"
              stroke="#2b1810"
              strokeWidth="1.3"
            />
            <path
              d={`M${x - 3} 110l6 4M${x - 3} 121l6 4M${x - 3} 132l6 4`}
              stroke="#a92b25"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d={`M${x} 102V96`}
              stroke="#2b1810"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            {isLit ? (
              <g className="flame">
                <circle cx={x} cy="84" r="20" fill={`url(#${id}-glow)`} />
                <path
                  d={`M${x} 97c-7-8-6-17 0-26 7 9 7 18 0 26Z`}
                  fill={`url(#${id}-flame)`}
                  stroke="#a92b25"
                  strokeWidth=".7"
                />
                <path
                  d={`M${x} 93c-2.6-3.4-2.2-7.2 0-11 2.4 3.8 2.6 7.6 0 11Z`}
                  fill="#f9edc7"
                  opacity=".9"
                />
              </g>
            ) : (
              <path
                className="smoke"
                d={`M${x} 95c-6-6 6-10 0-17s5-10 0-16`}
                fill="none"
                stroke="#f2e4c6"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity=".55"
              />
            )}
          </g>
        );
      })}

      {/* little celebration sparkles */}
      <g fill="#f8ecd8" opacity=".9" className="cake-sparkles" aria-hidden="true">
        <path d="M62 168c.5 5.5 3.4 8.4 9 9-5.6.6-8.5 3.5-9 9-.5-5.5-3.4-8.4-9-9 5.6-.6 8.5-3.5 9-9Z" />
        <path d="M338 198c.4 4.4 2.7 6.7 7 7.2-4.3.4-6.6 2.7-7 7.1-.4-4.4-2.7-6.7-7-7.1 4.3-.5 6.6-2.8 7-7.2Z" />
        <path d="M332 96c.4 4.4 2.7 6.7 7 7.2-4.3.4-6.6 2.7-7 7.1-.4-4.4-2.7-6.7-7-7.1 4.3-.5 6.6-2.8 7-7.2Z" />
        <path d="M58 246c.4 4.4 2.7 6.7 7 7.2-4.3.4-6.6 2.7-7 7.1-.4-4.4-2.7-6.7-7-7.1 4.3-.5 6.6-2.8 7-7.2Z" />
      </g>
    </svg>
  );
}
