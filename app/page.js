import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <section id="home">
        <HeroSection/>
      </section>
      <section id="about">
        <AboutSection/>
      </section>
      <section id="portfolio">
        <PortfolioSection/>
      </section>
      <section id="contact">
        <ContactSection/>
      </section>
      <Footer/>
    </div>
  );
}