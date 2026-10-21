import { useState } from 'react';
import { ice } from '../content';
import { Tape, TornEdge } from './Ornaments';

function Snowflake({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <path
        d="M30 4v52M7.5 17l45 26M52.5 17l-45 26M30 14l-6-6m6 6 6-6M30 46l-6 6m6-6 6 6M14 26l-8 2m8-2-2-8M46 34l8-2m-8 2 2 8M46 26l8-2m-8 2 2-8M14 34l-8-2m8 2-2 8"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Ice() {
  const [thawed, setThawed] = useState(false);

  return (
    <section className="section section--ice ice" id="wall">
      <TornEdge color="var(--olive)" />
      <div className="ice-flakes" aria-hidden="true">
        <Snowflake className="ice-flake ice-flake--1" />
        <Snowflake className="ice-flake ice-flake--2" />
        <Snowflake className="ice-flake ice-flake--3" />
        <Snowflake className="ice-flake ice-flake--4" />
      </div>

      <div className="container">
        <header className="section-top section-top--ink">
          <p className="kicker">04 — the wall</p>
          <p className="section-top-meta">{ice.reference}</p>
        </header>

        <div className="ice-head">
          <h2 data-reveal>
            <span>{ice.title[0]}</span>
            <em>{ice.title[1]}</em>
          </h2>
          <p className="ice-jp" lang="ja" data-reveal>
            氷の城壁
          </p>
        </div>

        <div className="ice-grid">
          <div className="ice-copy">
            <p className="ice-lede" data-reveal>
              Some of us build winter around the softest parts.
            </p>
            <p className="ice-body" data-reveal>
              {ice.paragraphs[0]}
            </p>

            <div className="ice-meter" data-reveal>
              {ice.meter.map((item) => (
                <span key={item.label}>
                  <em>{item.label}</em>
                  <strong>{item.value}</strong>
                </span>
              ))}
            </div>

            <button
              type="button"
              className={`frost-card${thawed ? ' is-thawed' : ''}`}
              aria-pressed={thawed}
              onClick={() => setThawed((value) => !value)}
            >
              <span className="frost-texture" aria-hidden="true" />
              <span className="frost-hint">
                <Snowflake />
                {thawed ? ice.thawedHint : ice.hint}
              </span>
              <span className="frost-content" aria-hidden={!thawed}>
                <span className="frost-note-label">{ice.hiddenTitle}</span>
                <span className="frost-message">{ice.hidden}</span>
              </span>
              <span className="frost-cue" aria-hidden="true">
                {thawed ? '— the window is open' : 'tap, breathe, wait'}
              </span>
            </button>
          </div>

          <figure className="glacier-card" data-reveal>
            <Tape className="tape--glacier" />
            <div className="glacier-frame">
              <img
                src="/art/glacier.webp"
                alt="A pale watercolor study of a glacier, all ice and dark rock."
                width="1600"
                height="1168"
                loading="lazy"
              />
              <span className="glacier-wash" aria-hidden="true" />
            </div>
            <figcaption>the view from your side</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
