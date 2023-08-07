import React from 'react'
import Landing from './components/Landing';
import Hero from './components/Hero';
import Space from './components/Space';
import Services from './components/Services';
import Tesmonials from './components/Testmonials';
import Labels from './components/Labels';
import Staff from './components/Staff';
import Appointment from './components/Appointment';
import Pricing from './components/Pricing'
import Footer from './components/Footer';

const App = () => {
    return(
        <div>
            <Landing />
            <Hero />
            <Space />
            <Services />
            <Tesmonials />
            <Labels />
            <Staff />
            <Appointment/>
            <Pricing />
            <Footer />
        </div>
    )
}
export default App;