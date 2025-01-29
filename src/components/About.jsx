import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdDoubleArrow } from "react-icons/md";
export default function About() {
    const navigate = useNavigate()
    const handleScrollTo = (sectionId) => {
        navigate("/", { state: sectionId })
    }
    return (
        <div id='about' className='relative'>
            <div className='absolute -top-12 flex items-center justify-center w-full '>
                <div className='p-2 rounded-full shadow-2xl bg-custom-gradient-br'
                onClick={()=>handleScrollTo("work")}
                 >
                    <div className='p-4 bg-[#1b1b1a] rotate-90 rounded-full'>
                        <MdDoubleArrow className='bg-clip-text text-clip text-transparent '
                        />
                    </div>
                </div>


            </div>
            <h1 className="text-5xl font-bold capitalize bg-white text-center text-[#1b1b1a] pt-14">About us</h1>

            <div className='bg-white grid grid-cols-1 lg:grid-cols-2 px-5 md:px-10 lg::px-28 py-10 lg:py-20'>

                <div className='flex flex-col gap-6 text-black md:pr-32'>
                    <h1 className='text-black text-4xl'>Amplify Optimize Monetize Your Social
                        Platforms</h1>
                    <p className='text-black text-xl'>Sociallywiredinc is a group of dedicated and innovative social media management experts that works with various content creators to help them raise the scope and reach of their platforms through curated, engaging content and optimized media marketing strategies. We owe our success to our ability to use ever-evolving approaches to create personalized game plans for each client and their target demographic.</p>
                    <a
                        onClick={() => handleScrollTo("contact-us")}
                        className="relative p-[2px] rounded-md w-fit bg-custom-gradient-tr"
                        
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
                <div className='max-lg:mt-10'>
                    <img className='rounded-lg w-full h-96 object-cover' src="https://cdn.prod.website-files.com/64383d8e5c3c91d9b995b8b7/64428244fee77f6d69cb0416_team-p-800.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
