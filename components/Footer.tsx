export default function Footer() {
  return (
    <footer
      id="contact"
      className="
      relative
      w-full
      px-8
      lg:px-20
      py-20
      mt-20
      border-t
      border-green-400/10
      "
    >

      <div
        className="
        w-full
        flex
        flex-col
        md:flex-row
        justify-between
        gap-10
        "
      >


        {/* Logo */}

        <div>

          <h2
            className="
            text-3xl
            font-black
            "
          >
            UNDER

            <span className="neon">
              {" "}MAF!A
            </span>

          </h2>


          <p
            className="
            mt-5
            text-gray-500
            max-w-md
            "
          >
            Cyfrowa marka stworzona dla osób,
            które cenią jakość, styl i wygodę.
          </p>

        </div>




        {/* Linki */}

        <div
          className="
          flex
          gap-12
          "
        >

          <div>

            <p
              className="
              text-green-400
              text-sm
              uppercase
              tracking-widest
              "
            >
              Menu
            </p>


            <div
              className="
              mt-5
              flex
              flex-col
              gap-3
              text-gray-400
              "
            >

              <a
                href="#about"
                className="hover:text-green-400 transition"
              >
                O nas
              </a>


              <a
                href="#products"
                className="hover:text-green-400 transition"
              >
                Produkty
              </a>

            </div>

          </div>





          <div>

            <p
              className="
              text-green-400
              text-sm
              uppercase
              tracking-widest
              "
            >
              Kontakt
            </p>


            <div
              className="
              mt-5
              flex
              flex-col
              gap-3
              text-gray-400
              "
            >

              <span>
                Discord
              </span>


              <span>
                Support
              </span>


            </div>


          </div>


        </div>


      </div>





      <div
        className="
        mt-16
        pt-6
        border-t
        border-green-400/10
        text-gray-600
        text-sm
        "
      >

        © {new Date().getFullYear()} UNDER MAF!A. Wszystkie prawa zastrzeżone.

      </div>


    </footer>
  );
}