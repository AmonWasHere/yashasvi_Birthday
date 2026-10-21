import { letter, site } from '../content';
import { WaxSeal } from './Ornaments';

export default function Letter() {
  return (
    <section className="letter-v2" id="letter">
      <div className="letter-v2-photo">
        <img
          src="/art/plath.webp"
          alt="Sylvia Plath, smiling and holding a flower."
          width="720"
          height="900"
          loading="lazy"
        />
        <div className="letter-v2-wash" aria-hidden="true" />

        <p className="letter-v2-folio">
          01 <span>/ the letter</span>
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
          <p className="kicker">01 — the letter</p>
          <p className="letter-v2-meta">from my desk to yours · no. 01</p>
        </header>

        <p className="letter-v2-date">on your birthday · {site.year}</p>

        <h2>{letter.greeting}</h2>

        <div className="letter-v2-body">
          {letter.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 18)}>{paragraph}</p>
          ))}
        </div>

        <p className="letter-v2-closing">{letter.closing}</p>
        <p className="letter-v2-signature">{letter.signature}</p>
        <p className="letter-v2-ps">P.S. there is cake at the end. scroll responsibly.</p>

        <WaxSeal className="letter-v2-seal" />
      </article>
    </section>
  );
}
