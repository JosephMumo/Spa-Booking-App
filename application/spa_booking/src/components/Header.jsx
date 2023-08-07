import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { CiMenuFries, CiMenuBurger } from 'react-icons/ci'

function Header() {
    const [menu, setMenu] = useState(false)

    
    return (
        <>
            <div className={menu ? 'bg-black flex flex-row justify-between px-10 py-3' :'flex flex-row justify-between px-10 py-3'}>
                <div>
                    <h1 className='text-2xl text-custom font-bold'>BLATE</h1>
                </div>
                <div className='flex flex-row justify-between space-x-5 items-center text-white'>
                    <section className='mx-2 flex flex-row items-center space-x-1 cursor-pointer'>
                        <AiOutlineSearch color='white' />
                        <p>Search</p>
                    </section>
                    <section className='mx-2 flex flex-row items-center space-x-1 cursor-pointer'>
                        <AiOutlineShoppingCart color='white' />
                        <p>Cart</p>
                    </section>
                    <section onClick={() => setMenu(!menu)} className='hover:text-custom cursor-pointer'>
                        { menu ? <CiMenuFries /> : <CiMenuBurger />}
                    </section>
                </div>
            </div>
            <div className={menu ? 'bg-black text-custom z-50 h-screen text-center py-20 absolute w-full' : 'hidden'}>
                <ul className='grid grid-flow-row place-items-center'>
                    <li className='mt-3 text-lg p-2 rounded-sm hover:text-white hover:bg-neutral-900 w-64'><a href='#'>Home</a></li>
                    <li className='mt-3 text-lg p-2 rounded-sm hover:text-white hover:bg-neutral-900 w-64'><a href='#'>About</a></li>
                    <li className='mt-3 text-lg p-2 rounded-sm hover:text-white hover:bg-neutral-900 w-64'><a href='#'>Services</a></li>
                    <li className='mt-3 text-lg p-2 rounded-sm hover:text-white hover:bg-neutral-900 w-64'><a href='#'>Testimonials</a></li>
                    <li className='mt-3 text-lg p-2 rounded-sm hover:text-white hover:bg-neutral-900 w-64'><a href='#'>Appointments</a></li>
                    <li className='mt-3 text-lg p-2 rounded-sm hover:text-white hover:bg-neutral-900 w-64'><a href='#'>Pricings</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;