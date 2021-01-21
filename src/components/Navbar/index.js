import React from 'react'
import { 
    Nav, 
    NavbarContainer,
    NavLogo,
    Logo,
    MenuButton,
    NavMenu, 
    NavItem,
    NavLink,
} from './NavbarElements';
import Burger from '../Burger'

const Navbar = ({ toggle, open }) => {
    return (
        <>
            <Nav open={open}>
                <NavbarContainer>
                    <NavLogo to="/">
                        {/* <img src="/images/Logo.svg" alt="logo" height="70" width="175"/> */}
                        <Logo/>
                    </NavLogo>
                    <MenuButton onClick={toggle}>
                        <Burger open={open}/>
                    </MenuButton>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/about">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/projects">PROJECTS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/resume">RESUME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact">CONTACT</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;