export default function FAQ() {
  const qs = [
    { q: "Jak wygląda zakup?", a: "Wybierz produkt → Płatność (BLIK/Karta/PayPal) → Instant delivery na e-mail + Discord. Jak na SellAuth." },
    { q: "Jak szybko dostanę produkt?", a: "Automatycznie <2 min. W razie problemu support odpowiada średnio w 7 min." },
    { q: "Czy mogę uzyskać pomoc?", a: "Tak — Discord ticket 24/7 + FAQ + video poradniki." },
    { q: "Gdzie znajdę aktualności?", a: "Na Discordzie i w zakładce Aktualności. Dropy co tydzień." },
  ];
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-10">
      <p className="text-[11px] tracking-[0.3em] text-[#39ff14] font-bold">FAQ</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-black">Najczęściej <span className="neon">pytania</span></h2>
      <div className="mt-6 grid gap-3 max-w-4xl">
        {qs.map((i) => (
          <div key={i.q} className="rounded-2xl bg-[#111113] border border-white/[0.06] p-5 hover:border-white/10 transition">
            <h3 className="font-bold">{i.q}</h3>
            <p className="mt-2 text-sm text-white/45 leading-relaxed">{i.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
