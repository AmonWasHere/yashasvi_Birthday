import { quotes, site } from '../content';
import { ArrowDoodle, Spark, Sprig, StarStamp, Tape } from './Ornaments';

export default function Hero() {
  const plath = quotes[0];

  return (
    <section className="hero" id="top">
      <div className="hero-ghost" aria-hidden="true">
        happy birthday to you
      </div>
      <p className="hero-side" aria-hidden="true">
        a birthday scrapbook <span>·</span> vol. 01
      </p>

      <div className="container hero-inner">
        <div className="hero-left">
          <Tape className="tape--hero-a" />
          <Tape className="tape--hero-b" />
          <div className="hero-card">
            <p className="hero-card-kicker">{site.relationship}</p>
            <h1 className="hero-card-title">
              <span className="sr-only">Happy birthday, {site.recipient}</span>
              <span aria-hidden="true" className="hero-happy">
                Happy
              </span>
              <span aria-hidden="true" className="hero-birthday">
                Birthday
              </span>
            </h1>
            <p className="hero-name">
              <Spark className="hero-name-star" />
              {site.recipient}
            </p>
            <p className="hero-card-note">
              another trip around the sun,
              <br />
              and you keep getting better at it.
            </p>
            <StarStamp className="hero-stamp" />
          </div>

          <p className="hero-intro">
            Poets, an apothecary, a wall of ice, two girls named Nana, and one stage
            where nobody sings quietly. <span>Seven small chapters for you.</span>
          </p>
        </div>

        <div className="hero-collage">
          <Sprig className="hero-sprig" />
          <figure className="hero-portrait">
            <Tape className="tape--portrait" />
            <div className="hero-frame">
              <img
                src="/art/portrait.webp"
                alt="A painted portrait of a young woman looking down, in black and white."
                width="1400"
                height="1700"
                fetchPriority="high"
              />
            </div>
            <figcaption>a portrait of a feeling</figcaption>
          </figure>

          <blockquote className="hero-quote">
            <p>“{plath.text}”</p>
            <cite>
              {plath.author} <span>{plath.source}</span>
            </cite>
          </blockquote>

          <div className="hero-ticket" aria-hidden="true">
            <span className="hero-ticket-side">admit one</span>
            <span className="hero-ticket-main">
              another trip
              <br />
              around the sun
            </span>
            <span className="hero-ticket-no">no. 0026</span>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <a className="hero-scroll" href="#letter">
          <span>turn the page</span>
          <ArrowDoodle />
        </a>
        <div className="hero-marquee" aria-hidden="true">
          <div>
            <span>happy birthday</span>
            <i>✦</i>
            <span>another trip around the sun</span>
            <i>✦</i>
            <span>for my sister, my first friend</span>
            <i>✦</i>
            <span>happy birthday</span>
            <i>✦</i>
            <span>another trip around the sun</span>
            <i>✦</i>
            <span>for my sister, my first friend</span>
            <i>✦</i>
          </div>
        </div>
      </div>
    </section>
  );
}
