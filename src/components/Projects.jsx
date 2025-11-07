import React from 'react';
import { ExternalLink, Workflow, Cpu, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Complex SPA Dashboard',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    role: 'Saya bertanggung jawab penuh untuk implementasi UI menggunakan React Hooks, Context API, dan optimisasi render.',
    tech: ['React', 'Tailwind', 'Chart.js', 'Vite'],
    problem: 'Membangun dashboard SPA kompleks dengan data real-time dan grafik interaktif.',
    url: 'https://example.com/dashboard',
    icon: Workflow,
  },
  {
    title: 'Mobile-First E-commerce',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
    role: 'Mengimplementasikan desain mobile-first, lazy-loading gambar, dan optimasi LCP untuk kecepatan tinggi.',
    tech: ['React', 'SWR', 'Tailwind', 'Cloudinary'],
    problem: 'Menghadirkan pengalaman belanja cepat dengan performa prima di perangkat mobile.',
    url: 'https://example.com/ecommerce',
    icon: Smartphone,
  },
  {
    title: 'API Integrations Explorer',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    role: 'Mendesain arsitektur front-end untuk integrasi RESTful/GraphQL dan state management yang efisien.',
    tech: ['React', 'GraphQL', 'Apollo', 'Tailwind'],
    problem: 'Mengintegrasikan berbagai API dengan caching cerdas dan error handling yang robust.',
    url: 'https://example.com/api-explorer',
    icon: Cpu,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Proyek Terbaik</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Contoh karya yang menonjolkan kemampuan membangun SPA kompleks, desain mobile-first, dan integrasi API.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10 md:inline-block">Ajak Kolaborasi</a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-white/10 px-2 py-1 text-xs text-slate-200">
                  <p.icon className="h-4 w-4" />
                  <span>{p.title}</span>
                </div>
                <p className="text-sm text-slate-300">{p.role}</p>
                <p className="mt-2 text-sm text-slate-400">Problem solved: {p.problem}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200">{t}</span>
                  ))}
                </div>
                <a href={p.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
                  Lihat Proyek <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
