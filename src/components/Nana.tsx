import { nana } from '../content';
import { SafetyPin, Spark, Tape, TornEdge } from './Ornaments';

export default function Nana() {
  return (
    <section className="nana-v2" id="zine">
      <TornEdge color="var(--olive)" />
      <div className="nana-v2-paper">
        <header className="nana-v2-head">
          <p className="kicker">03 — the zine</p>
          <p className="nana-v2-meta">{nana.reference}</p>
        </header>

        <div className="nana-v2-title-wrap">
          <h2 className="ransom nana-v2-ransom" aria-label={nana.title}>
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
          <p className="nana-sticker nana-v2-sticker">
            <Spark />
            {nana.punkNote}
          </p>
        </div>

        <p className="nana-sub nana-v2-sub">
          {nana.sublineLead}
          <br />
          <em>{nana.sublineAccent}</em>
        </p>

        <div className="nana-v2-copy">
          {nana.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 18)}>{paragraph}</p>
          ))}
        </div>

        <div className="rules-card nana-v2-rules">
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

        <div className="nana-ticket nana-v2-ticket">
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

        <p className="nana-v2-tagline">
          “Hey Nana…”
          <span>— every chapter, basically</span>
        </p>
      </div>

      <div className="nana-v2-photo">
        <img
          className="nana-v2-photo-bg"
          src="/art/nana-photo.webp"
          alt="A halftone print of Nana Osaki and Nana Komatsu on a Nana manga cover."
          width="700"
          height="1094"
          loading="lazy"
        />
        <div className="nana-v2-photo-wash" aria-hidden="true" />
        <span className="nana-v2-photo-label">the other Nana</span>

        <figure className="sticker sticker--nana nana-v2-photo-sticker">
          <img
            src="/art/sticker-nana.webp"
            alt="A die-cut sticker of Nana Osaki from Nana."
            width="560"
            height="560"
            loading="lazy"
          />
          <figcaption>Nana</figcaption>
        </figure>
        <span className="nana-v2-halftone" aria-hidden="true" />

        <span className="nana-v2-big-stamp" aria-hidden="true">
          707
        </span>

        <figure className="nana-v2-strawberry">
          <Tape className="tape--strawberry-v2" />
          <img
            src="/art/strawberry.webp"
            alt="A vintage botanical illustration of a strawberry plant, printed in red ink."
            width="853"
            height="1200"
            loading="lazy"
          />
          <figcaption>split two ways</figcaption>
        </figure>

        <figure className="nana-v2-cover">
          <Tape className="tape--nana-cover-v2" />
          <img
            src="/art/nana-cover.webp"
            alt="Nana Osaki on the Nana 25th-anniversary edition cover, volume 1."
            width="600"
            height="857"
            loading="lazy"
          />
          <figcaption>the original, vol. 01</figcaption>
        </figure>

        <div className="setlist-card nana-v2-setlist">
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

        <SafetyPin className="nana-pin nana-v2-pin" />
        <div className="nana-key nana-v2-key" aria-hidden="true">
          <span>{nana.keyTag}</span>
          <small>apartment</small>
        </div>
      </div>
    </section>
  );
}
