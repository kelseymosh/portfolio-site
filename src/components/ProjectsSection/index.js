import React from 'react'
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
} from './ProjectsElements'
import Pokemon from '../Gifs/Pokemon.gif'

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
            </ProjectCardsContainer>
        </ProjectsContainer>
    )
}

export default Projects
