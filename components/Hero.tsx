export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      w-full
      flex
      items-center
      overflow-hidden
      px-8
      lg:px-20
      pt-40
      pb-40
      "
    >

      {/* Cyber tło */}

      <div
        className="
        cyber-grid
        absolute
        inset-0
        "
      />



      {/* Animowany glow */}

      <div
        className="
        absolute
        top-1/3
        left-1/2
        -translate-x-1/2
        w-[650px]
        h-[650px]
        bg-green-500/10
        blur-[170px]
        rounded-full
        animate-glow
        "
      />



      <div
        className="
        relative
        z-10
        w-full
        "
      >

        <div
          className="
          animate-enter
          "
        >


          <p
            className="
            mb-10
            text-green-400
            uppercase
            tracking-[0.6em]
            text-sm
            "
          >
            UNDER MAF!A
          </p>




          <h1
            className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-black
            leading-[1]
            tracking-tight
            "
          >

            Twój świat

            <br />

            <span className="neon">
              cyfrowego premium
            </span>

          </h1>




          <p
            className="
            mt-10
            max-w-4xl
            text-lg
            md:text-xl
            text-gray-400
            leading-relaxed
            "
          >
            UNDER MAF!A to miejsce stworzone dla osób,
            które szukają jakości, stylu i wyjątkowych
            produktów cyfrowych.
          </p>





          <div
            className="
            mt-14
            flex
            flex-col
            sm:flex-row
            gap-5
            "
          >

            <button
              className="
              neon-button
              px-10
              py-5
              rounded-xl
              text-lg
              font-bold
              "
            >
              Dołącz do UNDER MAF!A
            </button>



            <button
              className="
              px-10
              py-5
              rounded-xl
              border
              border-green-400/20
              text-green-400
              text-lg
              transition
              hover:bg-green-400/10
              "
            >
              Zobacz ofertę
            </button>

          </div>





          <div
            className="
            mt-28
            grid
            grid-cols-1
            md:grid-cols-3
            gap-12
            "
          >

            <div>

              <p className="text-4xl font-bold neon">
                24/7
              </p>

              <p className="mt-3 text-gray-500">
                Dostępność
              </p>

            </div>



            <div>

              <p className="text-4xl font-bold neon">
                Premium
              </p>

              <p className="mt-3 text-gray-500">
                Jakość usług
              </p>

            </div>



            <div>

              <p className="text-4xl font-bold neon">
                Secure
              </p>

              <p className="mt-3 text-gray-500">
                Bezpieczeństwo
              </p>

            </div>


          </div>


        </div>


      </div>





      {/* Dolna linia */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-px
        bg-green-400/10
        "
      />

    </section>
  );
}