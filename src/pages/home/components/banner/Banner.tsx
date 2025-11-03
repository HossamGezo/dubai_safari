// Main Component
const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-image relative w-full h-[400px] bg-[url(./images/skyscrepper.jpg)] bg-no-repeat bg-cover bg-fixed max-md:bg-position-[45%] bg-position-[50%]">
        <div className="overly absolute inset-0 bg-black/50"></div>
        <p className="banner-desc absolute w-[90%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-5xl/relaxed text-center [-webkit-text-stroke:0.65px_white] font-jetbrains font-bold [word-spacing:10px] [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)] bg-linear-to-r from-white via-orange-400 to-white bg-clip-text text-transparent max-md:w-[95%] max-sm:text-xl ">
          DUBAI IS WAITING FOR YOU
        </p>
      </div>
    </section>
  );
};

export default Banner;
