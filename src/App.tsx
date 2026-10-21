import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Letter from './components/Letter';
import Commonplace from './components/Commonplace';
import Apothecary from './components/Apothecary';
import Ice from './components/Ice';
import Nana from './components/Nana';
import Stage from './components/Stage';
import Wish from './components/Wish';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';
import { site } from './content';

export default function App() {
  useReveal();

  useEffect(() => {
    document.title = `Happy Birthday, ${site.recipient} — A Scrapbook`;
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to the good part
      </a>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="main">
        <Hero />
        <Letter />
        <Commonplace />
        <Apothecary />
        <Ice />
        <Nana />
        <Stage />
        <Wish />
      </main>
      <Footer />
    </>
  );
}
