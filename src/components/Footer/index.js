import React from 'react'
import {
    FooterContainer, 
    FooterWrapper,
    IconWrapper,
    IconLink,
    Github,
    Linkedin,
    Medium, 
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
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
                
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer