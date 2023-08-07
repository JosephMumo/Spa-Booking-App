import React from 'react'
import chair from '../images/chair.jpg'
import { PiDotsThreeOutlineBold } from 'react-icons/pi'


function Pricing() {
    return ( 
        <div className='relative grid grid-cols-1 md:grid-cols-2  h-screen'>
            <div className='w-full md:w-{50%}'>
                <img src={chair} alt='1' className='w-full h-screen object-cover' />
                <div className='overlay1'></div>
            </div>
            <div className='w-full md:w-{50%} text-white bg-neutral-900 h-screen p-14 md:p-26 '>
                <h1 className='text-3xl font-bold'>OUR PRICING</h1>
                <div className='text-custom flex justify-start'>
                    <PiDotsThreeOutlineBold size={30} />
                </div>
                <p className='mt-5 m-3'>At our barbershop, quality meets affordability. Experience expert haircuts and grooming services at unbeatable prices. Book now!</p>
                <table className='table-auto w-full  mt-5'>
                    <tbody>
                        <tr>
                            <td className='p-2 font-semibold'>HAIRCUT</td>
                            <td className='p-2 text-custom'>$100</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-semibold'>TRIM</td>
                            <td className='p-2 text-custom'>$75</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-semibold'>CLEAN SHAVE</td>
                            <td className='p-2 text-custom'>$110</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-semibold'>BODY MASSAGE</td>
                            <td className='p-2 text-custom'>$150</td>
                        </tr>
                        <tr>
                            <td className='p-2 font-semibold'>SPECIAL MIX CUT</td>
                            <td className='p-2 text-custom'>$175</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Pricing;