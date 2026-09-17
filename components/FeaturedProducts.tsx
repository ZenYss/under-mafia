import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = [
    {
      title: "FiveM Bundle",
      description: "Discord + Steam + FiveM Ready • Odbanuj się i wróć do gry w 5 min. Full instant.",
      price: "1,50 zł",
      category: "Accounts",
      checkoutUrl: "/checkout",
    },
    {
      title: "Cleanex Spoofer",
      description: "Wysokiej jakości HWID Spoofer • Undetected • Dożywotnie aktualizacje.",
      price: "30,00 zł",
      category: "Sp00fer",
      checkoutUrl: "/checkout",
    },
    {
      title: "Lynx.cc",
      description: "Nevykrywalny cheat PvP • Aim / ESP / Misc • Najlepszy stosunek cena/jakość.",
      price: "15-70 zł",
      category: "Cheats",
      checkoutUrl: "/checkout",
    },
  ];

  return (
    <section id="products" className="relative w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-[11px] tracking-[0.3em] text-[#39ff14] font-bold">NASZE PRODUKTY • MYSELLAUTH STYLE</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-black tracking-tight">
            Wybierz swój <span className="neon">produkt</span>
          </h2>
          <p className="mt-2 text-sm text-white/40">Starannie przygotowane produkty • Instant delivery • 770+ opinii 4.98★</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-white/40">Sortuj:</span>
          <select className="bg-[#111113] border border-white/10 rounded-full px-4 py-2 text-sm">
            <option>Popularne</option>
            <option>Cena rosnąco</option>
            <option>Cena malejąco</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <ProductCard key={p.title} {...p} />
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-[#39ff14] text-black px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">%</span>
          <div>
            <div className="font-black text-sm">BUNDLE -20% NA START</div>
            <div className="text-xs opacity-70">Kup 2 produkty = zniżka automatycznie w koszyku</div>
          </div>
        </div>
        <a href="#products" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold">Aktywuj zniżkę →</a>
      </div>
    </section>
  );
}
