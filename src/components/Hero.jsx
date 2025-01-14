import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative pt-28  p-6 sm:pt-32 sm:p-8 lg:h-[100vh] h-[700px] flex flex-col md:justify-center"
    >
      {/* Background Layer */}

      <div
        className="absolute inset-0 bg-cover bg-center shadow-box-shadow-mobile md:shadow-box-shadow-desktop"
        style={{

          backgroundImage:
            "url('https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/669770eddbcf5f504ef99354_hero-01.jpg')",
        }}
      ></div>
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="sm:px-[3rem]  lg:pt-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-[10rem] justify-between">
          <div className="text-4xl lg:text-5xl font-semibold sm:text-center lg:text-left">
            Optimize and monetize social media marketing
          </div>
          <div className="max-lg:text-2xl max-lg:font-semibold sm:text-center lg:text-left text-white max-lg:text-[#aca0cf] ">
            Sociallywiredinc boosts creators' reach with curated content and
            tailored social media strategies for targeted audience growth.
          </div>
        </div>
        {/* Bottom Section */}
        <div
          className="w-full mt-8 pb-8 sm:pb-16 lg:mt-16 max-sm:text-[3.6rem] text-center text-6xl  lg:text-8xl lg:text-[12rem] font-bold  text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
          }}
        >
          Socially Wired
        </div>
        <div className="flex justify-center items-center ">
          <a
            href="#contact-us"
            className=" relative p-[2px] rounded-md"
            style={{
              background:
                "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
            }}
          >
            <span
              className="block text-xl bg-[#1B1B1A] px-5 py-3 rounded-md hover:bg-transparent transition-all duration-300"
              style={{
                backgroundClip: "padding-box",
              }}
            >
              Contact Us
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
