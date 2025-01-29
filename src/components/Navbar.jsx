import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo/512x512.png";
import { Link, useNavigate } from "react-router-dom";
import Headroom from 'react-headroom'
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const header = useRef(null)
  const [menu, setMenu] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

  const [targetElement, setTargetElement] = useState(null);

  useEffect(() => {
    // Find the target element by class name
    const element = document.getElementById("hero");
    setTargetElement(element);
  }, []);

  const { scrollYProgress } = useScroll({

    target: targetElement,
    offset: ["start start", "end end"],
  })
  const headerBg = useTransform(scrollYProgress, [0, 1], ["transparent", "transparent"])
  // const headerBg = useTransform(scrollYProgress, [0,1], ["black","transparent"])
  // const headerBg = useTransform(scrollYProgress, [0, 1], [0, 0.6])



  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenu(false);
    }
  };
  const handleScrollTo = (sectionId) => {
    navigate("/", { state: sectionId })
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClick = () => {
    setMenu(!menu);
  };

  const handleItemClick = () => {
    setMenu(false);
  };

  return (

    <div className="fixed z-[999] w-full">
      <motion.div className=" hidden md:flex w-full p-8 lg:px-28 ">
        <div className="px-10 w-full flex backdrop-blur-md bg-gray-500 bg-opacity-30 rounded-2xl justify-between   max-lg:gap-6 items-center shadow-xl  ">
          <div className=" lg:w-2/5 items-center flex justify-start  ">
            <nav className="flex  text-lg uppercase justify-between w-full  lg:pr-20 gap-8   hero-heading">
              <a onClick={() => handleScrollTo("services")} className=" cursor-pointer ">
                Services
              </a>
              <a onClick={() => handleScrollTo("work")} className=" cursor-pointer ">
                Work
              </a>
              <a onClick={() => handleScrollTo("about")} className=" cursor-pointer ">
                About
              </a>
              <a onClick={() => handleScrollTo("our-clients")} className=" cursor-pointer ">
                Clients
              </a>
              {/* <Link to={'/privacy-policy'} className=" cursor-pointer font-semibold">
              Policy
            </Link> */}
            </nav>
          </div>
          <a
            href="/"
            className="flex cursor-pointer order-first lg:order-none "
          >

            <img className="w-20 " src={logo} alt="" />{" "}

          </a>

          <div className="lg:w-2/5 inline-flex lg:justify-end  gap-3">
            {/* <a
              onClick={() => handleScrollTo("contact-us")}
              className="relative p-[2px] rounded-md"
              style={{
                background:
                  "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
              }}
            >
              <span
                className="block bg-[#1B1B1A]  px-4 py-2 rounded-md hover:bg-transparent transition-all duration-300"
                style={{
                  backgroundClip: "padding-box",
                }}
              >
                Contact Us
              </span>
            </a> */}

            <a
              href="https://www.instagram.com/sociallywiredinc/profilecard/?igsh=MTNnMnFzdWx1YW5pZQ%3D%3D"
              target="_blank"
              className="flex text-2xl items-center gap-2"
            >
              <img
                className="w-8"
                src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/6697510e294ac7131f0db08f_instagram.svg"
                alt="Instagram"
              />

            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/people/Socially-wired-Inc/61565652324656/?mibextid=LQQJ4d&rdid=FQoeOoh5RUUpgRxQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FCh4GsGhjoMJXrrVo%2F%3Fmibextid%3DLQQJ4d"
              className="flex text-2xl items-center gap-2"
            >
              <img
                className="w-8"
                src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/6697510ec7edab92c91c3113_facebook.svg"
                alt="Facebook"
              />

            </a>
            <a
              href="https://www.linkedin.com/company/socially-wired-inc/"
              className="flex text-2xl items-center gap-2"
              target="_blank"
            >
              <img
                className="w-8"
                src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/6697510fb122053d5e1a8d67_linkedin.svg"
                alt="LinkedIn"
              />

            </a>

          </div>
        </div>
      </motion.div>
      <div className="p-5 w-full">
        <div className="px-4 py-2 backdrop-blur-md bg-gray-500 bg-opacity-30 rounded-2xl   w-full  z-50 flex md:hidden items-center justify-between">
          <div>
            <Link
              to={"/"}
              className="flex cursor-pointer  title-font font-medium items-center text-gray-900 "
            >
              <span className="w-12 rounded-full">
                <img src={logo} alt="" />{" "}
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#contact-us"
              className="relative p-[2px] rounded-md max-sm:hidden"
              style={{
                background:
                  "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
              }}
            >
              <span
                className="block bg-[#1B1B1A] px-4 py-2 rounded-md hover:bg-transparent transition-all duration-300"
                style={{
                  backgroundClip: "padding-box",
                }}
              >
                Contact Us
              </span>
            </a>
            <div
            
              onClick={handleClick}
              className="bg-[#7959DA] p-3 rounded-full cursor-pointer hover:bg-[#ACA0CF]"
            >
              <GiHamburgerMenu className="" />
            </div>
          </div>
          {menu && (
            <div
              ref={dropdownRef}
              className="absolute w-[300px] top-[6rem] right-10 bg-[#362C52] border border-[#7959DA] rounded-2xl p-4 z-50"
            >
              <ul className="cursor-pointer flex flex-col">
                <a onClick={() => handleScrollTo("services")} className="mb-2">
                  Services
                </a>
                <a onClick={() => handleScrollTo("work")} className="mb-2">
                  Work
                </a>
                <a onClick={() => handleScrollTo("about")} >
                  About
                </a>
              </ul>
            </div>
          )}
        </div>
      </div>
      </div>


   

  );
};

export default Navbar;
