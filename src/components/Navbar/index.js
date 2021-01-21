import React from 'react'
import { 
    Nav, 
    NavbarContainer,
    NavLogo,
    MenuButton,
    NavMenu, 
    NavItem,
    NavLink,
} from './NavbarElements';
import { Rotate as Hamburger } from 'hamburger-react'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img src="/images/Logo.png" alt="logo" height="70" width="175"/>
                    </NavLogo>
                    <MenuButton onClick={toggle}>
                        <div className="menu-btn-burger"></div>
                        {/* <Hamburger size={20} distance="lg" color="#3c3c3b"/> */}
                    </MenuButton>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="projects">PROJECTS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="resume">RESUME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact">CONTACT</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;