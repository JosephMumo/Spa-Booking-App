import React, {useContext} from 'react'
import { PiDotsThreeOutlineBold } from 'react-icons/pi'
import { myContext } from '../context/AppContext';


function Appointment() {
    const { appointment, setAppointment, data, setData, handleChange, handleSubmit } = useContext(myContext)

    
    return ( 
        <div className='bg-neutral-950 p-8 w-full text-white text-center' id='appointments'>
            <h1 className='text-3xl font-bold'>MAKE AN APPOINTMENT</h1>
            <div className='w-full flex justify-center text-custom mb-5'>
                <PiDotsThreeOutlineBold size={30}/>
            </div>
            <form className='flex flex-col p-5 md:p-20' onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-5 gap-y-5 mb-5'>
                    <input onChange={handleChange} type='text' name='fname' value={data.fname} placeholder='NAME' className='h-10 pl-2 rounded-md bg-black' />
                    <input onChange={handleChange} type='text' name='phone' value={data.phone} placeholder='PHONE'className='h-10 pl-2 rounded-md bg-black' />
                    <input onChange={handleChange} type='date' name='date' value={data.date} placeholder='DATE' className='h-10 pl-2 rounded-md bg-black'/>
                    <input onChange={handleChange} type='time' name='time' value={data.time} placeholder='TIME' className='h-10 pl-2 rounded-md bg-black'/>
                </div>
                <textarea onChange={handleChange} name='message' value={data.message} placeholder='MESSAGE' className='h-48 bg-black p-2 rounded-md' />
                <button className='bg-custom w-36 p-1 mt-5 rounded-md'>Submit </button>
            </form>
        </div>
     );
}

export default Appointment;