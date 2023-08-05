import React from 'react'
import Landing from './components/Landing';
import Hero from './components/Hero';
import Space from './components/Space';
import Services from './components/Services';
import Tesmonials from './components/Testmonials';
import Labels from './components/Labels';
import Staff from './components/Staff';

const App = () => {
    return(
        <div className=''>
            <Landing />
            <Hero />
            <Space />
            <Services />
            <Tesmonials />
            <Labels />
            <Staff />
        </div>
    )
}
export default App;