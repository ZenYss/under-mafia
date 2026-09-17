export default function Footer() {
  return (
    <footer id="contact" className="mt-10 border-t border-white/[0.06] bg-[#0a0a0b]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#39ff14] flex items-center justify-center text-black font-black text-sm">U</div>
              <span className="font-black tracking-widest">UNDER<span className="neon"> MAF!A</span></span>
              <span className="ml-2 text-[10px] tracking-widest text-white/30 border border-white/10 px-2 py-1 rounded-full">MYSELLAUTH STYLE</span>
            </div>
            <p className="mt-3 text-sm text-white/40 max-w-md">Cyfrowa marka premium inspirowana MySellAuth • Clean design • Szybka dostawa • 770+ opinii.</p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-white/50">● VISA</span>
              <span className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-white/50">● BLIK</span>
              <span className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-xs text-white/50">● PayPal</span>
            </div>
          </div>
          <div className="flex gap-12 text-sm">
            <div>
              <p className="text-white font-bold text-xs tracking-widest">MENU</p>
              <div className="mt-3 flex flex-col gap-2 text-white/50">
                <a href="#about" className="hover:text-white">O nas</a>
                <a href="#products" className="hover:text-white">Produkty</a>
                <a href="#" className="hover:text-white">Regulamin</a>
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-xs tracking-widest">KONTAKT</p>
              <div className="mt-3 flex flex-col gap-2 text-white/50">
                <span>Discord</span>
                <span>support@undermafia.pl</span>
                <span className="text-[#39ff14]">● Online 24/7</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row justify-between gap-2 text-xs text-white/25">
          <span>© {new Date().getFullYear()} UNDER MAF!A. Wszystkie prawa zastrzeżone. Inspired by MySellAuth.</span>
          <span>SellAuth • MySellAuth • Supreme Theme • Premium Store</span>
        </div>
      </div>
    </footer>
  );
}
