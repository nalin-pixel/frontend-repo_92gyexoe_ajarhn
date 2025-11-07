import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const EMAIL = 'fitra@example.com';
const GITHUB_URL = 'https://github.com/your-github';
const LINKEDIN_URL = 'https://www.linkedin.com/in/your-linkedin/';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Mari Berkolaborasi</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Tertarik bekerja sama? Saya senang berdiskusi tentang proyek, kolaborasi, atau peluang kerja baru.
        </p>

        <div className="mx-auto mt-8 max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-cyan-500/20 p-3 text-cyan-300">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Hubungi via Email</p>
              <a href={`mailto:${EMAIL}`} className="text-lg font-semibold text-white hover:underline">{EMAIL}</a>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
