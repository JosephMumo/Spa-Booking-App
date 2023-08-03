import React from 'react'
import Landing from './components/Landing';
import Hero from './components/Hero';
import Space from './components/Space';
import Services from './components/Services';
import Tesmonials from './components/Testmonials';

const App = () => {
    return(
        <div className=''>
            <Landing />
            <Hero />
            <Space />
            <Services />
            <Tesmonials />
        </div>
    )
}
export default App;