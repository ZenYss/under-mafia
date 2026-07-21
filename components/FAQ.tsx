export default function FAQ() {

  const questions = [
    {
      question: "Jak wygląda zakup produktu?",
      answer:
        "Wybierasz produkt, przechodzisz przez proces zakupu i otrzymujesz informacje dotyczące realizacji."
    },

    {
      question: "Jak szybko otrzymam produkt?",
      answer:
        "Realizacja odbywa się możliwie szybko po poprawnym zakończeniu zakupu."
    },

    {
      question: "Czy mogę uzyskać pomoc?",
      answer:
        "Tak. Nasza społeczność i obsługa pomogą Ci w przypadku pytań."
    },

    {
      question: "Gdzie znajdę aktualności?",
      answer:
        "Najnowsze informacje i aktualizacje znajdziesz w naszej społeczności."
    },
  ];


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
        w-full
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
          FAQ
        </p>




        <h2
          className="
          mt-5
          text-4xl
          md:text-6xl
          font-black
          "
        >
          Najczęściej zadawane

          <span className="neon">
            {" "}pytania
          </span>

        </h2>




        <div
          className="
          mt-12
          grid
          gap-5
          max-w-4xl
          "
        >

          {questions.map((item) => (

            <div
              key={item.question}
              className="
              rounded-2xl
              border
              border-green-400/10
              bg-[#070b08]
              p-6
              transition
              hover:border-green-400/30
              "
            >

              <h3
                className="
                text-xl
                font-bold
                "
              >
                {item.question}
              </h3>


              <p
                className="
                mt-3
                text-gray-400
                leading-relaxed
                "
              >
                {item.answer}
              </p>


            </div>

          ))}

        </div>


      </div>


    </section>
  );
}