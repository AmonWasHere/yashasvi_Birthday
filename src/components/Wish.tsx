import type { CSSProperties } from 'react';
import { useState } from 'react';
import { site, wish } from '../content';
import Cake from './Cake';
import { Spark, Tape, TornEdge, WaxSeal } from './Ornaments';

const petals = [
  { left: 4, delay: 0, duration: 4.2, spin: 280, color: '#f2e4c6' },
  { left: 9, delay: 0.7, duration: 5.1, spin: -220, color: '#c06a3f' },
  { left: 15, delay: 0.3, duration: 4.7, spin: 340, color: '#b6362c' },
  { left: 21, delay: 1.1, duration: 5.6, spin: 180, color: '#f2e4c6' },
  { left: 27, delay: 0.5, duration: 4.4, spin: -300, color: '#d8b36c' },
  { left: 33, delay: 1.5, duration: 5.2, spin: 240, color: '#f2e4c6' },
  { left: 39, delay: 0.2, duration: 4.9, spin: -160, color: '#b6362c' },
  { left: 45, delay: 0.9, duration: 5.8, spin: 320, color: '#f2e4c6' },
  { left: 51, delay: 0.4, duration: 4.6, spin: -260, color: '#d8b36c' },
  { left: 57, delay: 1.3, duration: 5.3, spin: 200, color: '#c06a3f' },
  { left: 63, delay: 0.1, duration: 4.3, spin: -340, color: '#f2e4c6' },
  { left: 69, delay: 0.8, duration: 5.5, spin: 260, color: '#b6362c' },
  { left: 75, delay: 1.6, duration: 4.8, spin: -200, color: '#f2e4c6' },
  { left: 81, delay: 0.6, duration: 5.9, spin: 300, color: '#d8b36c' },
  { left: 87, delay: 1.2, duration: 4.5, spin: -280, color: '#c06a3f' },
  { left: 93, delay: 0.35, duration: 5.4, spin: 220, color: '#f2e4c6' },
  { left: 12, delay: 1.9, duration: 6.1, spin: 380, color: '#e7cfa2' },
  { left: 30, delay: 2.1, duration: 5.7, spin: -360, color: '#f2e4c6' },
  { left: 54, delay: 1.8, duration: 6.3, spin: 280, color: '#b6362c' },
  { left: 72, delay: 2.2, duration: 5.2, spin: -240, color: '#f2e4c6' },
  { left: 90, delay: 2, duration: 6, spin: 320, color: '#d8b36c' },
];

export default function Wish() {
  const [lit, setLit] = useState<boolean[]>([true, true, true, true, true]);
  const allOut = lit.every((value) => !value);

  const toggleCandle = (index: number) => {
    setLit((current) => current.map((value, i) => (i === index ? !value : value)));
  };

  const blowAll = () => setLit([false, false, false, false, false]);
  const relight = () => setLit([true, true, true, true, true]);

  return (
    <section className="section section--rust wish" id="wish">
      <TornEdge color="var(--night)" />

      {allOut && (
        <div className="petals" aria-hidden="true">
          {petals.map((petal, index) => (
            <span
              key={index}
              style={
                {
                  left: `${petal.left}%`,
                  animationDelay: `${petal.delay}s`,
                  animationDuration: `${petal.duration}s`,
                  background: petal.color,
                  '--spin': `${petal.spin}deg`,
                  '--drift': `${(index % 2 === 0 ? 1 : -1) * (20 + (index % 5) * 12)}px`,
                } as CSSProperties
              }
            />
          ))}
        </div>
      )}

      <div className="container">
        <header className="section-top section-top--light">
          <p className="kicker">07 — the wish</p>
          <p className="section-top-meta">the last page (for now)</p>
        </header>

        <div className="wish-head">
          <h2 data-reveal>
            {wish.titleLead} <em>{wish.titleAccent}</em>
          </h2>
          <p className="section-lede" data-reveal>
            {wish.intro}
          </p>
        </div>

        <div className="wish-grid">
          <div className="wish-cake-wrap">
            <Cake lit={lit} onBlow={toggleCandle} />

            <div className="wish-controls">
              {allOut ? (
                <button type="button" className="btn btn--ghost" onClick={relight}>
                  {wish.relight}
                </button>
              ) : (
                <button type="button" className="btn" onClick={blowAll}>
                  <Spark />
                  {wish.blow}
                </button>
              )}
              <p className="wish-hint">
                {allOut ? 'make it a good one' : 'or click each candle, one by one'}
              </p>
            </div>

            <p className={`wish-response${allOut ? ' is-visible' : ''}`} aria-live="polite">
              {allOut ? wish.wished : ''}
            </p>
          </div>

          <article className="wish-letter" data-reveal>
            <Tape className="tape--wish" />
            <p className="wish-letter-kicker">before you blow them out</p>
            <h3>
              Whatever you wish for,
              <br />
              <em>I hope it finds you first.</em>
            </h3>
            <p className="wish-letter-body">{wish.signoff}</p>
            <p className="wish-signature">
              {wish.signature.split(',')[0]},
              <br />
              <span>{wish.signature.split(',')[1]?.trim() ?? site.recipient}</span>
            </p>
            <WaxSeal className="wish-seal" />
            <p className="wish-pS">P.P.S. go eat some cake.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
