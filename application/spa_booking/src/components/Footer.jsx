import React from 'react'

function Footer() {
    const d = new Date()
    const year =d.getFullYear()
    return ( 
        <div className='text-center bg-black text-custom font-bold'>
            <p className='p-2 '>Blate©{year}</p>
        </div>
    );
}

export default Footer;