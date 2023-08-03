import React from 'react'
import Header from './Header';
import Logo from '../images/pic3.jpg'
import Home from './Home';

function Landing() {
    
    return ( 
        <div className='relative '>
            <img src={Logo} className='w-full h-screen object-cover' />
            <div className='overlay'></div>
            <div className='absolute text-white top-0 w-full py-2'>
                <Header />
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <Home />
            </div>
        </div>
     );
}

export default Landing;