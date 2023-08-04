import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Carous() {
    return ( 
        <Carousel 
        showThumbs={false}
        autoPlay ={true}
        infiniteLoop= {true}>
            <div className='mt-5 p-10 px-16'>
                <p className='mt3'>"I absolutely love my experience at this barbershop! The skilled barbers create stylish and precise cuts every time. Friendly atmosphere, great service, and top-notch grooming. Highly recommend!"</p>
                <br />
                <h3 className='text-2xl font-semibold text-custom'>Jackson Smith</h3>
                <h5 className='mt-3 font-bold'>Haircut Client</h5>
            </div>
            <div className='mt-5 p-10 px-16'>
                <p className='mt-3'>"I am thrilled with the exceptional service at Blate Barbershop! The skilled barbers provided a top-notch haircut and a welcoming atmosphere. Highly recommended for a perfect grooming experience!"</p>
                <br />
                <h3 className='text-2xl font-semibold text-custom'>Olivia Johnson</h3>
                <h5 className='mt-3 font-bold '>Massage Client</h5>
            </div>
            <div className='mt-5 p-10 px-16'>
                <p className='mt-3'>"I can't recommend this barbershop enough! The skilled barbers here create masterpieces with every cut. A welcoming atmosphere and excellent service make it my go-to place for grooming. Simply the best!"</p>
                <br />
                <h3 className='text-2xl font-semibold text-custom'>Ethan Williams</h3>
                <h5 className='mt-3 font-bold'>Trim Client</h5>
            </div>
            <div className='mt-5 p-10 px-16'>
                <p className='mt-3'>"Absolutely thrilled with my experience at this barbershop! The talented stylists created the perfect haircut that exceeded my expectations. Friendly staff, great atmosphere, and top-notch service. Highly recommended!"</p>
                <br />
                <h3 className='text-2xl font-semibold text-custom'>Emily Brown</h3>
                <h5 className='mt-3 font-bold'>Spa Client</h5>
            </div>
        </Carousel>
     );
}

export default Carous;