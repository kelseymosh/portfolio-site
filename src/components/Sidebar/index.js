import React from 'react'
import { 
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    LogoWrapper,
    LogoLink,
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
                        <LogoLink href="https://github.com/kelseymosh">
                            <Github/>
                        </LogoLink>
                        <LogoLink href="https://www.linkedin.com/in/kelseyoshiro/">
                            <Linkedin/>
                        </LogoLink>
                        <LogoLink href="https://kelseymosh.medium.com/">
                            <Medium/>
                        </LogoLink>
                    </LogoWrapper>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar