import React from 'react'
import {
    ResumeSectionContainer,
    ResumeWrapper,
    ResumePdf,
    ResumeJpg,
    ResumeDownloadButton,
} from './ResumeElements'

const Resume = () => {
    return (
        <ResumeSectionContainer>
            <ResumeWrapper>
                <ResumePdf data="/resume/KelseyOshiroResume.pdf" type="application/pdf"/>
                <ResumeJpg src="/resume/KelseyOshiroResume.jpg"/>
                <ResumeDownloadButton onClick={(e) =>  window.open("/resume/KelseyOshiroResume.pdf", "_blank") }>DOWNLOAD</ResumeDownloadButton>
            </ResumeWrapper>
        </ResumeSectionContainer>
    )
}

export default Resume