import { Rocket, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[80%]">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-4 py-2 md:px-6 md:py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
            <Rocket size={18} />
          </span>
          <span className="font-semibold tracking-tight text-slate-100">Fitra Rizky Oktarian</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-slate-200">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a aria-label="GitHub" href="#" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 hover:text-white hover:bg-white/20 transition">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href="#" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 hover:text-white hover:bg-white/20 transition">
            <Linkedin size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
