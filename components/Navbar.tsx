"use client";

import { useState } from "react";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      px-4
      lg:px-16
      py-5
      "
    >

      <nav
        className="
        w-full
        rounded-2xl
        border
        border-green-400/10
        bg-[#040805]/80
        backdrop-blur-xl
        px-5
        py-4
        "
      >

        <div
          className="
          flex
          items-center
          justify-between
          "
        >


          {/* Logo */}

          <div
            className="
            text-xl
            font-black
            tracking-wider
            "
          >

            UNDER

            <span className="neon">
              {" "}MAF!A
            </span>

          </div>




          {/* Desktop menu */}

          <div
            className="
            hidden
            md:flex
            items-center
            gap-10
            text-sm
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


            <a
              href="#contact"
              className="hover:text-green-400 transition"
            >
              Kontakt
            </a>

          </div>




          {/* Desktop button */}

          <button
            className="
            hidden
            md:block
            neon-button
            px-6
            py-3
            rounded-xl
            text-sm
            font-bold
            "
          >
            Dołącz
          </button>





          {/* Mobile button */}

          <button
            onClick={() => setOpen(!open)}
            className="
            md:hidden
            text-green-400
            text-2xl
            "
          >
            ☰
          </button>


        </div>





        {/* Mobile menu */}

        {open && (

          <div
            className="
            md:hidden
            mt-5
            pt-5
            border-t
            border-green-400/10
            flex
            flex-col
            gap-5
            text-gray-400
            "
          >

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="hover:text-green-400"
            >
              O nas
            </a>


            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="hover:text-green-400"
            >
              Produkty
            </a>


            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:text-green-400"
            >
              Kontakt
            </a>



            <button
              className="
              neon-button
              px-5
              py-3
              rounded-xl
              font-bold
              "
            >
              Dołącz
            </button>


          </div>

        )}


      </nav>


    </header>
  );
}