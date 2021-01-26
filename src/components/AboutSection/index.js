import React from 'react'
import { 
    AboutContainer,
    AboutMe,
    AboutLink,
    Arrow,
    LanguagesContainer,
    LanguagesWrapper,
    IconWrapper,
    FrontendIcon,
    BackendIcon,
    DatabaseIcon,
    Language,
} from './AboutElements'

const AboutSection = () => {
    return (
        <AboutContainer>
            <AboutMe>
                Full stack software engineer with a background in healthcare and rehabilitation. I enjoy coming up with creative and useful solutions to problems and using my love for design to bring it all together. In my free time, I love to cook, travel, and take care of my many houseplants.
            <AboutLink to="/about">VIEW ABOUT ME<Arrow/></AboutLink>
            </AboutMe>
            <LanguagesContainer>
                <LanguagesWrapper>
                    FRONTEND
                        <IconWrapper><FrontendIcon/></IconWrapper>
                        <Language>React</Language>
                        <Language>HTML</Language>
                        <Language>CSS</Language>
                        <Language>Javascript</Language>
                        <Language>Bootstrap</Language>
                        <Language>Styled Components</Language>
                </LanguagesWrapper>
                <LanguagesWrapper>
                    BACKEND
                        <IconWrapper><BackendIcon/><DatabaseIcon/></IconWrapper>
                        <Language>Ruby</Language>
                        <Language>Ruby on Rails</Language>
                        <Language>Python</Language>
                        <Language>Django</Language>
                </LanguagesWrapper>
            </LanguagesContainer>
        </AboutContainer>
    )
}

export default AboutSection
