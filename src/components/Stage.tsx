import type { CSSProperties } from 'react';
import { useState } from 'react';
import { stage as stageContent } from '../content';
import { Spark, Tape, TornEdge } from './Ornaments';

const stars = [
  [8, 18, 2],
  [16, 64, 1.4],
  [23, 32, 2.4],
  [31, 78, 1.2],
  [39, 12, 1.8],
  [47, 52, 2.6],
  [55, 24, 1.5],
  [63, 86, 2],
  [70, 40, 1.3],
  [77, 14, 2.2],
  [84, 68, 1.6],
  [91, 30, 2.4],
  [95, 76, 1.3],
  [12, 88, 1.8],
  [67, 6, 1.4],
  [44, 90, 2.1],
];

export default function Stage() {
  const [lit, setLit] = useState(false);

  return (
    <section className={`section section--night stage${lit ? ' is-lit' : ''}`} id="stage">
      <TornEdge color="var(--news)" />

      <div className="stage-sky" aria-hidden="true">
        {stars.map(([left, top, size], index) => (
          <span
            key={`${left}-${top}`}
            style={
              {
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${index * 0.35}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="stage-beams" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <p className="stage-side" aria-hidden="true">
        alien stage <i>·</i> round ∞ <i>·</i> live
      </p>

      <div className="container">
        <header className="section-top section-top--light">
          <p className="kicker">06 — the stage</p>
          <p className="section-top-meta">{stageContent.reference}</p>
        </header>

        <div className="stage-head">
          <p className="stage-round" data-reveal>
            {stageContent.round}
          </p>
          <h2 data-reveal>
            {stageContent.titleLead} <em>{stageContent.titleAccent}</em>
          </h2>
          <p className="stage-ref" data-reveal>
            {stageContent.tagline}
          </p>
        </div>

        <div className="stage-grid">
          <div className="stage-copy">
            <div data-reveal>
              {stageContent.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 18)}>{paragraph}</p>
              ))}
            </div>

            <button
              type="button"
              className="stage-button"
              aria-pressed={lit}
              onClick={() => setLit((value) => !value)}
            >
              <span className="stage-button-dot" aria-hidden="true" />
              {lit ? stageContent.ctaOn : stageContent.cta}
              <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path
                  d="M20 4c-5 0-8 3-8 8v10c0 5 3 8 8 8s8-3 8-8V12c0-5-3-8-8-8Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M8 22c0 8 5 13 12 13s12-5 12-13M20 35v5M14 40h12"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <p className="stage-lit-line" aria-live="polite">
              {lit ? stageContent.litLine : ''}
            </p>

            <p className="stage-front-row hand">{stageContent.frontRow}</p>
          </div>

          <div className="stage-art">
            <img
              className="clematis-art"
              src="/art/clematis-moon.webp"
              alt=""
              width="1400"
              height="1033"
              loading="lazy"
              aria-hidden="true"
              data-reveal
            />

            <figure className="stage-photo" data-reveal>
              <Tape className="tape--stage" />
              <img
                src="/art/alien-stage.webp"
                alt="The cast of Alien Stage — Mizi, Sua, Ivan, Till, Luka and Hyuna — smiling together."
                width="1200"
                height="674"
                loading="lazy"
              />
              <figcaption>the whole cast, one more round</figcaption>
            </figure>

            <div
              className="stage-setlist"
              data-reveal
              style={{ '--delay': '180ms' } as CSSProperties}
            >
              <Tape className="tape--setlist" />
              <p className="stage-setlist-title">
                {stageContent.setlist.title} <span>no. 06</span>
              </p>
              <ol>
                {stageContent.setlist.tracks.map((track, index) => (
                  <li key={track}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {track}
                  </li>
                ))}
              </ol>
              <p className="stage-setlist-note">
                <Spark /> all encores belong to you
              </p>
            </div>

            <span className="stage-front" aria-hidden="true">
              front row
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
