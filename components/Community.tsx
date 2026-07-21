export default function Community() {
  return (
    <section
      className="
      relative
      w-full
      px-6
      lg:px-16
      py-24
      "
    >

      <div
        className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-green-400/10
        bg-[#070b08]
        p-10
        md:p-16
        "
      >

        {/* Delikatny glow */}

        <div
          className="
          absolute
          -top-32
          right-0
          w-96
          h-96
          bg-green-400/10
          blur-[120px]
          rounded-full
          "
        />



        <div
          className="
          relative
          z-10
          max-w-4xl
          "
        >


          <p
            className="
            text-green-400
            uppercase
            tracking-[0.45em]
            text-sm
            "
          >
            Community
          </p>




          <h2
            className="
            mt-6
            text-4xl
            md:text-6xl
            font-black
            "
          >

            Dołącz do

            <span className="neon">
              {" "}UNDER MAF!A
            </span>

          </h2>




          <p
            className="
            mt-6
            text-gray-400
            text-lg
            max-w-2xl
            leading-relaxed
            "
          >
            Bądź częścią naszej społeczności.
            Otrzymuj informacje o nowych produktach,
            aktualizacjach i specjalnych ofertach.
          </p>




          <button
            className="
            mt-10
            neon-button
            px-10
            py-4
            rounded-xl
            font-bold
            "
          >
            Dołącz do Discord
          </button>


        </div>


      </div>


    </section>
  );
}