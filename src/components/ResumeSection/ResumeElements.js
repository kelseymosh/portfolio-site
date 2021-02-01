import styled from 'styled-components'

export const ResumeSectionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: column;
    padding: 3%;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const ResumeWrapper = styled.div`
    padding: 5%;
    border: 1px solid #e6e5e0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ResumePdf = styled.object`
    height: 500px;
    width: 700px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ResumeJpg = styled.img`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        width: 90%;
        margin: auto;
        padding: 2%;
    }
`

export const ResumeDownloadButton = styled.button`
    display: none;

    @media screen and (max-width: 768px) {
        display: inline-block;
        width: 150px;
        margin: auto;
        border-radius: 0;
        border: none;
        background-color: #3c3c3b;
        padding: 2%;
        cursor: pointer;
        color: #fff !important;
        font-size: 12px;

        &:hover {
            background-color: #c0cfb2;
            transition: all ease 0.5s;
        }
    }
`
