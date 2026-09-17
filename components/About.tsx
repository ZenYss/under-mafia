export default function About() {
  return (
    <section id="about" className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-10">
      <div className="rounded-[24px] bg-[#111113] border border-white/[0.06] p-8 lg:p-12">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.3em] text-[#39ff14] font-bold">UNDER MAF!A • MYSELLAUTH INSPIRED</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-black leading-tight">
            Więcej niż sklep. <span className="neon">To marka.</span>
          </h2>
          <p className="mt-4 text-white/50 leading-relaxed">
            Tworzymy cyfrowe doświadczenia jak na MySellAuth — czysto, szybko, premium. Zero clutter, maksymalna konwersja.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: "✦", title: "Premium", desc: "Każdy produkt testowany. Tylko to co działa i jest undetected." },
            { icon: "⚡", title: "Instant", desc: "Dostawa automatyczna w <2 min. Bez czekania na admina." },
            { icon: "🛡", title: "Zaufanie", desc: "770+ opinii 4.98★ na MySellAuth • Gwarancja wsparcia." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 hover:bg-white/[0.05] transition">
              <div className="w-10 h-10 rounded-full bg-[#39ff14] text-black flex items-center justify-center text-lg">{c.icon}</div>
              <h3 className="mt-4 font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-white/40 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
