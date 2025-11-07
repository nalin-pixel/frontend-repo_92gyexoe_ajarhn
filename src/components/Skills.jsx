import React from 'react';
import { Code2, Palette, Box, Wrench } from 'lucide-react';

const skills = [
  {
    title: 'Framework/Library',
    items: ['React.js', 'Next.js (opsional)'],
    icon: Code2,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Styling',
    items: ['Tailwind CSS', 'Bootstrap', 'SASS/LESS'],
    icon: Palette,
    color: 'from-fuchsia-400 to-pink-500',
  },
  {
    title: 'Bahasa',
    items: ['JavaScript', 'TypeScript (opsional)'],
    icon: Box,
    color: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Tools',
    items: ['Git', 'Webpack/Vite'],
    icon: Wrench,
    color: 'from-amber-400 to-orange-500',
  },
];

export default function Skills() {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Keahlian Utama</h2>
        <p className="mt-2 max-w-2xl text-slate-300">Fondasi yang solid untuk membangun antarmuka modern, cepat, dan ramah pengguna.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ title, items, icon: Icon, color }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl transition group-hover:opacity-30`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  {items.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
