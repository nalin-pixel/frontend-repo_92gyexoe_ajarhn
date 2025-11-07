import Spline from "@splinetool/react-spline";
import { Star, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950/90" />

      <div className="relative z-10 mx-auto flex h-full w-[92%] max-w-7xl items-center">
        <div className="max-w-2xl text-white">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
            <Star className="text-amber-300" size={14} /> Front-End Developer · Web Animation · 3D Experience
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Fitra Rizky Oktarian
          </h1>
          <p className="mt-4 text-slate-200/90 md:text-lg">
            I craft delightful, performant interfaces with React, Tailwind, and 3D Spline interactions. Obsessed with micro-interactions and smooth motion.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:scale-[1.02]">
              View Projects <ExternalLink size={16} />
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-medium text-white/90 hover:text-white transition">
              Get In Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-slate-300/90">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for freelance</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-white/10" />
            <p className="hidden md:block">Trusted by product teams and startups</p>
          </div>
        </div>
      </div>
    </section>
  );
}
