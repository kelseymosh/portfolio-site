import React from 'react'
import {
    FooterContainer, 
    FooterWrapper,
    LogoWrapper,
    LogoLink,
    Github,
    Linkedin,
    Medium, 
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
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
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer