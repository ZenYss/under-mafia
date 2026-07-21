type ProductCardProps = {
  title: string;
  description: string;
  price: string;
  category: string;
};


export default function ProductCard({
  title,
  description,
  price,
  category,
}: ProductCardProps) {

  return (
    <div
      className="
      group
      relative
      h-full
      rounded-2xl
      border
      border-green-400/10
      bg-[#070b08]
      p-6
      overflow-hidden
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-green-400/30
      "
    >


      {/* hover glow */}

      <div
        className="
        absolute
        -right-20
        -top-20
        w-48
        h-48
        rounded-full
        bg-green-400/10
        blur-3xl
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
        "
      />



      <div
        className="
        relative
        z-10
        flex
        flex-col
        h-full
        "
      >


        <p
          className="
          text-green-400
          uppercase
          tracking-[0.3em]
          text-xs
          "
        >
          {category}
        </p>




        <h3
          className="
          mt-5
          text-2xl
          font-black
          "
        >
          {title}
        </h3>




        <p
          className="
          mt-4
          text-gray-400
          text-sm
          leading-relaxed
          flex-1
          "
        >
          {description}
        </p>





        <div
          className="
          mt-8
          flex
          items-center
          justify-between
          "
        >

          <span
            className="
            text-2xl
            font-bold
            neon
            "
          >
            {price}
          </span>




          <button
            className="
            rounded-xl
            px-5
            py-2.5
            border
            border-green-400/20
            text-green-400
            text-sm
            transition
            hover:bg-green-400/10
            hover:border-green-400/40
            "
          >
            Wybierz
          </button>


        </div>


      </div>


    </div>
  );
}