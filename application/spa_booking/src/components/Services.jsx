import React from 'react'
import dark from '../images/dark.jpg'
import { PiDotsThreeOutlineBold } from 'react-icons/pi'
import { BiDownArrowCircle } from 'react-icons/bi'
import barber from '../images/barber.png'
import massage from '../images/massage.png'
import spa from '../images/spa.png'
import trim from '../images/trim.png'

function Services() {
    const styles = {
        backgroundImage: `url(${dark})`
    }

    const Data = [
        {
            id: 1,
            imgUrl: `${barber}`,
            title:'HAIRCUT',
            description :'Transforming hair with precision, creativity, and impeccable style for all.'
        },
        {
            id: 2,
            imgUrl: `${massage}`,
            title:'MASSAGE',
            description :'Relaxing and rejuvenating bodywork, tailored to your unique needs.'
        },
        {
            id: 3,
            imgUrl: `${trim}`,
            title:'TRIM',
            description :'Trimming hair with finesse, precision, and attention to detail.'
        },
        {
            id: 4,
            imgUrl: `${spa}`,
            title:'SPA',
            description :'Luxurious retreat, offering relaxation, and pampering treatments for all.'
        }
    ]
    
    return (
        <div className='p-8  text-center text-white relative bg-fixed xl:h-screen' style={styles} id='services'>
            <h1 className='mt-6 text-3xl font-bold'>OUR SERVICES</h1>
            <div className='w-full grid place-items-center text-custom'>
                <PiDotsThreeOutlineBold size="30px" />
            </div>
            <p className='my-3'> Experience expert haircuts, beard trims, shaves, and styling by skilled professionals.</p>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 place-items-center'>
                { Data.map(item => {
                    return (<div className='text-center h-auto w-68 gap-1 rounded-sm bg-transparent  outline-custom place-items-center p-3 py-5 mt-3 hover:border border-custom'
                        key={item.id}>
                        <div className='w-full flex justify-center'>
                            <img src={item.imgUrl} alt='1' />
                        </div>
                        <br />
                        <h3 className='text-xl font-semibold'>{item.title}</h3>
                        <br />
                        <p>{item.description}</p>
                        <br />
                        <div className='flex justify-center mt-3'>
                            <BiDownArrowCircle size={28} />
                        </div>
                        <br />
                    </div>)
                })}
            </div>
        </div>
    );
}

export default Services;