import Carousel from "@/components/custom/Carousel";
import Navbar from "@/components/custom/Navbar";
import HeroSection from "@/components/custom/HeroSection";
import Cards from "@/components/custom/Cards";
import Footer from "@/components/custom/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <Carousel />
      <Footer />
    </div>
  );
}
