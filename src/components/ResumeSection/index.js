import React from 'react'
import ResumePdf from './resume.js'
import {
    ResumeContainer,
} from './ResumeElements'

const Resume = () => {
    return (
        <ResumeContainer>
            <ResumePdf/>
        </ResumeContainer>
    )
}

export default Resume