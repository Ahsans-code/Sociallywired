import React from 'react'
import { heroVideo, RoundCircle, whitePattern } from '../assets/Index'
import { useNavigate } from 'react-router-dom'

export default function Hero2() {
    const navigate = useNavigate()
    const handleScrollTo = (sectionId) => {
        navigate("/", { state: sectionId })
    }
    return (
        <div className='relative h-[110vh] w-full flex flex-col bg-black items-center justify-between  '>

            {/* <video className='absolute w-full inset-0 h-full object-cover z-10' autoPlay loop src={heroVideo}>
            </video> */}
            {/* <div className='absolute bg-gradient-to-tl from-[#fff694 ] from-[#000] to-[#fff694 ] inset-0 z-20  '></div> */}
            <div className='w-full  bg-black h-full flex flex-col gap-10 justify-center items-center z-30 relative '
            // style={{ backgroundImage: "background-image: linear-gradient(to right, #132491, #462499, #6821a0, #871da4, #a415a7);)" }}
            >
                <div
                    className="  text-center text-6xl lg:text-8xl    text-transparent bg-white  bg-clip-text flex max-md:flex-col bg-custom-gradient items-center justify-center uppercase hero-heading font-semibold pt-20"
                // style={{
                //     backgroundImage:
                //         "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                // }}
                // style={{
                //     textShadow:'0px 0px 10px #6ae8ff'
                // }}
                // style={{
                //     textShadow:'0px 0px 10px #000'
                // }}
                >

                    {/* <p className='flex items-center flex-wrap'><img className='w-16 lg:w-[90px]   animate-spin duration-1000   ' src={RoundCircle} alt="" />ptimize & </p><br />
                    <p className='flex'>m<img className='w-16 lg:w-[90px]   animate-spin duration-1000   ' src={RoundCircle} alt="" />nitized</p> */}
                    <span className='flex items-center pr-4 bg-clip-text text-transparent bg-custom-gradient'
                    // style={{
                    //     backgroundImage:
                    //         "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    // }}
                    ><img className='w-16 lg:w-[90px]   animate-spin duration-1000   ' src={RoundCircle} alt="" />Ptimize & </span>M<img className='w-16 lg:w-[90px]   animate-spin duration-1000   ' src={RoundCircle} alt="" /><span className='bg-clip-text text-transparent bg-custom-gradient'>netize</span>

                </div>
                <p className='text-lg md:text-2xl px-6 lg:px-44 text-center '> Sociallywiredinc boosts creators' reach with curated content and
                    tailored social media strategies for targeted audience growth.</p>
                <a
                    onClick={() => handleScrollTo("contact-us")}
                    className="relative p-[2px] rounded-md bg-custom-gradient-tr"

                >
                    <span
                        className="block bg-[#1B1B1A]  px-4 py-2 rounded-md hover:bg-transparent transition-all duration-300"
                        style={{
                            backgroundClip: "padding-box",
                        }}
                    >
                        Contact Us
                    </span>
                </a>
            </div>
            <div
                className=' w-full bg-cover bg-center bg-black  h-16  '
                style={{
                    backgroundImage: `url(${whitePattern})`
                }}>

            </div>
            {/* <img className='bg-black ' src={whitePattern} alt="" /> */}
        </div>
    )
}
