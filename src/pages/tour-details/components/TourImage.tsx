// Main Component
const TourImage = ({ image }: { image: string }) => {
  return (
    <>
      <div className="tour-image max-lg:mb-[30px]">
        <img
          src={image}
          alt="IMAGE"
          className="mb-2.5 rounded-lg max-lg:w-full w-[800px] object-cover"
        />
        <p className="image-desc max-lg:w-full w-[700px] text-lg text-justify">
          Discover a different side of Dubai an a fun-filled safari across the
          desert. Try sandboarding, dune bashing and a camel ride, with the
          option to add an electifying quad bike ride or immersive A1 Khayma
          Camp dinner experience to your adventure.
        </p>
      </div>
    </>
  );
};
export default TourImage;
