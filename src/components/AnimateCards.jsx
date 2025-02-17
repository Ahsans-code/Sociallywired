import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { animatebg, starbg, whitePattern } from "../assets/Index";

export default function AnimateCards() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800); // Adjust breakpoint as needed
        };
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const leftCardX = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? ["-20%", "0%"] : ["-55%", "0%"]
    );

    const rightCardX = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? ["20%", "0%"] : ["55%", "0%"]
    );
    const leftCardY = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? ["-30%", "0%"] : ["-10%", "0%"]
    );

    const rightCardY = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? ["30%", "0%"] : ["-10%", "0%"]
    );
    const leftCardRotate = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [0, 0] : [-22, 0]
    );
    const rightCardRotate = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [0, 0] : [22, 0]
    );
    const centerCardRotate = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [0, 0] : [5, 0]
    );

    // Transformations for cards
    // const leftCardX = useTransform(scrollYProgress, [0, 1], ["-120%", "0%"]);
    // const rightCardX = useTransform(scrollYProgress, [0, 1], ["120%", "0%"]);
    // const rightCardY = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
    // const leftCardY = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
    // const leftCardRotate = useTransform(scrollYProgress, [0, 1], [-22, 0]);
    // const rightCardRotate = useTransform(scrollYProgress, [0, 1], [22, 0]);
    // const centerCardRotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
    // const blurOpacity = useTransform(scrollYProgress, [0, 1], [2, 0])

    return (
        <div className="h-120vh">
            <div
                ref={containerRef}
                id="hero"
                className="h-[210vh] relative  flex   justify-center "
            >

                <div style={{ backgroundImage: `url(${starbg})` }} className="h-[100vh] w-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat sticky top-0">

                    <div
                        className=" absolute  h-full w-screen max-w-screen   flex items-end pb-10  justify-center   "

                    >
                        <p

                            style={{
                                // textShadow: "0px 0px #6ae,0px 12px #a38,0px 23px #fff694",
                                textShadow: "0px 0px #a38,0px 12px #6ae,0px 23px #fff694",
                                // textShadow:"10px 40px #a388,10px 40px #6ae,10px 40px #fff",
                                // textShadow:"0 0 10px #a388f5, 0 0 20px #6ae8ff, 0 0 30px #fff694, 0 0 40px #fc67ff",
                                // textShadow:
                                //     "0 0 10px #a388f5, 0 0 20px #6ae8ff, 0 0 30px #fff694, 0 0 40px #fc67ff",
                                backgroundImage:
                                    "linear-gradient(0deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                            }}
                            className="max-sm:text-[3rem] text-center pt-80 text-7xl  lg:text-[12rem] font-bold text-transparent bg-clip-text overflow-hidden  ">

                            SociallyWired
                        </p>
                    </div>
                    <div className="relative flex items-center pt-20   justify-center">

                        {/* Left Card */}
                        <motion.div
                            style={{ x: leftCardX, rotate: leftCardRotate, y: leftCardY }}
                            className="absolute w-52 md:w-80 h-80 md:h-80   rounded-lg shadow-lg"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/6733c29bb865e7a07810a53a/67548c5ce5c867c41632a4a7_img-hero-01.avif"
                                alt="Left Card"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </motion.div>

                        {/* Center Card */}
                        <motion.div
                            style={{ rotate: centerCardRotate }}
                            className="absolute w-52 md:w-80 h-80 md:h-80   rounded-lg shadow-lg "
                        >
                            <img
                                src="https://cdn.prod.website-files.com/6733c29bb865e7a07810a53a/673a28cf2b5f982ca7d7791f_img-04%202.avif"
                                alt="Center Card"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </motion.div>

                        {/* Right Card */}
                        <motion.div
                            style={{ x: rightCardX, rotate: rightCardRotate, y: rightCardY }}
                            className="absolute w-52 md:w-80 h-80 md:h-80   rounded-lg shadow-lg z-10"
                        >
                            <img
                                src="https://cdn.prod.website-files.com/6733c29bb865e7a07810a53a/6755d01401bc54196e1de60a_young-black-green-head.avif"
                                alt="Right Card"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </motion.div>
                    </div>
                </div>

            </div>
            <div
                className=' w-full bg-cover bg-center  h-16  '
                style={{
                    backgroundImage: `url(${whitePattern})`
                }}>

            </div>
        </div>
    );
}
