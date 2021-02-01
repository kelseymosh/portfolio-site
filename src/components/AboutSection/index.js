import React from 'react'
import {
    AboutSectionContainer,
    AboutImageWrapper,
    AboutImage,
    AboutTextWrapper,
    AboutHeader,
    AboutBody,
    AboutQuote,
} from  './AboutElements'

const About = () => {
    return (
        <AboutSectionContainer>
            <AboutImageWrapper>
                <AboutImage src="/images/About.jpg" alt="about"/>
            </AboutImageWrapper>
            <AboutTextWrapper>
                <AboutHeader>ABOUT</AboutHeader>
                <AboutBody>Hi there, I’m Kelsey! I am a full stack software engineer living in Denver, CO.  Prior to coding, I worked in healthcare as an exercise physiologist in cardiac rehabilitation.  I also have experience in the events and hospitality field working in places like the Denver Botanic Gardens and Walt Disney World. I approach problems with a creative and design-driven mindset and I love to create code that’s easy to read and reusable.  Outside of coding, you can find me geeking out over minimalist design, traveling, or taking care of my growing family of houseplants (right now I’m at 20+ but who’s counting?!)
                </AboutBody>
                <AboutQuote>“We keep moving forward, opening new doors, and doing new things, because we’re curious and curiosity keeps leading us down new paths.”</AboutQuote>
                <AboutQuote>-WALT DISNEY</AboutQuote>
            </AboutTextWrapper>
        </AboutSectionContainer>
    )
}

export default About
