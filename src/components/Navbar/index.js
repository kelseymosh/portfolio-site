import React from 'react';
import { 
    Nav, 
    NavbarContainer,
    NavLogoLink,
    Logo,
    MenuButton,
    NavMenu, 
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';
import Burger from '../Burger';

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
                            <NavLink to="/about" activeStyle={{ color: '#d4c8be' }}>ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/projects" activeStyle={{ color: '#d4c8be' }}>PROJECTS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/resume" activeStyle={{ color: '#d4c8be' }}>RESUME</NavLink>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="/contact">CONTACT</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;