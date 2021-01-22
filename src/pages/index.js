import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';

const Home = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <>
            <Sidebar open={open} toggle={toggle} />
            <Navbar open={open} toggle={toggle} />
            <HeroSection/>
        </>
    )
}

export default Home