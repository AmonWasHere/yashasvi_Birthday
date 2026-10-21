import type { CSSProperties } from 'react';
import { apothecary } from '../content';
import { Spark, Tape, TornEdge } from './Ornaments';

function Bottle({
  label,
  amount,
  index,
}: {
  label: string;
  amount: string;
  index: number;
}) {
  const liquid = ['#b4a06a', '#8f9c72', '#a85a3a', '#6f7f85'][index % 4];
  return (
    <li className="bottle">
      <svg viewBox="0 0 64 110" fill="none" aria-hidden="true">
        <path
          d="M25 6h14v16l9 12v66a5 5 0 0 1-5 5H21a5 5 0 0 1-5-5V34l9-12V6Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="21"
          y="54"
          width="22"
          height="42"
          rx="2"
          fill={liquid}
          fillOpacity=".42"
        />
        <path
          d="M24 1h16v8H24zM23 66h18M23 74h18M23 82h13"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path d="M30 28c4 5 4 9 0 13" stroke="currentColor" strokeWidth="1" opacity=".4" />
      </svg>
      <span className="bottle-label">{label}</span>
      <span className="bottle-amount">{amount}</span>
    </li>
  );
}

export default function Apothecary() {
  return (
    <section className="section section--olive apothecary" id="garden">
      <TornEdge color="var(--rust)" />
      <div className="container">
        <header className="section-top section-top--light">
          <p className="kicker">03 — the apothecary</p>
          <p className="section-top-meta">{apothecary.reference}</p>
        </header>

        <div className="apo-grid">
          <div className="apo-copy">
            <h2 data-reveal>
              {apothecary.titleLead}
              <br />
              <em>{apothecary.titleAccent}</em>
            </h2>

            <div className="apo-body" data-reveal>
              {apothecary.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 18)}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="apo-note" data-reveal>
              <p>“{apothecary.note}”</p>
              <cite>{apothecary.noteAttribution}</cite>
            </blockquote>

            <div className="shelf-wrap" data-reveal>
              <ul className="shelf" aria-label="Apothecary bottles">
                {apothecary.bottles.map((bottle, index) => (
                  <Bottle
                    key={bottle.label}
                    label={bottle.label}
                    amount={bottle.amount}
                    index={index}
                  />
                ))}
              </ul>
              <div className="shelf-edge" aria-hidden="true" />
              <p className="shelf-caption">the birthday cabinet · take what you need</p>
            </div>
          </div>

          <div className="apo-visual">
            <figure className="court-card" data-reveal>
              <Tape className="tape--court" />
              <img
                src="/art/court.webp"
                alt="A vintage Japanese woodblock print of two court ladies examining fabric together."
                width="1100"
                height="1224"
                loading="lazy"
              />
              <figcaption>the sharpest girl in the room</figcaption>
            </figure>

            <figure
              className="pressed-card"
              data-reveal
              style={{ '--delay': '160ms' } as CSSProperties}
            >
              <Tape className="tape--pressed" />
              <img
                src="/art/pressed.webp"
                alt="Pressed arctic poppies on an old herbarium sheet."
                width="931"
                height="1400"
                loading="lazy"
              />
              <figcaption>pressed from a good day</figcaption>
            </figure>

            <div
              className="rx-card"
              data-reveal
              style={{ '--delay': '240ms' } as CSSProperties}
            >
              <div className="rx-head">
                <span className="rx-symbol">Rx</span>
                <span className="rx-title">
                  prescription
                  <small>no. 0026</small>
                </span>
                <Spark className="rx-spark" />
              </div>
              <p className="rx-for">{apothecary.rx.forLine}</p>
              <p className="rx-body">{apothecary.rx.body}</p>
              <p className="rx-directions">{apothecary.rx.directions}</p>
              <div className="rx-foot">
                <span>{apothecary.rx.sig}</span>
                <span className="rx-sign">the apothecary</span>
              </div>
            </div>

            <span className="apo-seal" aria-hidden="true">
              {apothecary.seal}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
