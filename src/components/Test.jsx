import React, { useEffect, useState } from 'react'
import './Component.css'
import { starbg } from '../assets/Index'
export default function Test() {
    // const [animate, setanimate] = useState(false)


    return (
        <div className='w-full h-screen flex flex-col md:flex-row justify-end bg-black '>
            <div
            style={{backgroundImage:`url(${starbg})`}} className="flex flex-1 justify-center items-center bg-cover bg-center bg-no-repeat ">
                <h1
                    className='text-center text-7xl font-bold  text-transparent bg-clip-text'
                    style={{
                        backgroundImage:
                            "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}>Socially Wired
                </h1>
            </div>
            <div className={`h-screen w-full md:w-1/2 bg-cover bg-center bg-no-repeat `} style={{ backgroundImage: `url(${"https://kota-content.b-cdn.net/app/uploads/2024/02/blog-header.webp"})  ` }}></div>

        </div>
    )
}
