type ProductCardProps = {
  title: string;
  description: string;
  price: string;
  category: string;
  checkoutUrl: string;
};

const categoryColor: Record<string, string> = {
  Accounts: "bg-[#39ff14] text-black",
  "Sp00fer": "bg-white text-black",
  Cheats: "bg-[#a855f7] text-white",
};

export default function ProductCard({ title, description, price, category, checkoutUrl }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col rounded-[20px] bg-[#111113] border border-white/[0.06] overflow-hidden hover:border-white/10 hover:bg-[#16161a] transition-all duration-300 hover:-translate-y-1">
      {/* Image placeholder - SellAuth style */}
      <div className="relative h-44 bg-gradient-to-br from-white/[0.06] to-white/[0.02] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center text-xl text-white/20">◈</div>
        </div>
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`text-[11px] font-bold tracking-widest px-2.5 py-1 rounded-full ${categoryColor[category] ?? "bg-white/10 text-white"}`}>{category.toUpperCase()}</span>
          <span className="text-[11px] font-bold px-2 py-1 rounded-full bg-black/60 backdrop-blur text-white border border-white/10">● IN STOCK</span>
        </div>
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition">♡</div>
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[18px] font-black leading-tight">{title}</h3>
        <p className="mt-2 text-sm text-white/45 leading-relaxed line-clamp-2 flex-1">{description}</p>

        <div className="mt-4 flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1 text-[#39ff14]">★ 5.0 <span className="text-white/30">(47)</span></span>
          <span className="text-white/20">•</span>
          <span className="text-white/40">1.2k sprzedanych</span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <div className="text-[11px] tracking-widest text-white/30 line-through">{price !== "1,50 zł" ? "49,99 zł" : ""}</div>
            <div className="text-2xl font-black">{price}</div>
          </div>
          <a
            href={checkoutUrl}
            className="shrink-0 neon-button px-6 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2"
          >
            Kup teraz →
          </a>
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-white/25">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Instant delivery • PayPal • BLIK • Karta
        </div>
      </div>
    </div>
  );
}
