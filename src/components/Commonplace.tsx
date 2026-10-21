import { quotes } from '../content';

export default function Commonplace() {
  return (
    <section className="book-v2" id="book">
      <div className="book-v2-intro">
        <div className="book-v2-topline">
          <p className="kicker">02 — the commonplace book</p>
          <p className="book-v2-meta">three writers · dog-eared &amp; underlined</p>
        </div>

        <div className="book-v2-head">
          <h2>
            Things other people
            <br />
            <em>said better.</em>
          </h2>
          <p className="book-v2-lede">
            Three writers who keep saying what I mean. I have pressed them between these
            pages like flowers — keep them, if they help.
          </p>
        </div>
      </div>

      <div className="book-v2-triptych">
        {quotes.map((quote, index) => (
          <article
            className={`author-panel author-panel--${index + 1}`}
            key={quote.author}
          >
            <img
              className="author-panel-bg"
              src={quote.portrait}
              alt={quote.portraitAlt}
              loading="lazy"
            />
            <div className={`author-panel-wash author-panel-wash--${index + 1}`} aria-hidden="true" />
            <span className="author-panel-ghost" aria-hidden="true">
              {quote.author.split(' ').slice(-1)[0]}
            </span>

            <div className="author-panel-content">
              <div className="author-panel-top">
                <span className="author-panel-index">0{index + 1}</span>
                <span className="author-panel-label">{quote.label}</span>
              </div>

              <div className="author-panel-quote">
                <blockquote>
                  <p>“{quote.text}”</p>
                </blockquote>
                <p className="author-panel-name">
                  {quote.author}
                  <span>{quote.source}</span>
                </p>
                <p className="author-panel-note">
                  <span aria-hidden="true">↳ </span>
                  {quote.note}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
