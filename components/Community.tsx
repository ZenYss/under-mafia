export default function Community() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-6">
      <div className="relative overflow-hidden rounded-[24px] bg-[#39ff14] p-[1px]">
        <div className="rounded-[23px] bg-[#111113] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-[#39ff14]/10 blur-[80px] rounded-full" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[11px] tracking-[0.3em] text-[#39ff14] font-bold">COMMUNITY • 1,200+ ONLINE</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-black">
                Dołącz do <span className="neon">UNDER MAF!A</span>
              </h2>
              <p className="mt-3 text-white/50">Nowe dropy, giveawaye i support 24/7. Jak na MySellAuth — wszystko w jednym miejscu.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="https://discord.gg" target="_blank" className="neon-button px-8 py-4 rounded-full text-center font-bold">Dołącz do Discord →</a>
              <a href="#products" className="px-8 py-4 rounded-full bg-white text-black font-bold text-center">Zobacz ofertę</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
