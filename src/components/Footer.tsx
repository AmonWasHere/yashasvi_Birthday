import { site } from '../content';
import { Spark, Tape, TornEdge } from './Ornaments';

export default function Footer() {
  return (
    <footer className="footer">
      <TornEdge color="var(--paper-3)" />
      <div className="footer-ghost" aria-hidden="true" />
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="footer-kicker">
              <Spark /> fin. or: see you at dinner
            </p>
            <p className="footer-big">
              Happy birthday,
              <br />
              <em>{site.recipient}.</em>
            </p>
          </div>
          <a className="footer-top-link" href="#top">
            back to the top <span aria-hidden="true">↑</span>
          </a>
        </div>

        <div className="footer-rule" aria-hidden="true">
          <Tape />
        </div>

        <div className="footer-bottom">
          <p>
            made with love, tape, and a little bit of chaos
            <span> · {site.year}</span>
          </p>
          <p className="footer-note">for my friend, my chosen family</p>

          <details className="credits">
            <summary>art, references &amp; a note on copyright</summary>
            <div className="credits-body">
              <p>
                Public-domain and open-access art via The Metropolitan Museum of Art and
                Wikimedia Commons: Edgar Degas, <i>Portrait of a Young Woman</i> (ca.
                1885); Mary Delany, <i>Botanical Study</i> (ca. 1772–82); John Singer
                Sargent, <i>Glacier</i> (ca. 1908–9); and <i>Plant-Forms Ornamentally
                Treated — Strawberry</i> (Boston Public Library).
              </p>
              <p>
                Author portraits of Sylvia Plath, Jane Austen and Fyodor Dostoevsky, and
                character/manga images from <i>The Apothecary Diaries</i>, <i>Nana</i> and
                <i>Alien Stage</i>, are included for a private,
                non-commercial fan project. They remain © their respective creators,
                photographers and publishers, and are not licensed for redistribution.
              </p>
              <p>
                Made as a fan gift, with love, for the worlds and characters of <i>The
                Apothecary Diaries</i>, <i>Nana</i>, and <i>Alien Stage</i>. Not affiliated
                with or endorsed by their creators. Quotes from
                Sylvia Plath, Jane Austen, and Fyodor Dostoevsky are included for personal,
                non-commercial use with attribution.
              </p>
              <p className="credits-fonts">
                Set in Bodoni Moda, Caveat, Cormorant Garamond, Oswald &amp; Special Elite.
              </p>
            </div>
          </details>
        </div>
      </div>
    </footer>
  );
}
