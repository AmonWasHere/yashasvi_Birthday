import type { CSSProperties } from 'react';
import { nana } from '../content';
import { SafetyPin, Spark, Tape, TornEdge } from './Ornaments';

export default function Nana() {
  return (
    <section className="section section--news nana" id="zine">
      <TornEdge color="var(--ice)" />
      <div className="zine-halftone" aria-hidden="true" />
      <div className="zine-stamp" aria-hidden="true">
        707
      </div>

      <div className="container">
        <header className="section-top section-top--ink">
          <p className="kicker">05 — the zine</p>
          <p className="section-top-meta">{nana.reference}</p>
        </header>

        <div className="nana-head">
          <h2 className="ransom" data-reveal aria-label={nana.title}>
            {nana.title.split('').map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className={`ransom-letter ransom-letter--${(index % 4) + 1}`}
                aria-hidden="true"
              >
                {letter}
              </span>
            ))}
          </h2>
          <p className="nana-sticker" data-reveal>
            <Spark />
            {nana.punkNote}
          </p>
          <p className="nana-sub" data-reveal>
            {nana.sublineLead}
            <br />
            <em>{nana.sublineAccent}</em>
          </p>
        </div>

        <div className="zine-grid">
          <div className="zine-copy">
            <div data-reveal>
              {nana.paragraphs.map((paragraph) => (
                <p className="zine-paragraph" key={paragraph.slice(0, 18)}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rules-card" data-reveal>
              <Tape className="tape--rules" />
              <p className="rules-title">house rules</p>
              <ul>
                {nana.rules.map((rule) => (
                  <li key={rule}>
                    <span className="rule-check" aria-hidden="true" />
                    {rule}
                  </li>
                ))}
              </ul>
              <p className="rules-note">no exceptions. especially not for birthdays.</p>
            </div>

            <div className="nana-ticket" data-reveal>
              <div className="ticket-stub">
                <span>{nana.ticket.line}</span>
                <strong>2</strong>
              </div>
              <div className="ticket-body">
                <p>{nana.ticket.top}</p>
                <span>{nana.ticket.bottom}</span>
                <i>row 707 · seats us</i>
              </div>
            </div>
          </div>

          <div className="zine-art">
            <figure className="strawberry-card" data-reveal>
              <Tape className="tape--strawberry" />
              <figcaption>{nana.strawberryNote}</figcaption>
              <img
                src="/art/strawberry.webp"
                alt="A vintage botanical illustration of a strawberry plant, printed in red ink."
                width="853"
                height="1200"
                loading="lazy"
              />
            </figure>

            <figure
              className="nana-photo"
              data-reveal
              style={{ '--delay': '140ms' } as CSSProperties}
            >
              <Tape className="tape--nana" />
              <img
                src="/art/nana.webp"
                alt="Nana Osaki and Nana Komatsu sharing a strawberry."
                width="1000"
                height="563"
                loading="lazy"
              />
              <figcaption>the other Nana</figcaption>
            </figure>

            <figure
              className="nana-cover"
              data-reveal
              style={{ '--delay': '190ms' } as CSSProperties}
            >
              <Tape className="tape--nana-cover" />
              <img
                src="/art/nana-cover.webp"
                alt="Nana Osaki on the cover of the Nana 25th anniversary edition, volume 2."
                width="600"
                height="857"
                loading="lazy"
              />
              <figcaption>the original, vol. 02</figcaption>
            </figure>

            <div
              className="setlist-card"
              data-reveal
              style={{ '--delay': '220ms' } as CSSProperties}
            >
              <p className="setlist-title">
                {nana.setlist.title} <span>{nana.setlist.side}</span>
              </p>
              <ol>
                {nana.setlist.tracks.map((track, index) => (
                  <li key={track}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {track}
                  </li>
                ))}
              </ol>
              <p className="setlist-note">play it loud enough to annoy the neighbours</p>
            </div>

            <SafetyPin className="nana-pin" />
            <div className="nana-key" aria-hidden="true">
              <span>{nana.keyTag}</span>
              <small>apartment</small>
            </div>
          </div>
        </div>

        <div className="zine-strip" data-reveal>
          <span className="name-tag">osaki</span>
          <span className="name-tag name-tag--alt">komatsu</span>
          <p className="strip-quote">
            “Hey Nana…”
            <span>— every chapter, basically</span>
          </p>
          <p className="strip-note">
            which one are you today?
            <br />
            <em>both is allowed.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
