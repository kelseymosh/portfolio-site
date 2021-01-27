import React from 'react'
import {
    AboutSectionContainer,
    AboutImageWrapper,
    AboutImage,
} from  './AboutElements'

const About = () => {
    return (
        <AboutSectionContainer>
            <AboutImageWrapper>
                <AboutImage src="/images/About.png" alt="plants with coffee"/>
            </AboutImageWrapper>
        </AboutSectionContainer>
    )
}

export default About
