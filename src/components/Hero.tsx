import { quotes, site } from '../content';
import { ArrowDoodle, Spark } from './Ornaments';

const tiles = [
  { src: '/art/plath.webp', tint: '#b46b43', pos: 'center 24%' },
  { src: '/art/maomao.webp', tint: '#525d35', pos: 'center 18%' },
  { src: '/art/nana.webp', tint: '#8f302a', pos: 'center 32%' },
  { src: '/art/alien-stage-hero.webp', tint: '#3d6f6d', pos: 'center 32%' },
  { src: '/art/austen.webp', tint: '#a98a5d', pos: 'center 28%' },
  { src: '/art/dostoevsky.webp', tint: '#4b2d22', pos: 'center 24%' },
];

export default function Hero() {
  const plath = quotes[0];

  return (
    <section className="hero-v2" id="top">
      <div className="hero-v2-mosaic" aria-hidden="true">
        {tiles.map((tile, index) => (
          <div className="hero-v2-tile" key={tile.src}>
            <img
              src={tile.src}
              alt=""
              style={{ objectPosition: tile.pos }}
              loading={index < 2 ? 'eager' : 'lazy'}
            />
            <span className="hero-v2-tint" style={{ background: tile.tint }} />
          </div>
        ))}
        <div className="hero-v2-wash" />
      </div>

      <p className="hero-v2-side" aria-hidden="true">
        a birthday scrapbook <i>·</i> vol. 01 <i>·</i> for my friend
      </p>

      <div className="hero-v2-inner">
        <header className="hero-v2-head">
          <p className="hero-v2-overline">
            <Spark /> For {site.relationship}
          </p>
        </header>

        <h1 className="hero-v2-title">
          <span className="sr-only">Happy birthday, {site.recipient}</span>
          <span className="hero-v2-happy" aria-hidden="true">
            Happy
          </span>
          <span className="hero-v2-birthday" aria-hidden="true">
            Birthday,
          </span>
          <em className="hero-v2-name" aria-hidden="true">
            {site.recipient}.
          </em>
        </h1>

        <div className="hero-v2-foot">
          <p className="hero-v2-intro">
            Poets, an apothecary, a wall of ice, two girls named Nana, and one stage
            where nobody sings quietly.
            <span>Seven small chapters for you.</span>
          </p>

          <blockquote className="hero-v2-quote">
            <p>“{plath.text}”</p>
            <cite>
              {plath.author} <span>{plath.source}</span>
            </cite>
          </blockquote>

          <div className="hero-v2-ticket" aria-hidden="true">
            <span>admit one</span>
            <strong>
              another trip
              <br />
              around the sun
            </strong>
            <i>no. 0026</i>
          </div>
        </div>
      </div>

      <div className="hero-v2-bottom">
        <a className="hero-scroll" href="#book">
          <span>turn the page</span>
          <ArrowDoodle />
        </a>
        <div className="hero-v2-marquee" aria-hidden="true">
          <div>
            <span>happy birthday</span>
            <i>✦</i>
            <span>another trip around the sun</span>
            <i>✦</i>
            <span>for my friend, my chosen family</span>
            <i>✦</i>
            <span>happy birthday</span>
            <i>✦</i>
            <span>another trip around the sun</span>
            <i>✦</i>
            <span>for my friend, my chosen family</span>
            <i>✦</i>
          </div>
        </div>
        <p className="hero-v2-folio">scroll / 01</p>
      </div>
    </section>
  );
}
