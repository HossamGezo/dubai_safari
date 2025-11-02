// Components
import HeroSection from "./components/hero-section/HeroSection";
import ServicesSection from "./components/services-section/ServicesSection";
import ToursSection from "./components/tours-section/ToursSection";
import Banner from "./components/banner/Banner";
// Main Componet
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Services Section */}
      <ServicesSection />
      {/* Tours Section */}
      <ToursSection />
      {/* Banner Section */}
      <Banner />
    </>
  );
};

export default Home;
