import React from 'react'
import cut from '../images/cut.jpg'

function Space() {
    return ( 
        <div className='relative grid grid-cols-1 md:grid-cols-2  h-screen'>
            <div className='w-full md:w-{50%}'>
                <img src={cut} alt='1' className='w-full h-screen object-cover' />
                <div className='overlay1'></div>
            </div>
            <div className='w-full md:w-{50%} text-white bg-neutral-900 h-auto p-14 py-32 '>
                <h1 className='text-2xl font-semibold md:text-3xl'>WELCOME TO BLATE</h1>
                <br />
                <p className='text-custom mt-5'>Step into style and indulge in precision cuts at our inviting barbershop your ultimate grooming destination.</p>
                <br />
                <p className='mt-5'> 
                    At our barbershop, we pride ourselves on delivering top-notch grooming services in a laid-back atmosphere.
                     Our skilled barbers stay ahead of trends to provide you with the latest styles, ensuring you leave feeling confident and looking your best
                </p>
                <br />
                <button className='bg-custom p-2 rounded mt-5'>More About Us</button>
            </div>
        </div>
     );
}

export default Space;