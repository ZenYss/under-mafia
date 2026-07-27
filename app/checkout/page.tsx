export default function Checkout() {
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
        "
      >

        <h1
          className="
          text-4xl
          font-black
          text-center
          "
        >
          Checkout
        </h1>


        <p
          className="
          mt-4
          text-center
          text-gray-400
          "
        >
          Wybierz metodę płatności
        </p>


        <div className="mt-8 space-y-4">


          <button
            className="
            w-full
            rounded-xl
            border
            border-green-400/20
            py-4
            text-green-400
            hover:bg-green-400/10
            transition
            "
          >
            BLIK
          </button>


          <button
            className="
            w-full
            rounded-xl
            border
            border-green-400/20
            py-4
            text-green-400
            hover:bg-green-400/10
            transition
            "
          >
            PayPal
          </button>


          <button
            className="
            w-full
            rounded-xl
            border
            border-green-400/20
            py-4
            text-green-400
            hover:bg-green-400/10
            transition
            "
          >
            Crypto
          </button>


        </div>


      </div>

    </main>
  );
}