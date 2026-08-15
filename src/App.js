import NavBar from "./components/NavBar";
import "./App.css";
import Hero from "./components/Hero";
import SeoSection from "./components/SeoSection";
import PortfolioSection from "./components/PortfolioSection";
import ParallaxSection from "./components/ParallaxSection";
import Limitless from "./components/Limitless";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SeoSection />
      <PortfolioSection />
      <ParallaxSection />
      <Limitless />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
