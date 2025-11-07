import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans" id="home">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Fitra Rizky Oktarian. Dibuat dengan cinta, React & Tailwind.
      </footer>
    </div>
  );
}
