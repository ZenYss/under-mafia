export default function About() {
  return (
    <section
      id="about"
      className="
      relative
      w-full
      px-8
      lg:px-20
      py-32
      "
    >

      <div className="w-full">


        {/* Nagłówek */}

        <div className="max-w-5xl mb-24">


          <p
            className="
            text-green-400
            uppercase
            tracking-[0.5em]
            text-sm
            "
          >
            UNDER MAF!A
          </p>



          <h2
            className="
            mt-6
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            "
          >

            Więcej niż sklep.

            <br />

            <span className="neon">
              To marka.
            </span>

          </h2>



          <p
            className="
            mt-10
            max-w-4xl
            text-xl
            text-gray-400
            leading-relaxed
            "
          >
            UNDER MAF!A tworzy cyfrowe doświadczenia
            dla osób, które szukają jakości,
            prostoty i wyjątkowego stylu.
          </p>


        </div>





        {/* Karty */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
          "
        >


          <div
            className="
            rounded-3xl
            border
            border-green-400/20
            bg-[#080d09]
            p-10
            transition
            hover:-translate-y-2
            hover:border-green-400/50
            "
          >

            <div className="text-4xl mb-8">
              ✦
            </div>


            <h3
              className="
              text-2xl
              font-bold
              "
            >
              Premium
            </h3>


            <p
              className="
              mt-5
              text-gray-400
              leading-relaxed
              "
            >
              Każdy element został przygotowany
              z myślą o jakości i wyjątkowym
              doświadczeniu użytkownika.
            </p>


          </div>





          <div
            className="
            rounded-3xl
            border
            border-green-400/20
            bg-[#080d09]
            p-10
            transition
            hover:-translate-y-2
            hover:border-green-400/50
            "
          >

            <div className="text-4xl mb-8">
              ⚡
            </div>


            <h3
              className="
              text-2xl
              font-bold
              "
            >
              Szybkość
            </h3>


            <p
              className="
              mt-5
              text-gray-400
              leading-relaxed
              "
            >
              Prosty proces zakupu,
              szybka realizacja i wygodne
              korzystanie z usług.
            </p>


          </div>





          <div
            className="
            rounded-3xl
            border
            border-green-400/20
            bg-[#080d09]
            p-10
            transition
            hover:-translate-y-2
            hover:border-green-400/50
            "
          >

            <div className="text-4xl mb-8">
              🛡
            </div>


            <h3
              className="
              text-2xl
              font-bold
              "
            >
              Zaufanie
            </h3>


            <p
              className="
              mt-5
              text-gray-400
              leading-relaxed
              "
            >
              Profesjonalne podejście,
              przejrzystość i dbałość
              o każdy szczegół.
            </p>


          </div>


        </div>


      </div>


    </section>
  );
}