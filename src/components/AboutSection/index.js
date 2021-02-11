import React from 'react';
import {
    AboutSectionContainer,
    AboutImageWrapper,
    AboutImage,
    AboutTextContainer,
    AboutTextWrapper,
    AboutHeader,
    AboutBody,
    AboutQuoteWrapper,
    AboutQuote,
    StarsIcon,
} from  './AboutElements';

const About = () => {
    return (
        <AboutSectionContainer>
            <AboutImageWrapper>
                <AboutImage src="/assets/About.jpg" alt="about"/>
            </AboutImageWrapper>
            <AboutTextContainer>
                <AboutTextWrapper>
                    <AboutHeader>ABOUT</AboutHeader>
                    <AboutBody>Hi there! I’m Kelsey, but you can call me Kelso. I am a full stack software engineer based in Denver, CO.  Prior to coding, I worked in healthcare as an exercise physiologist in cardiac rehabilitation.  I also have experience in the events and hospitality field working in places like the Denver Botanic Gardens and Walt Disney World. I approach problems with a creative and design-driven mindset and I love to create code that’s easy to read and reusable.  Outside of coding, you can find me geeking out over minimalist design, trying out new pasta recipes, or taking care of my growing family of houseplants (right now I’m at 20+ but who’s counting?!)
                    </AboutBody>
                </AboutTextWrapper>
                <AboutQuoteWrapper>
                    <AboutQuote>“We keep moving forward, opening new doors, and doing new things, because we’re curious and curiosity keeps leading us down new paths.”</AboutQuote>
                    <AboutQuote>-WALT DISNEY</AboutQuote>
                    <StarsIcon/>
                </AboutQuoteWrapper>
            </AboutTextContainer>
        </AboutSectionContainer>
    )
}

export default About
