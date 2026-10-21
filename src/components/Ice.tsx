import { useState } from 'react';
import { ice } from '../content';
import { TornEdge } from './Ornaments';

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
    <section className="ice-v2" id="wall">
      <TornEdge color="var(--olive)" />

      <div className="ice-v2-bg" aria-hidden="true">
        <img src="/art/glacier.webp" alt="" width="1600" height="1168" loading="lazy" />
      </div>
      <div className="ice-v2-wash" aria-hidden="true" />

      <div className="ice-v2-inner">
        <header className="ice-v2-head">
          <p className="kicker">03 — the wall</p>
          <p className="ice-v2-meta">{ice.reference}</p>
        </header>

        <div className="ice-v2-title">
          <h2>
            <span>{ice.title[0]}</span>
            <em>{ice.title[1]}</em>
          </h2>
        </div>

        <div className="ice-v2-grid">
          <div className="ice-v2-copy">
            <p className="ice-v2-lede">
              Some of us build winter around the softest parts.
            </p>
            <p className="ice-v2-body">{ice.paragraphs[0]}</p>

            <div className="ice-v2-meter">
              {ice.meter.map((item) => (
                <span key={item.label}>
                  <em>{item.label}</em>
                  <strong>{item.value}</strong>
                </span>
              ))}
            </div>
          </div>

          <div className="ice-v2-frost">
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
        </div>
      </div>
    </section>
  );
}
