// Types
type TourImageProps = {
  image: string;
};

// Main Component
const TourImage = ({ image }: TourImageProps) => {
  return (
    <div className="max-lg:mb-7.5">
      <img
        src={image}
        alt="Tour Preview"
        className="mb-2.5 rounded-lg max-xl:w-full w-200 object-cover shadow-xl"
      />
      <p className="max-lg:w-full w-175 text-lg text-justify">
        Discover a different side of Dubai on a fun-filled safari across the
        desert. Try sandboarding, dune bashing and a camel ride, with the option
        to add an electrifying quad bike ride or immersive A1 Khayma Camp dinner
        experience to your adventure.
      </p>
    </div>
  );
};
export default TourImage;
