import React from "react";
import "./InfiniteSlider.css";
import { slider1,slider2,slider3,slider4,slider5,slider7,slider8 } from "../assets/Index";


const sliderImages = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider7,
  slider8,
];

const InfiniteSlider = () => {
  return (
    <div className="slider-container py-16 bg-gradient-to-b from-[#141412] to-[#1A1A19]">
      <h1 className="text-5xl font-bold capitalize text-center">Our Clients</h1>
      <div className="slider-track">
        {/* Map through images for the main slides */}
        {sliderImages.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {/* Duplicate images for seamless animation */}
        {sliderImages.map((image, index) => (
          <div key={`duplicate-${index}`} className="slide">
            <img src={image} alt={`Duplicate Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
