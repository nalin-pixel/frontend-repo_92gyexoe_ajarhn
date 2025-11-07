import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Motion Commerce",
    role: "Front-End Lead",
    about: "E-commerce with immersive motion and blazing-fast UX.",
    tech: ["React", "Tailwind", "Framer Motion"],
    demo: "#",
    repo: "#",
    image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Spline Playground",
    role: "Creative Developer",
    about: "Interactive 3D hero sections using Spline.",
    tech: ["Spline", "Vite", "GLTF"],
    demo: "#",
    repo: "#",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Portfolio Awwwards",
    role: "Front-End",
    about: "Awwwards-level portfolio with micro-interactions.",
    tech: ["React", "Tailwind", "shadcn"],
    demo: "#",
    repo: "#",
    image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1600&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 md:py-28">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-white">Selected Projects</h2>
          <p className="mt-2 text-slate-300/90">A mix of product work and playful experiments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/70" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
                  {p.role}
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{p.about}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 transition">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 transition">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
