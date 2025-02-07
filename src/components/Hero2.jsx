import React, { useEffect, useState } from 'react'
import { HeroAnimation, HeroAnimation2, heroVideo, RoundCircle, sociallyHero, whitePattern } from '../assets/Index'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

export default function Hero2() {
    const navigate = useNavigate()
    const [rotate, setRotate] = useState(true)
    const handleScrollTo = (sectionId) => {
        navigate("/", { state: sectionId })
    }



    return (
        <div className='relative h-[110vh] w-full flex max-md:flex-col px-4 md:px-10 xl:px-20  bg-black items-center justify-between  '>
            <div className='w-full md:w-1/2 max-md:pt-24 pt-16  bg-black md:h-full flex flex-col gap-4  justify-center  relative '
            >
                 <div className='absolute  w-full h-screen  flex  max-md:pb-40 items-center md:pb-32 justify-center'>
                    <motion.div
                        className="w-60 h-10 md:w-[380px] md:h-[100px] rounded-full bg-custom-gradient-tr opacity-30 blur-3xl"
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
                <img src={sociallyHero} alt="" className=' h-fit' />
                <p className='text-lg md:text-2xl lg:pr-20 max-md:text-center '>
                    Sociallywiredinc boosts creators' reach with curated content and tailored social media strategies for targeted audience growth.
                </p>
                <div className='w-full flex max-md:justify-center'>
                <a
                    onClick={() => handleScrollTo("contact-us")}
                    className="relative w-fit p-[2px] max-md:mt-3 rounded-md bg-custom-gradient-tr"

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
                
            </div>
            <motion.div
                animate={{ y: [-100, 0, -10, 0] }}
                transition={{ duration: 1.5, repeat: false, ease: 'easeInOut' }}
                className="flex justify-start  items-start  h-[70vh] md:h-screen w-full md:w-1/2 z-10 relative overflow-hidden">

                {/* Glowing Background (Behind the Bulb) */}
                <div className='absolute  w-full h-screen  flex  max-md:pb-80 md:pt-10 items-center justify-center'>
                    <motion.div
                        className="w-60 h-60 md:w-[320px] md:h-[320px] xl:w-[400px] xl:h-[400px] rounded-full bg-custom-gradient-tr opacity-30 blur-3xl"
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
                <div className='absolute -translate-y-40 md:-translate-y-16  w-full h-screen flex max-md:pb-64 items-center justify-center'>
                    <motion.img
                        src={HeroAnimation2} // Make sure bulb.png is inside public folder
                        alt="Hanging Bulb"
                        className="w-[400px] drop-shadow-xl relative z-10"
                        initial={{ rotate: -10, y: -10 }}
                        animate={{
                            rotate: [10, -10, 10], // Swing effect
                            y: [0, 5, 0], // Slight vertical movement
                            transformOrigin: "top"
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </motion.div>
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
