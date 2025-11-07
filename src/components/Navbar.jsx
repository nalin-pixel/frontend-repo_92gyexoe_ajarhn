import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/90 hover:text-white">
            Fitra Rizky Oktarian
          </a>
          <div className="hidden items-center gap-2 md:flex">
            <a href="#projects" className="rounded-full px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">Proyek</a>
            <a href="#contact" className="rounded-full px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">Kontak</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
