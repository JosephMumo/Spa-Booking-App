import React from 'react'
import { PiDotsThreeOutlineBold } from 'react-icons/pi'
import pic1 from '../images/emp1.jpg'
import pic2 from '../images/emp2.jpg'
import pic3 from '../images/emp3.jpg'
import pic4 from '../images/emp5.jpg'

function Staff() {
    return ( 
        <div className='text-center text-white w-full p-8 bg-black'>
            <h1 className='text-3xl font-bold'>OUR STAFFS</h1>
            <div className='w-full flex justify-center'>
                <PiDotsThreeOutlineBold size={30} className='text-custom'/>
            </div>
            <section className='mt-5 grid grid-cols-2 place-items-center gap-y-10 p-3'>
                <div>
                    <img src={pic1} alt='1' className='w-44 md:w-64' />
                    <h4 className='font-bold'>Jason Daniel</h4>
                    <p className='italic text-custom'>Barber</p>
                </div>
                <div>
                    <img src={pic2} alt='2' className='w-44 md:w-64' />
                    <h4 className='font-bold'>Jayne Jonathan</h4>
                    <p className='italic  text-custom'>Spa Specialist</p>
                </div>
                <div>
                    <img src={pic3} alt='3' className='w-44 md:w-64' />
                    <br />
                    <h4 className='font-bold'>Olivia Hadson</h4>
                    <p className='italic  text-custom'>Therapist</p>
                </div>
                <div>
                    <img src={pic4} alt='4' className='w-44 md:w-64' />
                    <h4 className='font-bold'>Steve Smith</h4>
                    <p className='italic  text-custom'>Barber</p>
                </div>
            </section>
        </div>
     );
}

export default Staff;