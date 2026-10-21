import type { CSSProperties } from 'react';
import { letter, site } from '../content';
import { Spark, TornEdge, WaxSeal } from './Ornaments';

export default function Letter() {
  return (
    <section className="section section--paper letter" id="letter">
      <TornEdge color="var(--rust)" />
      <div className="container">
        <header className="section-top">
          <p className="kicker">01 — the letter</p>
          <p className="section-top-meta">from my desk to yours · no. 01</p>
        </header>

        <div className="letter-grid">
          <article className="letter-sheet" data-reveal>
            <WaxSeal className="letter-seal" />
            <p className="letter-date">on your birthday · {site.year}</p>
            <h2 className="letter-greeting">{letter.greeting}</h2>
            <div className="letter-body">
              {letter.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>
            <p className="letter-closing">{letter.closing}</p>
            <p className="letter-signature">{letter.signature}</p>
            <p className="letter-ps">
              P.S. there is cake at the end. scroll responsibly.
            </p>
          </article>

          <aside className="letter-aside">
            <div className="envelope" data-reveal style={{ '--delay': '120ms' } as CSSProperties}>
              <div className="envelope-inner">
                <div className="envelope-top">
                  <div className="postmark" aria-hidden="true">
                    <span>{letter.envelope.postmark[0]}</span>
                    <strong>{letter.envelope.postmark[1]}</strong>
                    <span>{letter.envelope.postmark[2]}</span>
                  </div>
                  <div className="stamp" aria-hidden="true">
                    <Spark />
                    <span>love</span>
                  </div>
                </div>
                <p className="envelope-to">to</p>
                <p className="envelope-address">
                  {letter.envelope.to[0]}
                  <br />
                  {letter.envelope.to[1]}
                </p>
                <p className="envelope-from">from: {letter.envelope.from}</p>
              </div>
            </div>

            <figure
              className="postcard"
              data-reveal
              style={{ '--delay': '220ms' } as CSSProperties}
            >
              <img
                src="/art/theatre.webp"
                alt="An 18th-century engraving of the packed auditorium of Covent Garden Theatre."
                width="600"
                height="308"
                loading="lazy"
              />
              <figcaption>
                <span>wish you were here</span>
                <em>but you’re the whole occasion</em>
              </figcaption>
            </figure>

            <p className="hand-note letter-hand" data-reveal>
              I re-read your favourite book last week.
              <br />
              You were in every margin.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
