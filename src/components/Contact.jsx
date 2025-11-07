import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 md:py-28">
      <div className="mx-auto w-[92%] max-w-3xl text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Let’s build something delightful</h2>
        <p className="mt-3 text-slate-300/90">Open to freelance and collaborations. I respond within 24 hours.</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:hello@fitrarizky.dev" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:scale-[1.02]">
            <Mail size={18} /> Email Me
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-medium text-white/90 hover:text-white transition">
            <Github size={18} /> GitHub
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-medium text-white/90 hover:text-white transition">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
