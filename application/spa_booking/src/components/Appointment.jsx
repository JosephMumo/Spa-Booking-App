import React from 'react'
import { PiDotsThreeOutlineBold } from 'react-icons/pi'


function Appointment() {
    return ( 
        <div className='bg-neutral-950 p-8 w-full text-white text-center'>
            <h1 className='text-3xl font-bold'>MAKE AN APPOINTMENT</h1>
            <div className='w-full flex justify-center text-custom mb-5'>
                <PiDotsThreeOutlineBold size={30}/>
            </div>
            <form className='flex flex-col p-5 md:p-20'>
                <div className='grid grid-cols-2 gap-5 gap-y-5 mb-5'>
                    <input type='text' placeholder='NAME' className='h-10 pl-2 rounded-md bg-black' />
                    <input type='text' placeholder='PHONE'className='h-10 pl-2 rounded-md bg-black' />
                    <input type='date' placeholder='DATE' className='h-10 pl-2 rounded-md bg-black'/>
                    <input type='time' placeholder='TIME' className='h-10 pl-2 rounded-md bg-black'/>
                </div>
                <textarea placeholder='MESSAGE' className='h-48 bg-black p-2 rounded-md' />
                <button className='bg-custom w-36 p-1 mt-5 rounded-md'>Submit </button>
            </form>
        </div>
     );
}

export default Appointment;