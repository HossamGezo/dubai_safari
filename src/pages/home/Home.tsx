// Components
import HeroSection from "./components/hero-section/HeroSection";
import ServicesSection from "./components/services-section/ServicesSection";
import ToursSection from "./components/tours-section/ToursSection";
import Banner from "./components/banner/Banner";
import NewsLetter from "./components/news-letter/NewsLetter";
// Main Componet
const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ToursSection />
      <Banner />
      <NewsLetter />
    </>
  );
};

export default Home;
