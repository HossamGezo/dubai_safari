// React Icons
import {GrGallery} from "react-icons/gr";
import {FaUsers} from "react-icons/fa";
import {FaCity} from "react-icons/fa6";
import {TbWorld} from "react-icons/tb";
// Components
import HeroSection from "./components/hero-section/HeroSection";
import ServicesSection from "./components/services-section/ServicesSection";
// Services Array
const services = [
  {
    id: 1,
    service: "Adventures",
    icon: <GrGallery />,
  },
  {
    id: 2,
    service: "Family tours",
    icon: <FaUsers />,
  },
  {
    id: 3,
    service: "City cards",
    icon: <FaCity />,
  },
  {
    id: 4,
    service: "Multy-day trips",
    icon: <TbWorld />,
  },
];
// Componet
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Services Section */}
      <div className="container m-auto px-5 py-10 grid max-md:grid-cols-1 max-xl:grid-cols-2 grid-cols-4 gap-5">
        {services.map((service) => (
          <ServicesSection key={service.id} service={service.service}>
            {service.icon}
          </ServicesSection>
        ))}
      </div>
    </>
  );
};

export default Home;
