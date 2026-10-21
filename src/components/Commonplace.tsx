import { quotes } from '../content';
import { Spark, Tape, TornEdge } from './Ornaments';

export default function Commonplace() {
  return (
    <section className="book-v3" id="book">
      <TornEdge color="var(--cream)" />

      <div className="book-v3-inner">
        <article className="book-v3-sheet">
          <Tape className="book-v3-tape" />

          <header className="book-v3-head">
            <p className="kicker">01 — the commonplace book</p>
            <p className="book-v3-meta">three writers · dog-eared &amp; underlined</p>
          </header>

          <div className="book-v3-title">
            <h2>
              Things other people
              <br />
              <em>said better.</em>
            </h2>
            <p className="book-v3-lede">
              Three writers who keep saying what I mean. I have pressed them between these
              pages like flowers — keep them, if they help.
            </p>
          </div>

          <div className="book-v3-entries">
            {quotes.map((quote, index) => (
              <article
                className={`book-v3-entry book-v3-entry--${index + 1}`}
                key={quote.author}
              >
                <figure className="book-v3-photo">
                  <Tape className="book-v3-photo-tape" />
                  <img
                    src={quote.portrait}
                    alt={quote.portraitAlt}
                    width="720"
                    height="900"
                    loading="lazy"
                  />
                  <figcaption>{quote.author}</figcaption>
                </figure>

                <div className="book-v3-quote">
                  <span className="book-v3-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <blockquote>
                    <p>“{quote.text}”</p>
                  </blockquote>
                  <p className="book-v3-author">
                    {quote.author}
                    <span>{quote.source}</span>
                  </p>
                  <p className="book-v3-note">
                    <span aria-hidden="true">↳ </span>
                    {quote.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <footer className="book-v3-foot">
            <div className="book-v3-card">
              <p>THE BORROWER’S CARD</p>
              <div className="book-v3-stamps">
                <span>14 MAR</span>
                <span>02 JUN</span>
                <span>21 OCT</span>
              </div>
              <small>return by the last page</small>
            </div>

            <p className="book-v3-marginalia">
              lend me the book
              <br />
              that changed you.
            </p>

            <Spark className="book-v3-spark" />
          </footer>

          <p className="book-v3-folio">commonplace book · page 01</p>
        </article>
      </div>
    </section>
  );
}
