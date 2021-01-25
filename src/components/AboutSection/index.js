import React from 'react'
import { 
    AboutContainer,
    AboutMe,
    AboutLink,
    Arrow,
    LanguagesWrapper,
    IconWrapper,
    FrontendIcon,
    BackendIcon,
    DatabaseIcon,
    LanguagesFrontend,
    LanguagesBackend,
} from './AboutElements'

const AboutSection = () => {
    return (
        <AboutContainer>
            <AboutMe>
                Full stack software engineer with a background in healthcare and rehabilitation. I enjoy coming up with creative and useful solutions to problems and using my love for design to bring it all together. In my free time, I love to cook, travel, and take care of my many houseplants.
            <AboutLink to="/about">VIEW ABOUT ME<Arrow/></AboutLink>
            </AboutMe>
            <LanguagesWrapper>
                <LanguagesFrontend>
                    Frontend
                    <IconWrapper><FrontendIcon/></IconWrapper>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>Styled Components</li>
                </LanguagesFrontend>
            </LanguagesWrapper>
            <LanguagesWrapper>
                <LanguagesBackend>
                    Backend
                    <IconWrapper><BackendIcon/><DatabaseIcon/></IconWrapper>
                    <li>Ruby</li>
                    <li>Ruby on Rails</li>
                    <li>Python</li>
                    <li>Django</li>
                </LanguagesBackend>
            </LanguagesWrapper>
        </AboutContainer>
    )
}

export default AboutSection
