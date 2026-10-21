import { useId } from 'react';

export function Tape({ className = '' }: { className?: string }) {
  return <span className={`tape ${className}`.trim()} aria-hidden="true" />;
}

export function Sprig({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`sprig ${className}`.trim()}
      viewBox="0 0 140 300"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M74 297C69 250 79 203 68 158S58 73 71 13"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M70 255c-23-2-40-15-46-38 24-1 40 13 46 38Z"
        fill="currentColor"
        fillOpacity=".13"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M72 226c21-3 36-16 41-37-22-1-37 13-41 37Z"
        fill="currentColor"
        fillOpacity=".13"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M70 194c-24-3-41-17-46-41 24 0 41 15 46 41Z"
        fill="currentColor"
        fillOpacity=".13"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M69 162c22-4 37-18 40-40-22 1-36 16-40 40Z"
        fill="currentColor"
        fillOpacity=".13"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M69 128c-20-4-34-17-38-37 20 1 34 15 38 37Z"
        fill="currentColor"
        fillOpacity=".13"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M71 98c18-4 30-15 34-33-19 1-31 13-34 33Z"
        fill="currentColor"
        fillOpacity=".13"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M70 66c-13-4-21-13-23-27 13 1 21 11 23 27Z"
        fill="currentColor"
        fillOpacity=".13"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M71 14c-4 9-3 16 1 21 4-7 4-14-1-21Z"
        fill="currentColor"
        fillOpacity=".25"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function Spark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 2c0 11 7 18 18 18-11 0-18 7-18 18 0-11-7-18-18-18C13 20 20 13 20 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 72" fill="none" aria-hidden="true">
      <path
        d="M25 4c-8 14-6 30 4 42 6 7 8 14 5 21"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="m27 57 7 10 6-11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Teacup({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 100" fill="none" aria-hidden="true">
      <path
        d="M22 36h66v22c0 17-14 30-33 30S22 75 22 58V36Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M88 43c14-4 24 4 24 15 0 12-10 20-25 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M16 91h78" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M44 23c-6-7 5-10 0-17M61 25c-6-7 5-10 0-17M78 23c-6-7 5-10 0-17"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity=".65"
      />
    </svg>
  );
}

export function StarStamp({ className = '' }: { className?: string }) {
  const id = useId().replace(/[:]/g, '');
  return (
    <svg
      className={`star-stamp ${className}`.trim()}
      viewBox="0 0 132 132"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <path id={`${id}-arc`} d="M18 68a48 48 0 0 1 96 0" />
      </defs>
      <circle cx="66" cy="66" r="62" stroke="currentColor" strokeWidth="1.3" />
      <circle
        cx="66"
        cy="66"
        r="54"
        stroke="currentColor"
        strokeWidth=".8"
        strokeDasharray="1.5 4"
      />
      <text
        fill="currentColor"
        fontFamily="Oswald, sans-serif"
        fontSize="9.6"
        fontWeight="500"
        letterSpacing="3.1"
      >
        <textPath href={`#${id}-arc`} startOffset="50%" textAnchor="middle">
          HAPPY BIRTHDAY
        </textPath>
      </text>
      <path
        d="M66 46c.8 8.5 5.4 13.2 14 14-8.6.8-13.2 5.5-14 14-.8-8.5-5.4-13.2-14-14 8.6-.8 13.2-5.5 14-14Z"
        fill="currentColor"
      />
      <text
        x="66"
        y="91"
        fill="currentColor"
        textAnchor="middle"
        fontFamily="Oswald, sans-serif"
        fontSize="8"
        letterSpacing="2.4"
      >
        FOR MY FRIEND
      </text>
    </svg>
  );
}

export function WaxSeal({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`wax-seal ${className}`.trim()}
      viewBox="0 0 90 90"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M45 4c6 0 7 7 13 9s12-3 16 4c4 6-2 10 0 16s9 8 7 15c-2 6-9 6-12 12s0 12-7 15c-6 3-9-3-16-2s-9 8-16 6c-6-2-6-9-12-13S6 62 5 55c-1-7 6-9 8-15s-3-12 2-17c5-4 9 2 16 1s9-8 14-20Z"
        fill="currentColor"
      />
      <circle cx="45" cy="43" r="24" fill="none" stroke="#f2e4c6" strokeWidth="1.1" />
      <text
        x="45"
        y="53"
        fill="#f2e4c6"
        textAnchor="middle"
        fontFamily="'Bodoni Moda', serif"
        fontSize="27"
        fontStyle="italic"
      >
        Y
      </text>
    </svg>
  );
}

export function SafetyPin({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 160" fill="none" aria-hidden="true">
      <path
        d="M31 14h18a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10H39a10 10 0 0 1-10-10V27"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M29 28V18a8 8 0 0 1 16 0v120"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="45" cy="28" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function TornEdge({
  color = 'var(--rust)',
  flip = false,
}: {
  color?: string;
  flip?: boolean;
}) {
  return (
    <div className={`torn-edge${flip ? ' torn-edge--flip' : ''}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 54"
        preserveAspectRatio="none"
        style={{ color, transform: flip ? 'scaleY(-1)' : undefined }}
      >
        <path
          fill="currentColor"
          d="M0 0h1440v22l-38 7-33-5-42 13-28-4-37 11-45-8-32 10-38-12-41 6-27-12-36 10-42-6-38 13-37-7-41 14-34-9-42 10-35-13-38 5-42-8-37 12-39-6-42 13-33-9-40 8-34-14-36 7-41-5-33 13-38-8-39 11-33-9-39 5-38-12-33 8-36-6-36 10-32-5-35 8-32-14-34 6-30-4-33 11-29-6-31 7-28-9-31 4-29-8-28 6-27-5-24 8-27-6-25 4-22-7-24 5-22-4-21 7-22-4-20 3-18-5-18 3-14-4L0 26V0Z"
        />
      </svg>
    </div>
  );
}
