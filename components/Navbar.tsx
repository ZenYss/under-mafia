"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Announcement bar - SellAuth style */}
      <div className="announcement-bar fixed top-0 left-0 w-full z-[60] h-7 flex items-center justify-center px-4 text-[11px]">
        <span className="hidden sm:inline">★ DARMOWA DOSTAWA 24/7 • INSTANT DELIVERY • SUPPORT NA DISCORDZIE —</span>
        <span className="sm:ml-2 underline decoration-black/20 underline-offset-2">DOŁĄCZ DO UNDER MAF!A</span>
      </div>

      <header className="fixed top-7 left-0 w-full z-50 px-3 lg:px-8">
        <nav className="mx-auto max-w-[1280px] rounded-2xl border border-white/[0.06] bg-[#0f0f10]/80 backdrop-blur-2xl px-4 lg:px-5 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[#39ff14] flex items-center justify-center text-black font-black text-sm">U</div>
            <span className="text-[15px] font-black tracking-widest">
              UNDER<span className="neon"> MAF!A</span>
            </span>
            <span className="hidden lg:inline text-[10px] font-bold tracking-[0.2em] text-white/30 ml-1 border border-white/10 px-2 py-1 rounded-full">PREMIUM STORE</span>
          </a>

          {/* Desktop search - SellAuth style */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-[420px] mx-6">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-sm">⌕</span>
              <input
                placeholder="Szukaj produktu..."
                className="w-full bg-white/[0.04] border border-white/[0.06] rounded-full pl-9 pr-4 py-2.5 text-sm placeholder:text-white/30 focus:outline-none focus:border-[#39ff14]/30 focus:bg-white/[0.06] transition"
              />
            </div>
          </div>

          {/* Desktop menu pills */}
          <div className="hidden md:flex items-center gap-1 text-sm">
            <a href="#about" className="px-4 py-2 rounded-full hover:bg-white/[0.06] text-white/60 hover:text-white transition">O nas</a>
            <a href="#products" className="px-4 py-2 rounded-full bg-white text-black font-semibold">Produkty</a>
            <a href="#contact" className="px-4 py-2 rounded-full hover:bg-white/[0.06] text-white/60 hover:text-white transition">FAQ</a>
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.06] flex items-center justify-center text-white/60 hover:text-white transition">♡</button>
            <button className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.06] flex items-center justify-center text-white/60 hover:text-white transition">🛒</button>
            <a href="https://discord.gg" target="_blank" className="ml-1 neon-button px-5 py-2.5 rounded-full text-sm">Dołącz</a>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-lg">
            {open ? "✕" : "☰"}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 mx-auto max-w-[1280px] rounded-2xl border border-white/[0.06] bg-[#0f0f10] p-4 flex flex-col gap-2">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">⌕</span>
              <input placeholder="Szukaj..." className="w-full bg-white/[0.04] border border-white/10 rounded-full pl-9 pr-4 py-3 text-sm placeholder:text-white/30" />
            </div>
            <a href="#about" onClick={() => setOpen(false)} className="py-3 text-white/70">O nas</a>
            <a href="#products" onClick={() => setOpen(false)} className="py-3 font-semibold">Produkty</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-3 text-white/70">Kontakt</a>
            <a href="https://discord.gg" className="neon-button py-3 rounded-full text-center mt-2">Dołącz do Discord</a>
          </div>
        )}
      </header>
    </>
  );
}
