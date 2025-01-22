import React from 'react'
import { whitePattern } from '../assets/Index'

export default function Statistics() {
    return (
        <div className='    ' style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;" }}>
            <div className="grid grid-cols-4  rounded-md text-white p-4 lg:p-10 w-full ">
                <div className='flex flex-col items-center justify-center border-r'>
                    <p className='text-lg md:text-2xl font-bold'>5M+</p>
                    <p className='max-md:text-sm'>Customer</p>
                </div>
                <div className='flex flex-col items-center justify-center border-r'>
                    <p className='text-lg md:text-2xl font-bold'>450M+</p>
                    <p className='max-md:text-sm'>Coverage</p>
                </div>
                <div className='flex flex-col items-center justify-center border-r'>
                    <p className='text-lg md:text-2xl font-bold'>22%</p>
                    <p className='max-md:text-sm'>Earning</p>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <p className='text-lg md:text-2xl font-bold'>8.03%</p>
                    <p className='max-md:text-sm'>Interest</p>
                </div>
            </div>
            <div 
            className=' w-full bg-cover bg-center h-16 '
            style={{
                backgroundImage:`url(${whitePattern})`
            }}></div>
            
        </div>
    )
}
