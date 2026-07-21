import ProductCard from "./ProductCard";

export default function FeaturedProducts() {

  const products = [
    {
      title: "FiveM Bundle",
      description:
        "Podstawowy pakiet Discord Steam i FiveM Ready żeby się odbanować i wrócić do gry!",
      price: "1,50 zł",
      category: "Accounts",
    },

    {
      title: "Cleanex",
      description:
        "Co otrzymujesz? • Wysokiej jakości Spoofer",
      price: "30zł",
      category: "Sp00fer",
    },

    {
      title: "Lynx.cc",
      description:
        "dostajecie cheata z niewykrywalnymi opcjami pod pvp!",
      price: "15-70 zł",
      category: "Cheats",
    },
  ];


  return (
    <section
      id="products"
      className="
      relative
      w-full
      px-8
      lg:px-20
      py-32
      "
    >

      <div className="w-full">


        <div className="mb-24">


          <p
            className="
            text-green-400
            uppercase
            tracking-[0.5em]
            text-sm
            "
          >
            Nasze Produkty
          </p>



          <h2
            className="
            mt-6
            text-5xl
            md:text-7xl
            font-black
            "
          >

            Wybierz swój Ulubiony

            <span className="neon">
              {" "}Produkt!
            </span>

          </h2>



          <p
            className="
            mt-10
            text-xl
            text-gray-400
            max-w-4xl
            "
          >
            Starannie przygotowane produkty
            dla użytkowników oczekujących jakości i
            szybkości.
          </p>


        </div>




        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          "
        >

          {products.map((product) => (

            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              price={product.price}
              category={product.category}
            />

          ))}

        </div>


      </div>

    </section>
  );
}