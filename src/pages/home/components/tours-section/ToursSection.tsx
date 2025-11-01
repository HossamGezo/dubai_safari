// Data
import {toursList} from "../../data/data";
// Components
import Title from "../../../../components/common/section-title/Title";
import Tour from "./tour";
// Component
const ToursSection = () => {
  return (
    <>
      <section className="tours-section bg-[#ECECEC] py-20">
        <div className="container m-auto max-md:px-2">
          <Title title={"tours"} />
          <div className="tours grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
            {toursList.map(tour => (
              <Tour key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ToursSection;
