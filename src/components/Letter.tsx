import { letter, site } from '../content';
import { TornEdge, WaxSeal } from './Ornaments';

export default function Letter() {
  return (
    <section className="letter-v2" id="letter">
      <TornEdge color="var(--rust)" />
      <div className="letter-v2-photo">
        <img
          src="/art/plath-letter.webp"
          alt="Sylvia Plath sitting on a stone ledge, reading."
          width="900"
          height="885"
          loading="lazy"
        />
        <div className="letter-v2-wash" aria-hidden="true" />

        <p className="letter-v2-folio">
          P.S. <span>/ the letter</span>
        </p>

        <blockquote className="letter-v2-photoquote">
          <p>“I am, I am, I am.”</p>
          <cite>
            Sylvia Plath <span>The Bell Jar</span>
          </cite>
        </blockquote>

        <p className="letter-v2-photo-note">
          for the girl who is still here,
          <br />
          still hers, still becoming.
        </p>
      </div>

      <article className="letter-v2-paper">
        <header className="letter-v2-head">
          <p className="kicker">P.S. — the letter</p>
          <p className="letter-v2-meta">the last word · after the cake</p>
        </header>

        <p className="letter-v2-date">on your birthday · {site.year}</p>

        <h2>
          Dear
          <br />
          {letter.greeting.replace('Dear ', '')}
        </h2>

        <div className="letter-v2-body">
          {letter.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 18)}>{paragraph}</p>
          ))}
        </div>

        <p className="letter-v2-closing">{letter.closing}</p>
        <p className="letter-v2-signature">{letter.signature}</p>
        <p className="letter-v2-ps">P.P.S. I hope you saved me a slice of cake.</p>

        <WaxSeal className="letter-v2-seal" />
      </article>
    </section>
  );
}
