import React from 'react';
import ReactPlayer from 'react-player'
import { 
    HeroContainer,
    HeroImageWrapper,
    HeroImage,
    HeroVideoWrapper,
} from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroImageWrapper>
                <HeroImage src="/assets/Hero.jpg" alt="Kelsey Oshiro image" />
            </HeroImageWrapper>
            <HeroVideoWrapper>
                <ReactPlayer url="/assets/Hero.mp4" playing={true} muted={true}/>
            </HeroVideoWrapper>
        </HeroContainer>
    )
}

export default HeroSection

