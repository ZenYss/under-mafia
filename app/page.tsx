import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProducts from "@/components/FeaturedProducts";
import Community from "@/components/Community";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";


export default function Home() {

  return (

    <main
      className="
      relative
      overflow-hidden
      "
    >

      <Navbar />

      <Hero />

      <About />

      <FeaturedProducts />

      <Community />

      <FAQ />

      <Footer />

    </main>

  );

}