'use client';
import Hero from './hero/page';
import About from './about/page';
import Services from './services/page';
import FAQ from './faq/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
    </>
  );
}
