import React from 'react'
import { 
    SidebarContainer,
    Icon, 
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarElements'


const Sidebar = ({ open, toggle }) => {
    return (
        <SidebarContainer open={open} onClick={toggle}>
            <Icon onClick={toggle}>
                
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>ABOUT</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>PROJECTS</SidebarLink>
                    <SidebarLink to="resume" onClick={toggle}>RESUME</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>CONTACT</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar