import React from 'react'
import { BsScissors } from 'react-icons/bs'

function Home() {
    return ( 
        <div className='text-center text-white'>
            <h3 className='text-lg flex justify-center'>MEN  <span className='text-custom'>{<BsScissors />}</span>  ONLY</h3>
            <h1 className='text-6xl font-bold'>BLA<span className='text-custom'>TE</span></h1>
            <p>Unleash Your Style: Where Grooming Meets Glamour!</p>
            <br />
            <button className='bg-custom p-2 rounded-sm'>Book Appointment</button>
        </div>
     );
}

export default Home;