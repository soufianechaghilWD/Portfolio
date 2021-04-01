import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarRoute, SideBtnWrap, SidebarLink, SidebarMenu, SidebarWraper, SideBarLogo } from "./NavMobileElements"

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWraper>
                <SideBarLogo>Soufiane Chaghil</SideBarLogo>
                <SidebarMenu>
                    <SidebarLink to="education" onClick={toggle}>Education</SidebarLink>
                    <SidebarLink to="work"  onClick={toggle}>Work Experience</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="contact" onClick={toggle}>Contact Me</SidebarRoute>
                </SideBtnWrap>
            </SidebarWraper>
        </SidebarContainer>
    )
}

export default SideBar
