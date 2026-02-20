// Main Component
const Banner = () => {
  return (
    <section>
      <div className="relative w-full h-100 bg-[url(./images/skyscraper.jpg)] bg-no-repeat bg-cover md:bg-fixed max-md:bg-position-[45%] bg-position-[50%]">
        <div className="overlay absolute inset-0 bg-black/50"></div>
        <p className="absolute w-[90%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-5xl/relaxed text-center [-webkit-text-stroke:0.65px_white] font-jetbrains font-bold [word-spacing:10px] [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)] bg-linear-to-r from-white via-orange-400 to-white bg-clip-text text-transparent max-md:w-[95%] max-sm:text-xl select-none">
          DUBAI IS WAITING FOR YOU
        </p>
      </div>
    </section>
  );
};

export default Banner;
