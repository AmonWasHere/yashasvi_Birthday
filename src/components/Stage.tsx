import type { CSSProperties } from 'react';
import { useState } from 'react';
import { stage as stageContent } from '../content';
import { Spark, Tape } from './Ornaments';

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
    <section className={`stage-v2${lit ? ' is-lit' : ''}`} id="stage">
      <div className="stage-v2-bg" aria-hidden="true">
        <img
          src="/art/alien-stage.webp"
          alt=""
          width="1200"
          height="674"
          loading="lazy"
        />
      </div>
      <div className="stage-v2-wash" aria-hidden="true" />

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

      <p className="stage-v2-side" aria-hidden="true">
        alien stage <i>·</i> round ∞ <i>·</i> live
      </p>

      <div className="stage-v2-inner">
        <header className="stage-v2-head">
          <p className="kicker">04 — the stage</p>
          <div className="stage-v2-head-right">
            <p className="stage-v2-meta">{stageContent.reference}</p>
            <p className="stage-v2-tagline">{stageContent.tagline}</p>
          </div>
        </header>

        <div className="stage-v2-title">
          <p className="stage-v2-round">{stageContent.round}</p>
          <h2>
            {stageContent.titleLead} <em>{stageContent.titleAccent}</em>
          </h2>
        </div>

        <div className="stage-v2-bottom">
          <div className="stage-v2-copy">
            {stageContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 18)}>{paragraph}</p>
            ))}

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

            <p className="stage-v2-front-row hand">{stageContent.frontRow}</p>
          </div>

          <div className="stage-v2-setlist">
            <Tape className="tape--setlist-v2" />
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
        </div>
      </div>

      <figure className="sticker sticker--alnst stage-v2-sticker">
        <img
          src="/art/sticker-alnst.webp"
          alt="A die-cut sticker of Sua from Alien Stage."
          width="560"
          height="560"
          loading="lazy"
        />
        <figcaption>ALNST</figcaption>
      </figure>
    </section>
  );
}
