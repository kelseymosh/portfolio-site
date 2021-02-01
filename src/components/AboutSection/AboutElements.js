import styled from 'styled-components';

export const AboutSectionContainer = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const AboutImageWrapper = styled.div`
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const AboutImage = styled.img`
    width: 100%;
`;

export const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const AboutTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50%;
    margin: auto;
    border-bottom: 1px solid #000;
    padding: 10%;

    @media screen and (max-width: 768px) {
        height: auto;
    }
`;

export const AboutHeader = styled.div`
    font-size: calc((80% + 0.25vw) * 2);
    margin-bottom: 3%;
    text-align: center;
`;

export const AboutBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    font-size: calc(80% + 0.25vw);
`;

export const AboutQuoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50%;
    padding: 10%;

    @media screen and (max-width: 768px) {
        height: auto;
    }
`;

export const AboutQuote = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    font-size: calc(112.5% + 0.25vw);
    
    &:last-child {
        font-size: calc(100% + 0.25vw);
    }
`;