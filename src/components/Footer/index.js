import React from 'react'
import {
    FooterContainer, 
    IconWrapper,
    IconLink,
    Github,
    Linkedin,
    Medium, 
    ContactWrapper,
    ContactTitle,
    ContactInfo,
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
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
                <ContactWrapper>
                    <ContactTitle>CONTACT</ContactTitle>
                    <ContactInfo>kelsocodes@gmail.com</ContactInfo>
                    <ContactInfo>970-672-7601</ContactInfo>
                </ContactWrapper>
        </FooterContainer>
    )
}

export default Footer