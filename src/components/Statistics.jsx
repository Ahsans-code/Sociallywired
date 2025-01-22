import React from 'react'
import { whitePattern } from '../assets/Index'

export default function Statistics() {
    return (
        <div className=''
        // style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;" }}
        >
            <div className="grid grid-cols-4  rounded-md  p-4 lg:p-10 w-full text-clip bg-clip-text text-transparent "

            >
                <div className='flex flex-col items-center justify-center border-r'

                >
                    <p className='text-lg md:text-2xl font-bold bg-clip-text text-clip text-transparent'

                        style={{
                            backgroundImage:
                                "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                        }}
                        >5M+</p>
                    <p className='max-md:text-sm bg-clip-text text-clip text-transparent'
                    style={{
                        backgroundImage:
                            "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}
                    >Customer</p>
                </div>
                <div className='flex flex-col items-center justify-center border-r'>
                    <p className='text-lg md:text-2xl font-bold bg-clip-text text-clip text-transparent'
                     style={{
                        backgroundImage:
                            "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}>450M+</p>
                    <p className='max-md:text-sm bg-clip-text text-clip text-transparent' 
                    style={{
                        backgroundImage:
                            "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}>Coverage</p>
                </div>
                <div className='flex flex-col items-center justify-center border-r'>
                    <p className='text-lg md:text-2xl font-bold bg-clip-text text-clip text-transparent '
                     style={{
                        backgroundImage:
                            "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}>22%</p>
                    <p className='max-md:text-sm bg-clip-text text-clip text-transparent' 
                    style={{
                        backgroundImage:
                            "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}>Earning</p> 
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <p className='text-lg md:text-2xl font-bold bg-clip-text text-clip text-transparent'
                     style={{
                        backgroundImage:
                            "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}>8.03%</p>
                    <p className='max-md:text-sm bg-clip-text text-clip text-transparent'
                    style={{
                        backgroundImage:
                            "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}>Interest</p>
                </div>
            </div>
            <div
                className=' w-full bg-cover bg-center  h-16  '
                style={{
                    backgroundImage: `url(${whitePattern})`
                }}>

            </div>

        </div>
    )
}
