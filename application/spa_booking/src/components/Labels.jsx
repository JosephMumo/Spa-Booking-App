import React from 'react'
import chanel from '../images/Dior.jpg'
import Giv from '../images/Giv.jpg'
import GCC from '../images/GCC.jpg'
import lw from '../images/DG.jpg'

function Labels() {
    return ( 
        <div className='bg-black grid grid-cols-4 place-items-center p-2'>
            <img src={chanel} alt='1' className='w-24 md:w-36' />
            <img src={Giv} alt='2' className='w-24 md:w-36' />
            <img src={GCC} alt='3' className='w-24 md:w-36' />
            <img src={lw} alt='4' className='w-24 md:w-36' />
        </div>
     );
}

export default Labels;