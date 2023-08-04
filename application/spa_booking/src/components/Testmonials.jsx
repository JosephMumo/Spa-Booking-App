import React from 'react'
import { PiDotsThreeOutlineBold } from 'react-icons/pi'
import Carousel from './Carousel';

function Tesmonials() {
    return ( 
        <div className='w-full h-auto bg-black text-white text-center p-8'>
            <h1 className='text-3xl font-bold'>TESTMONIALS</h1>
            <div className='w-full flex justify-center text-custom mb-5'>
                <PiDotsThreeOutlineBold size='30px' />
            </div>
            <Carousel />
        </div>
    );
}

export default Tesmonials;