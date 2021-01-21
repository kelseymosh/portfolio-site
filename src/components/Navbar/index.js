import React from 'react'
import { 
    Nav, 
    NavbarContainer,
    NavLogoLink,
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
                    <NavLogoLink to="/">
                        <Logo/>
                    </NavLogoLink>
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