import styled from 'styled-components';
import { ReactComponent as GithubImg } from '../Logos/Github.svg';

export const ProjectsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 0.5rem calc((100vw - 1000px) / 2);
`;

export const ProjectsHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 5%;
    /* width: 100%;
    border-bottom: 1px solid #000; */
`;

export const ProjectsHeader = styled.div`
    font-size: calc(30px + 0.25w);
`;

export const ProjectCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    // flex-wrap: wrap; uncomment when portfolio is added

    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const ProjectCardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 350px;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 5%;
    }
`;

export const ProjectCardVisual = styled.img`
    width: 350px;
    height: auto;
    padding: 2%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const ProjectCardTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const ProjectCardHeader = styled.div`
    text-align: center;
    padding: 5px;
`;

export const ProjectCardBody = styled.div`
    font-size: 12px;
    text-align: center;
`;

export const IconLink = styled.a`
    cursor: pointer;
    text-align: center;
    padding: 2px;
`;

export const Github = styled(GithubImg)`
    height: 30px;
    width: 30px;
    
    path {
        fill: #3c3c3b !important;
    }

    &:hover path {
        fill: #777775 !important;
        transition: all ease 0.3s;
    }
`;