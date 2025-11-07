import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ExternalLink, Github, Linkedin } from 'lucide-react';

const NAME = 'Fitra Rizky Oktarian';
const TAGLINE = 'Front-End Developer';
const PORTFOLIO_URL = 'https://your-portfolio-link.example.com';
const GITHUB_URL = 'https://github.com/your-github';
const LINKEDIN_URL = 'https://www.linkedin.com/in/your-linkedin/';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/80" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center md:pt-36">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-cyan-400" />
          <span className="text-xs font-medium tracking-wide text-cyan-100">Tech • Portfolio • Interactive</span>
        </div>

        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          {NAME}
        </h1>
        <p className="mt-3 text-lg text-slate-200 md:text-2xl">{TAGLINE} yang bersemangat mengubah desain menjadi UI responsif, berkinerja tinggi, dan mudah digunakan.</p>

        <p className="mx-auto mt-6 max-w-3xl text-balance text-slate-300">
          Berpengalaman dalam ekosistem React.js dan mahir dengan teknologi inti seperti HTML5, CSS3, dan JavaScript (ES6+). Fokus pada detail pixel-perfect dan optimasi loading untuk pengalaman terbaik.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-2px] hover:bg-cyan-400"
          >
            Lihat Portofolio Lengkap
            <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <div className="flex items-center gap-3">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:bg-white/10">
              <Github className="h-5 w-5" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
