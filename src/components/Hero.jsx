import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative pt-7  p-6 sm:pt-32 sm:p-8 lg:h-[100vh] h-[84vh] flex flex-col md:justify-center"
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
        <div className="sm:px-[3rem] flex flex-col lg:flex-row items-start gap-8 lg:gap-[10rem] justify-between">
          <div className="text-4xl lg:text-5xl font-semibold sm:text-center lg:text-left">
            Optimize and monetize social media marketing
          </div>
          <div className="text-2xl sm:text-center lg:text-left text-[#aca0cf]">
            Sociallywiredinc boosts creators' reach with curated content and
            tailored social media strategies for targeted audience growth.
          </div>
        </div>
        {/* Bottom Section */}
        <div
          className="mt-8 pb-8 sm:pb-16 lg:mt-16 text-[3.6rem]  sm:text-center  sm:text-8xl lg:text-[12rem] font-bold  text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
          }}
        >
          SociallyWired
        </div>
        <div className="flex justify-center items-center ">
          <button
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
              Request A Quote{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
