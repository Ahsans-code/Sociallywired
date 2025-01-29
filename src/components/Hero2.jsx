import React, { useEffect, useState } from 'react'
import { HeroAnimation, HeroAnimation2, heroVideo, RoundCircle, whitePattern } from '../assets/Index'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

export default function Hero2() {
    const navigate = useNavigate()
    const [rotate, setRotate] = useState(true)
    const handleScrollTo = (sectionId) => {
        navigate("/", { state: sectionId })
    }



    return (
        <div className='relative h-[110vh] w-full flex px-20  bg-black items-center justify-between  '>

            {/* <video className='absolute w-full inset-0 h-full object-cover z-10' autoPlay loop src={heroVideo}>
            </video> */}
            {/* <div className='absolute bg-gradient-to-tl from-[#fff694 ] from-[#000] to-[#fff694 ] inset-0 z-20  '></div> */}
            <div className='w-1/2  bg-black h-full flex flex-col gap-10 justify-center   z-30 relative '
            // style={{ backgroundImage: "background-image: linear-gradient(to right, #132491, #462499, #6821a0, #871da4, #a415a7);)" }}
            >
                <div
                    className=" w-fit p-0 m-0 text-6xl lg:text-8xl    text-transparent bg-white  bg-clip-text flex flex-col bg-custom-gradient   uppercase hero-heading font-semibold pt-20"

                >
                    <span className='flex items-center pr-4 bg-clip-text text-transparent bg-custom-gradient'>
                        OPtimize
                    </span>

                    <span className='flex items-center pr-4 bg-clip-text text-transparent bg-custom-gradient'>& M
                        <img className='w-16 lg:w-[90px]   animate-spin duration-1000   ' src={RoundCircle} alt="" />
                        nitize
                    </span>
                </div>
                <p className='text-lg md:text-2xl lg:pr-20 '>Sociallywiredinc boosts creators' reach with curated content and tailored social media strategies for targeted audience growth.</p>
                <a
                    onClick={() => handleScrollTo("contact-us")}
                    className="relative w-fit p-[2px] rounded-md bg-custom-gradient-tr"

                >
                    <span
                        className="block  bg-[#1B1B1A]  px-4 py-2 rounded-md hover:bg-transparent transition-all duration-300"
                        style={{
                            backgroundClip: "padding-box",
                        }}
                    >
                        Contact Us
                    </span>
                </a>
            </div>
            <div className="flex justify-start pr-24 items-start h-screen  relative">
          

                {/* Glowing Background (Behind the Bulb) */}
                <div className='absolute h-screen flex items-center justify-center'>
                <motion.div
                    className="w-[400px] h-[400px] rounded-full bg-custom-gradient-tr opacity-30 blur-3xl"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [0.7, 1, 0.8], opacity: [0.2, 0.6, 0.4] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                ></motion.div>
                </div>
               

                {/* Animated Bulb */}
                <div className='pt-20 flex items-center justify-center'>
                <motion.img
                    src={HeroAnimation2} // Make sure bulb.png is inside public folder
                    alt="Hanging Bulb"
                    className="w-[400px] drop-shadow-xl relative z-10"
                    initial={{ rotate: -10, y: -10 }}
                    animate={{
                        rotate: [10, -10, 10], // Swing effect
                        y: [0, 5, 0], // Slight vertical movement
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                />
                </div>
            </div>
            {/* <div
                className=' w-full bg-cover bg-center bg-black  h-16  '
                style={{
                    backgroundImage: `url(${whitePattern})`
                }}>

            </div> */}
            {/* <img className='bg-black ' src={whitePattern} alt="" /> */}
        </div>
    )
}
