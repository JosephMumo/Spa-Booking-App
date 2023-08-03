import React from 'react'

function Hero() {
    return ( 
        <div className="bg-neutral-950 grid grid-cols-1 md:grid-cols-3 text-center py-3 md:divide-x">
            <section className='p-3'>
                <h4 className='text-custom text-lg'>OUR ADDRESS</h4>
                <p>Coast Rika Lane, California</p>
            </section>
            <section className='p-3'>
                <h4 className='text-custom text-lg'>CONTACT US</h4>
                <p>+8801638-719578</p>
            </section>
            <section className='p-3'>
                <h4 className='text-custom text-lg'>OPENING TIME</h4>
                <p>Sunday to Friday(8AM-8PM)</p>
            </section>
        </div>
    );
}

export default Hero;