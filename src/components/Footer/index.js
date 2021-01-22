import React from 'react'
import {
    FooterContainer, 
    FooterWrapper, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Navigate</FooterLinkTitle>
                                <FooterLink to="/about">About</FooterLink>
                                <FooterLink to="/projects">Projects</FooterLink>
                                <FooterLink to="/resume">Resume</FooterLink>
                                <FooterLink to="/contact">Contact</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer