// Types
type ServicesSectionType = {
  service: string;
  children: React.ReactNode;
};
// Component
const ServicesSection = ({service, children}: ServicesSectionType) => {
  return (
    <>
      <div
        className={`service lc-flex-between group rounded-full px-7 py-2.5 border border-orange-500
        cursor-pointer font-bold hover:bg-orange-500 hover:text-white transition-colors duration-300 gap-2.5`}
      >
        <span className="icon text-orange-700 max-md:text-lg md:text-2xl group-hover:text-white transition-colors duration-300">
          {children}
        </span>
        <p className="service-desc max-md:text-lg md:text-xl">{service}</p>
      </div>
    </>
  );
};
export default ServicesSection;
