import type { CSSProperties } from 'react';
import { quotes } from '../content';
import { Spark, Teacup, TornEdge, Tape } from './Ornaments';

export default function Commonplace() {
  return (
    <section className="section section--rust commonplace" id="book">
      <TornEdge color="var(--paper)" />
      <div className="container">
        <header className="section-top section-top--light">
          <p className="kicker">02 — the commonplace book</p>
          <p className="section-top-meta">dog-eared &amp; underlined</p>
        </header>

        <div className="commonplace-head">
          <h2 data-reveal>
            Things other people
            <br />
            <em>said better.</em>
          </h2>
          <p className="section-lede" data-reveal>
            Three writers who keep saying what I mean. I have pressed them between
            these pages like flowers — keep them, if they help.
          </p>
        </div>

        <div className="quote-grid">
          {quotes.map((quote, index) => (
            <article
              key={quote.author}
              className={`quote-card quote-card--${index + 1}`}
              data-reveal
              style={{ '--delay': `${index * 110}ms` } as CSSProperties}
            >
              <Tape className="tape--quote" />
              <p className="quote-label">{quote.label}</p>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>
                <p>{quote.text}</p>
              </blockquote>
              <p className="quote-author">
                <strong>{quote.author}</strong>
                <span>{quote.source}</span>
              </p>
              <p className="quote-note">
                <span aria-hidden="true">↳ </span>
                {quote.note}
              </p>

              {index === 0 && (
                <img
                  className="quote-moth"
                  src="/art/moth.webp"
                  alt="A vintage natural-history illustration of a moth."
                  width="900"
                  height="1174"
                  loading="lazy"
                />
              )}
              {index === 1 && <Teacup className="quote-cup" />}
              {index === 2 && (
                <img
                  className="quote-celestial"
                  src="/art/celestial.webp"
                  alt=""
                  width="1100"
                  height="866"
                  loading="lazy"
                  aria-hidden="true"
                />
              )}
            </article>
          ))}
        </div>

        <div className="book-footer" data-reveal>
          <p className="book-marginalia">
            lend me the book
            <br />
            that changed you.
          </p>
          <Spark className="book-spark" />
          <p className="book-signoff">
            <span>with a pencil in hand,</span>
            <em>always</em>
          </p>
        </div>
      </div>
    </section>
  );
}
