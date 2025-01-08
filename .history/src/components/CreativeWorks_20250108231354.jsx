import React, { useState, useEffect } from "react";
import './Component.css'
import { work1, work2, work3 } from "../assets/Index";
const images = [
  work1,work2,work3, work1,work2,work3];

const CreativeWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first "real" slide
  const totalSlides = images.length;
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024); // Tailwind's lg breakpoint is 1024px
    };

    handleResize(); // Initialize state on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Automatically transition slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Change slides every 3 seconds

    return () => {
      clearInterval(interval); // Clear interval on unmount
    };
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setCurrentIndex(totalSlides);
    } else if (currentIndex === totalSlides + 1) {
      setCurrentIndex(1);
    }
  
    
  };

  const getSlides = () => {
    return [
      images[images.length - 1], // Clone last slide to the start
      ...images, // Original slides
      images[0], // Clone first slide to the end
    ];
  };

  const slides = getSlides();

  return (
    <>
      <div
        id="work"
        className="py-8"
        style={{
          boxShadow:
            "inset 0 -300px 180px #1a1a19, inset 0 300px 130px #1a1a19",

          backgroundImage:
            "url('https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/669770eddbcf5f504ef99354_hero-01.jpg')",
        }}
      >
        <div className="text-white text-center w-full pb-14 px-5 pt-8 ">
          <p className="pb-3 flex items-center justify-center gap-3 text-base uppercase">
            {/* <img
            className="w-9"
            src="https://cdn.prod.website-files.com/656d560b812df0530768d62a/65743aacc4e2ecd7e6821381_icon-10.svg"
            alt=""
          /> */}
            We Are Proud of Our
          </p>
          <h1 className="text-5xl font-bold capitalize">Creative works</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 w-full container mx-auto pb-8">
          {/* Navigation Buttons */}
            {/* <div className="flex flex-row lg:flex-col items-center gap-4 max-lg:order-2">
              <button
                className="p-5 md:p-10 lg:p-14 bg-white rounded-3xl shadow"
                onClick={prevSlide}
              >
                <img
                  className="w-11"
                  src="https://cdn.prod.website-files.com/656d560b812df0530768d62a/65816f00926de9e066db73f0_arrow-icon-right.svg"
                  alt=""
                />
              </button>
              <button
                className="p-5 md:p-10 lg:p-14 bg-white rounded-3xl shadow"
                onClick={nextSlide}
              >
                <img
                  className="w-11"
                  src="https://cdn.prod.website-files.com/656d560b812df0530768d62a/65816f00c1d57744f80645f6_arrow-icon-left.svg"
                  alt=""
                />
              </button>
            </div> */}

          {/* Carousel */}
          <div className="relative flex overflow-hidden w-full lg:w-[900px] h-[60vh] lg:h-[100vh] lg:px-32">
            <div
              className="flex items-center transition-transform duration-[1000ms] ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (isLgScreen ? 458 : 390)
                }px)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((src, index) => (
                <div
                  key={index}
                  className={`max-lg:w-screen h-full px-3 lg:pr-52 flex-shrink-0 flex items-center justify-center transition-transform duration-[1600ms] ${
                    currentIndex === index ? "lg:scale-150" : "lg:scale-100"
                  }`}
                >
                  <div className="w-full h-full lg:w-[250px] lg:h-[70vh] p-6 lg:p-8 bg-white hover:bg-custom-gradient rounded-3xl overflow-hidden transition-all duration-500 ease-in-out"
                  >
                    <div className="overflow-hidden w-full h-full rounded-3xl">
                      <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 hover:-rotate-3 transition-transform duration-500 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeWorks;
