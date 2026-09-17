export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-[104px]">
      <div className="cyber-grid absolute inset-0" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#39ff14]/[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-8 py-10 lg:py-16">
        {/* Breadcrumb / badge row - SellAuth style */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-enter">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-xs text-white/60">
            <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" /> TRUSTED BY 1,200+ CUSTOMERS
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#39ff14] text-black text-xs font-bold">★ 5.0 / 5.0 • 770+ opinii</span>
        </div>

        <div className="text-center max-w-4xl mx-auto animate-enter">
          <h1 className="text-[38px] md:text-[62px] lg:text-[72px] font-black leading-[0.9] tracking-tight">
            TWÓJ ŚWIAT
            <br />
            <span className="neon">CYFROWEGO PREMIUM</span>
          </h1>
          <p className="mt-6 text-[15px] md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            UNDER MAF!A to nie sklep — to marka. Najwyższa jakość • Instant delivery • Support 24/7 na Discordzie.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#products" className="neon-button px-8 py-4 rounded-full text-[15px] w-full sm:w-auto text-center">
              Przeglądaj ofertę →
            </a>
            <a href="https://discord.gg" target="_blank" className="px-8 py-4 rounded-full bg-white text-black font-bold text-[15px] w-full sm:w-auto text-center flex items-center justify-center gap-2">
              <span>◈</span> Dołącz do Discord
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/30">
            <span className="flex -space-x-2">
              <span className="w-6 h-6 rounded-full bg-white/20 border-2 border-[#070709]" />
              <span className="w-6 h-6 rounded-full bg-white/30 border-2 border-[#070709]" />
              <span className="w-6 h-6 rounded-full bg-white/40 border-2 border-[#070709]" />
            </span>
            <span>Dołączyło dziś 47 osób • Online 128</span>
          </div>
        </div>

        {/* Trust bar - SellAuth style */}
        <div className="mt-12 grid grid-cols-3 gap-3 max-w-3xl mx-auto">
          {[
            { k: "24/7", v: "Dostępność", sub: "Instant" },
            { k: "770+", v: "Zadowolonych", sub: "Klientów" },
            { k: "AVG 4.98★", v: "Ocena sklepu", sub: "MySellAuth" },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] px-4 py-5 text-center backdrop-blur">
              <div className="text-lg font-black">{s.k}</div>
              <div className="text-xs text-white/60">{s.v}</div>
              <div className="text-[11px] text-white/25">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* SellAuth categories pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {["Wszystko", "Accounts", "Sp00fer", "Cheats", "Bundles"].map((cat, i) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition ${i === 0 ? "bg-white text-black border-white" : "bg-white/[0.04] text-white/60 border-white/[0.06] hover:bg-white/[0.08] hover:text-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
