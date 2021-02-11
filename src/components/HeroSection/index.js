import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ReactPlayer from 'react-player';
import { 
    HeroContainer,
    HeroImageWrapper,
    HeroImage,
    HeroVideoWrapper,
} from './HeroElements';

const HeroSection = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 })

    return (
        <HeroContainer>
            <HeroImageWrapper>
                <HeroImage src="/assets/Hero.jpg" alt="Kelsey Oshiro image" />
            </HeroImageWrapper>
            <HeroVideoWrapper>
                { isDesktop && <ReactPlayer url="/assets/Hero.mp4" playing={true} muted={true} /> }
            </HeroVideoWrapper>
        </HeroContainer>
    )
}

export default HeroSection

