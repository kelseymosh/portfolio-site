import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <>
            <Sidebar open={open} toggle={toggle} />
            <Navbar open={open} toggle={toggle} />
        </>
    )
}

export default Home