import React from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { CiMenuFries } from 'react-icons/ci'

function Header() {
    return (
        <div className='flex flex-row justify-between px-10 py-3'>
            <div>
                <h1 className='text-xl text-custom font-bold'>Salon</h1>
            </div>
            <div className='flex flex-row justify-between space-x-5 items-center text-white'>
                <section className='mx-2 flex flex-row items-center space-x-1'>
                    <AiOutlineSearch color='white' />
                    <p>Search</p>
                </section>
                <section className='mx-2 flex flex-row items-center space-x-1'>
                    <AiOutlineShoppingCart color='white' />
                    <p>Cart</p>
                </section>
                <CiMenuFries color='white'/>
            </div>
        </div>
    );
}

export default Header;