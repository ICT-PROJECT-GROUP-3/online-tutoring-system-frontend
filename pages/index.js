import Link from 'next/link';
import About from '../components/pagecomponents/home_page/About';
import Contact from '../components/pagecomponents/home_page/Contact';
import Features from '../components/pagecomponents/home_page/Features';
import Hero from '../components/pagecomponents/home_page/Hero';
import NewsLetter from '../components/pagecomponents/home_page/Newsletter';
import Team from '../components/pagecomponents/home_page/Team';

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-6 `}
    >
      <Hero />
      <About />
      <Features />
      <Team />
      <Contact />
      <NewsLetter />
      <Link href="/Auth">Sign In</Link>
      <Link href="/tutor_profile">See Tutor</Link>
    </main>
  );
}
