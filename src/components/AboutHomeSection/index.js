import React from 'react';
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
} from './AboutHomeElements';

const AboutHomeSection = () => {
    return (
        <AboutContainer>
            <AboutMe>
                Full stack software engineer with a background in healthcare and rehabilitation. I enjoy coming up with creative and useful solutions to problems and using my love for design to bring it all together.
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
                </LanguagesWrapper>
            </LanguagesContainer>
        </AboutContainer>
    )
}

export default AboutHomeSection
