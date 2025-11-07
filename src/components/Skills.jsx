import { Code2, Palette, Box, Wrench, Workflow, Cpu, Smartphone } from "lucide-react";

const skills = [
  { icon: Code2, title: "React & SPA", desc: "Hooks, Router, Zustand, best practices" },
  { icon: Palette, title: "UI/UX", desc: "Design systems, tokens, accessible UI" },
  { icon: Box, title: "3D & Motion", desc: "Spline, Framer Motion, smooth micro-interactions" },
  { icon: Wrench, title: "Tooling", desc: "Vite, Tailwind, shadcn, Radix, testing" },
  { icon: Workflow, title: "Architecture", desc: "Clean components, patterns, performance" },
  { icon: Cpu, title: "Performance", desc: "Code-split, lazy, RUM, Lighthouse 95+" },
  { icon: Smartphone, title: "Responsive", desc: "Mobile-first, adaptive, gestures" },
];

export default function Skills() {
  return (
    <section className="relative w-full py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-white">Core Skills</h2>
          <p className="mt-2 text-slate-300/90">Solid fundamentals with a taste for motion and detail.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 hover:border-white/20 transition">
              <div className="absolute -right-16 -top-16 size-40 rounded-full bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 blur-2xl group-hover:scale-110 transition" />
              <div className="inline-flex size-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
