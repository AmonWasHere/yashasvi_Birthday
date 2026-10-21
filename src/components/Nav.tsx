import { useEffect, useState } from 'react';
import { site } from '../content';

const chapters = [
  { id: 'book', label: 'The Book' },
  { id: 'garden', label: 'The Garden' },
  { id: 'wall', label: 'The Wall' },
  { id: 'zine', label: 'The Zine' },
  { id: 'stage', label: 'The Stage' },
  { id: 'wish', label: 'The Wish' },
  { id: 'letter', label: 'The Letter' },
];

export default function Nav() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.15, 0.4] },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className={`site-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <a className="nav-brand" href="#top" onClick={() => setOpen(false)}>
        <span className="nav-brand-mark" aria-hidden="true">
          ✶
        </span>
        <span>
          For {site.recipient}
          <small>a birthday scrapbook</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Scrapbook chapters">
        {chapters.map((chapter) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className={active === chapter.id ? 'is-active' : undefined}
            aria-current={active === chapter.id ? 'true' : undefined}
          >
            {chapter.label}
          </a>
        ))}
      </nav>

      <p className="nav-meta">
        Issue 01 <span>·</span> {site.year}
      </p>

      <button
        className="nav-burger"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="nav-burger-lines" aria-hidden="true">
          <i />
          <i />
        </span>
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
      </button>

      <div className="nav-drawer" id="mobile-menu" aria-hidden={!open}>
        <p className="nav-drawer-kicker">
          {site.issue} <span>✦</span> {site.year}
        </p>
        <nav aria-label="Scrapbook chapters">
          {chapters.map((chapter, index) => (
            <a key={chapter.id} href={`#${chapter.id}`} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {chapter.label}
            </a>
          ))}
        </nav>
        <p className="nav-drawer-note">
          made with love, tape,
          <br />
          and a little bit of chaos
        </p>
      </div>
    </header>
  );
}
