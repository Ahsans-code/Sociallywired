import React from 'react'
import { whitePattern } from '../assets/Index'
import Counter from './Counter'

export default function Statistics() {
    return (
        <div className='bg-black'
        // style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;" }}
        >
            <div className="grid grid-cols-4  rounded-md  p-4 lg:p-10 w-full text-clip bg-clip-text text-transparent "

            >
                <div className='flex flex-col items-center justify-center border-r'

                >
                    <p className='bg-custom-gradient text-lg md:text-2xl font-bold bg-clip-text text-clip text-transparent flex'

                        
                        ><Counter target={5} duration={2000}/>M+</p>
                    <p className='bg-custom-gradient max-md:text-sm bg-clip-text text-clip text-transparent'
                    
                    >Customer</p>
                </div>
                <div className='flex flex-col items-center justify-center border-r'>
                    
                    <p className='bg-custom-gradient text-lg md:text-2xl font-bold bg-clip-text text-clip text-transparent flex '
                    ><Counter target={450} duration={1500}/>M+</p>
                    <p className='bg-custom-gradient max-md:text-sm bg-clip-text text-clip text-transparent' 
                    >Coverage</p>
                </div>
                <div className='flex flex-col items-center justify-center border-r'>
                    <p className='bg-custom-gradient text-lg md:text-2xl font-bold bg-clip-text text-clip text-transparent flex '
                    ><Counter target={20} duration={1500}/>%</p>
                    <p className='bg-custom-gradient max-md:text-sm bg-clip-text text-clip text-transparent' 
                   >Earning</p> 
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <p className='bg-custom-gradient text-lg md:text-2xl font-bold bg-clip-text text-clip text-transparent text flex'
                    ><Counter target={9} duration={1500}/>%</p>
                    <p className='bg-custom-gradient max-md:text-sm bg-clip-text text-clip text-transparent'
                    >Interest</p>
                </div>
            </div>
            {/* <div
                className=' w-full bg-cover bg-center  h-16  '
                style={{
                    backgroundImage: `url(${whitePattern})`
                }}>

            </div> */}

        </div>
    )
}
