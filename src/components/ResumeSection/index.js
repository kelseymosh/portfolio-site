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
                <ResumePdf data="/documents/KelseyOshiroResume.pdf" type="application/pdf"/>
                <ResumeJpg src="/documents/KelseyOshiroResume.jpg"/>
                <ResumeDownloadButton/>
            </ResumeWrapper>
        </ResumeSectionContainer>
    )
}

export default Resume