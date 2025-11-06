// React Icons
import {GrGallery} from "react-icons/gr";
import {FaUsers} from "react-icons/fa";
import {FaCity} from "react-icons/fa6";
import {TbWorld} from "react-icons/tb";
// Components
import Service from "./Service";
import Title from "@/components/common/section-title/Title";
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
// Main Component
const ServicesSection = () => (
  <>
    <div className="container m-auto py-20">
      {/* Title */}
      <Title title={"services"} />
      {/* Service */}
      <div className="services-wrapper max-md:px-2 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
        {services.map((service) => (
          <Service key={service.id} service={service.service}>
            {service.icon}
          </Service>
        ))}
      </div>
    </div>
  </>
);
export default ServicesSection;
