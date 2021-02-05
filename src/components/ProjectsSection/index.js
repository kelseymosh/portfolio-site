import React from 'react';
import { 
    ProjectsContainer,
    ProjectsHeaderWrapper,
    ProjectsHeader,
    ProjectCardsContainer,
    ProjectCardWrapper,
    ProjectCardVisual,
    ProjectCardTextWrapper,
    ProjectCardHeader,
    ProjectCardBody,
    IconLink,
    Github,
} from './ProjectsElements';
import Pokemon from '../Gifs/Pokemon.gif';
import Props from '../Gifs/Props.gif';
import Critterpedia from '../Gifs/Critterpedia.gif';
import Portfolio from '../Gifs/Portfolio.gif';

const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectsHeaderWrapper>
                <ProjectsHeader>PROJECTS</ProjectsHeader>
            </ProjectsHeaderWrapper>
            <ProjectCardsContainer>
                <ProjectCardWrapper>
                    <ProjectCardVisual src={Pokemon} alt="Pokemon App gif"/>
                    <ProjectCardTextWrapper>
                        <ProjectCardHeader>POKEMON TEAM BUILDER</ProjectCardHeader>
                        <ProjectCardBody>Pokémon Team Builder is an app designed for Pokémon trainers to help them build their perfect team. Users are able to pick up to six Pokémon and see their typing.</ProjectCardBody>
                        <IconLink href="https://github.com/kelseymosh/pokemon-team-builder"><Github/></IconLink>
                    </ProjectCardTextWrapper>
                </ProjectCardWrapper>
                <ProjectCardWrapper>
                    <ProjectCardVisual src={Props} alt="Props App gif"/>
                    <ProjectCardTextWrapper>
                        <ProjectCardHeader>PROPS</ProjectCardHeader>
                        <ProjectCardBody>Want to increase your houseplant collection while saving money? Props is a web app for plant lovers to advertise and trade their propagated houseplants.</ProjectCardBody>
                        <IconLink href="https://github.com/kelseymosh/props-fe"><Github/></IconLink>
                    </ProjectCardTextWrapper>
                </ProjectCardWrapper>
                <ProjectCardWrapper>
                    <ProjectCardVisual src={Portfolio} alt="Portfolio Website gif"/>
                    <ProjectCardTextWrapper>
                        <ProjectCardHeader>PORTFOLIO</ProjectCardHeader>
                        <ProjectCardBody>This is the current version of the portfolio site you are on. Featuring an about section, resume download, project page, and email contact form.</ProjectCardBody>
                        <IconLink href="https://github.com/kelseymosh/portfolio-site"><Github/></IconLink>
                    </ProjectCardTextWrapper>
                </ProjectCardWrapper>
                <ProjectCardWrapper>
                    <ProjectCardVisual src={Critterpedia} alt="Critterpedia App gif"/>
                    <ProjectCardTextWrapper>
                        <ProjectCardHeader>CRITTERPEDIA</ProjectCardHeader>
                        <ProjectCardBody>Critterpedia is an app for Animal Crossing New Horizons players to track the fish, bugs, and deep sea creatures they catch in the game.</ProjectCardBody>
                        <IconLink href="https://github.com/kelseymosh/critterpedia_frontend"><Github/></IconLink>
                    </ProjectCardTextWrapper>
                </ProjectCardWrapper>
            </ProjectCardsContainer>
        </ProjectsContainer>
    )
}

export default Projects
