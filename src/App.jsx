import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Navbar />
      <Hero />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto w-[92%] max-w-7xl text-center text-sm text-slate-400">
          © {year} Fitra Rizky Oktarian · Built with React, Vite, Tailwind & Spline
        </div>
      </footer>
    </div>
  );
}
