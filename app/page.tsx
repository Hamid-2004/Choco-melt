import BestSellers from "@/components/BestSellers";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InstagramGallery from "@/components/InstagramGallery";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <BestSellers />
      <WhyChooseUs />
      <Categories />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
      <Footer />
      <WhatsAppButton floating />
    </main>
  );
}
