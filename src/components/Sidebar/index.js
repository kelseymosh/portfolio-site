import React from 'react'
import { 
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    MenuTitle,
    SidebarLink,
    SidebarBtn,
    SidebarBtnLink,
    IconWrapper,
    IconLink,
    Github,
    Linkedin,
    Medium,
} from './SidebarElements'

const Sidebar = ({ open, toggle }) => {
    return (
        <SidebarContainer open={open} onClick={toggle}>
            <SidebarWrapper>
                <MenuTitle>MENU</MenuTitle>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>ABOUT</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>PROJECTS</SidebarLink>
                    <SidebarLink to="resume" onClick={toggle}>RESUME</SidebarLink>
                    <SidebarBtn>
                        <SidebarBtnLink to="/contact">CONTACT</SidebarBtnLink>
                    </SidebarBtn>
                    <IconWrapper>
                        <IconLink href="https://github.com/kelseymosh">
                            <Github/>
                        </IconLink>
                        <IconLink href="https://www.linkedin.com/in/kelseyoshiro/">
                            <Linkedin/>
                        </IconLink>
                        <IconLink href="https://kelseymosh.medium.com/">
                            <Medium/>
                        </IconLink>
                    </IconWrapper>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar