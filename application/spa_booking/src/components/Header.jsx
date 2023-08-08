import React, { useState, useContext } from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { CiMenuFries, CiMenuBurger } from 'react-icons/ci'
import { myContext } from '../context/AppContext'

function Header() {
    const [menu, setMenu] = useState(false)
    const { appointment } =  useContext(myContext)


    

    
    return (
        <>
            <div className='flex flex-row justify-between px-10 py-3'>
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
                        <p>Cart[]</p>
                    </section>
                    <section onClick={() => setMenu(!menu)} className='hover:text-custom cursor-pointer'>
                        { menu ? <CiMenuFries /> : <CiMenuBurger />}
                    </section>
                </div>
            </div>
            <div className={menu ? ' card  text-white z-50 h-screen text-center py-20 absolute w-full' : 'hidden'}>
                <ul className='grid grid-flow-row place-items-center'>
                    <li className='mt-3 font-bold text-2xl p-2 rounded-sm hover:text-custom hover:bg-neutral-900 w-64'><a href='#home'>Home</a></li>
                    <li className='mt-3 font-bold text-2xl p-2 rounded-sm hover:text-custom hover:bg-neutral-900 w-64'><a href='#about'>About</a></li>
                    <li className='mt-3 font-bold text-2xl p-2 rounded-sm hover:text-custom hover:bg-neutral-900 w-64'><a href='#services'>Services</a></li>
                    <li className='mt-3 font-bold text-2xl p-2 rounded-sm hover:text-custom hover:bg-neutral-900 w-64'><a href='#testmonials'>Testimonials</a></li>
                    <li className='mt-3 font-bold text-2xl p-2 rounded-sm hover:text-custom hover:bg-neutral-900 w-64'><a href='#staff'>Staff</a></li>
                    <li className='mt-3 font-bold text-2xl p-2 rounded-sm hover:text-custom hover:bg-neutral-900 w-64'><a href='#appointments'>Appointments</a></li>
                    <li className='mt-3 font-bold text-2xl p-2 rounded-sm hover:text-custom hover:bg-neutral-900 w-64'><a href='#pricings'>Pricings</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;