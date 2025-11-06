const About = () => {
  return (
    <>
      <div className="about container mx-auto pt-10 h-[calc(100vh-99.02px)] p-2">
        <h1 className="about-head text-5xl text-[#333] pb-3 border-b-2 w-fit pr-5">About This App</h1>
        <p className="about-desc text-xl my-5 tracking-wide">
          This app is all about booking safari desert tour in Dubai
        </p>
        <p className="about-version"> <strong className="text-xl">Version</strong>: 1.0.0</p>
      </div>
    </>
  );
};

export default About;
