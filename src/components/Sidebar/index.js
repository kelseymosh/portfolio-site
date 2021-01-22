import React from 'react'
import { 
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    LogoWrapper,
    Github,
    Linkedin,
    Medium,
} from './SidebarElements'


const Sidebar = ({ open, toggle }) => {
    return (
        <SidebarContainer open={open} onClick={toggle}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>ABOUT</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>PROJECTS</SidebarLink>
                    <SidebarLink to="resume" onClick={toggle}>RESUME</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>CONTACT</SidebarLink>
                    <LogoWrapper>
                        <Github/>
                        <Linkedin/>
                        <Medium/>
                    </LogoWrapper>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar