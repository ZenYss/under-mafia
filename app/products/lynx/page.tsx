export default function Lynx() {
  return (
    <main
      className="
      min-h-screen
      bg-[#040805]
      text-white
      flex
      items-center
      justify-center
      px-6
      "
    >

      <div
        className="
        w-full
        max-w-xl
        rounded-2xl
        border
        border-green-400/20
        bg-[#070b08]
        p-10
        text-center
        "
      >

        <p className="text-green-400 uppercase tracking-[0.4em] text-sm">
          Cheats
        </p>

        <h1 className="mt-5 text-4xl font-black">
          Lynx.cc
        </h1>

        <p className="mt-5 text-gray-400 leading-relaxed">
          dostajecie cheata z niewykrywalnymi opcjami pod pvp!
        </p>

        <div className="mt-8 text-3xl font-bold neon">
          15-70 zł
        </div>

        <button
          className="
          mt-8
          w-full
          rounded-xl
          bg-green-400
          py-4
          font-bold
          text-black
          transition
          hover:scale-105
          "
        >
          Przejdź do płatności
        </button>

      </div>

    </main>
  );
}