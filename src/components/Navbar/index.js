import React from 'react'
import { 
    Nav, 
    NavbarContainer,
    NavLogo,
    MenuButton,
    // Bars, 
    NavMenu, 
    NavItem,
    NavLink,
} from './NavbarElements';


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img src="/images/Logo.png" alt="logo" height="90" width="90"/>
                    </NavLogo>
                    <MenuButton onClick={toggle}>
                        <div className="menu-btn-burger"></div>
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