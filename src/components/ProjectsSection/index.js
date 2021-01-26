import React from 'react'
import { 
    ProjectsContainer,
    ProjectsHeaderWrapper,
    ProjectsHeader,
    ProjectCardWrapper,
    ProjectCardVisual,
    ProjectCardText,
} from './ProjectsElements'

const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectsHeaderWrapper>
                <ProjectsHeader></ProjectsHeader>
            </ProjectsHeaderWrapper>
            <ProjectCardWrapper>
                <ProjectCardVisual></ProjectCardVisual>
                <ProjectCardText></ProjectCardText>
            </ProjectCardWrapper>
        </ProjectsContainer>
    )
}

export default Projects
