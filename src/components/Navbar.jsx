import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-slate-950/90 to-transparent py-4 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 text-white">
        <a href="#home" className="text-sm font-semibold tracking-wide text-white/90 hover:text-white">Fitra Rizky Oktarian</a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#projects" className="text-sm text-white/80 hover:text-white">Proyek</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Kontak</a>
        </div>
      </nav>
    </header>
  );
}
