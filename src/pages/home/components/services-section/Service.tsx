// Types
type ServicesSectionProps = {
  service: string;
  children: React.ReactNode;
};

// Main Component
const Service = ({ service, children }: ServicesSectionProps) => {
  return (
    <div className="flex items-center justify-between group rounded-full px-7 py-2.5 border border-orange-500 cursor-pointer font-bold hover:bg-orange-500 hover:text-white transition-colors duration-300 gap-2.5">
      <span className="text-orange-700 max-md:text-lg md:text-2xl group-hover:text-white transition-colors duration-300">
        {children}
      </span>
      <p className="max-md:text-lg md:text-xl">{service}</p>
    </div>
  );
};

export default Service;
