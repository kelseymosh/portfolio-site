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
                <ResumePdf data="/assets/KelseyOshiroResume.pdf" type="application/pdf"/>
                <ResumeJpg src="/assets/KelseyOshiroResume.jpg"/>
                <ResumeDownloadButton onClick={(e) =>  window.open("/assets/KelseyOshiroResume.pdf", "_blank") }>DOWNLOAD</ResumeDownloadButton>
            </ResumeWrapper>
        </ResumeSectionContainer>
    )
}

export default Resume