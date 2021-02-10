import React from 'react';
import { 
    HeroContainer,
    HeroImageWrapper,
    HeroImage,
    HeroVideoWrapper,
    Video,
} from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroImageWrapper>
                <HeroImage src="/assets/Hero.jpg" alt="Kelsey Oshiro image" />
            </HeroImageWrapper>
            <HeroVideoWrapper>
                <Video url="/assets/Hero.mp4" playing={true} muted={true}/>
            </HeroVideoWrapper>
        </HeroContainer>
    )
}

export default HeroSection

