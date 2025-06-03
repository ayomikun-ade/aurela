import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Future from "@/components/future";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Product from "@/components/product";
import Reviews from "@/components/reviews";
import Story from "@/components/story";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Story />
      <Product />
      <Feature />
      <Future />
      <Reviews />
      <Footer />
    </main>
  );
}
