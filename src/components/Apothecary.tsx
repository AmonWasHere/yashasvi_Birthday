import { apothecary } from '../content';
import { Spark } from './Ornaments';

function Bottle({
  label,
  amount,
  index,
}: {
  label: string;
  amount: string;
  index: number;
}) {
  const liquid = ['#b4a06a', '#8f9c72', '#a85a3a', '#6f7f85'][index % 4];
  return (
    <li className="bottle">
      <svg viewBox="0 0 64 110" fill="none" aria-hidden="true">
        <path
          d="M25 6h14v16l9 12v66a5 5 0 0 1-5 5H21a5 5 0 0 1-5-5V34l9-12V6Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="21"
          y="54"
          width="22"
          height="42"
          rx="2"
          fill={liquid}
          fillOpacity=".42"
        />
        <path
          d="M24 1h16v8H24zM23 66h18M23 74h18M23 82h13"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path d="M30 28c4 5 4 9 0 13" stroke="currentColor" strokeWidth="1" opacity=".4" />
      </svg>
      <span className="bottle-label">{label}</span>
      <span className="bottle-amount">{amount}</span>
    </li>
  );
}

export default function Apothecary() {
  return (
    <section className="apo-v2" id="garden">
      <div className="apo-v2-bg">
        <img
          src="/art/maomao-bg.webp"
          alt="Mao Mao, the apothecary, in a green robe with a fan."
          width="1200"
          height="2133"
          loading="lazy"
        />
      </div>
      <div className="apo-v2-fade" aria-hidden="true" />

      <div className="apo-v2-inner">
        <header className="apo-v2-head">
          <p className="kicker">02 — the apothecary</p>
          <p className="apo-v2-meta">{apothecary.reference}</p>
        </header>

        <div className="apo-v2-copy">
          <h2>
            <span>Mao Mao’s</span>
            <em>garden.</em>
          </h2>

          <div className="apo-v2-body">
            {apothecary.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 18)}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="apo-v2-note">
            <p>“{apothecary.note}”</p>
            <cite>{apothecary.noteAttribution}</cite>
          </blockquote>

          <div className="apo-v2-shelf">
            <ul className="shelf" aria-label="Apothecary bottles">
              {apothecary.bottles.map((bottle, index) => (
                <Bottle
                  key={bottle.label}
                  label={bottle.label}
                  amount={bottle.amount}
                  index={index}
                />
              ))}
            </ul>
            <div className="shelf-edge" aria-hidden="true" />
            <p className="shelf-caption">the birthday cabinet · take what you need</p>
          </div>
        </div>

        <span className="apo-v2-seal" aria-hidden="true">
          {apothecary.seal}
        </span>


        <div className="rx-card apo-v2-rx">
          <div className="rx-head">
            <span className="rx-symbol">Rx</span>
            <span className="rx-title">
              prescription
              <small>no. 0026</small>
            </span>
            <Spark className="rx-spark" />
          </div>
          <p className="rx-for">{apothecary.rx.forLine}</p>
          <p className="rx-body">{apothecary.rx.body}</p>
          <p className="rx-directions">{apothecary.rx.directions}</p>
          <div className="rx-foot">
            <span>{apothecary.rx.sig}</span>
            <span className="rx-sign">the apothecary</span>
          </div>
        </div>

        <figure className="sticker sticker--mao apo-v2-sticker">
          <img
            src="/art/sticker-maomao.webp"
            alt="A die-cut sticker of Mao Mao from The Apothecary Diaries."
            width="560"
            height="560"
            loading="lazy"
          />
          <figcaption>Mao Mao</figcaption>
        </figure>
      </div>
    </section>
  );
}
