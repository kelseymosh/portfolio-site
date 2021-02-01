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
        margin-bottom: 5%;
    }
`;

export const AboutImage = styled.img`
    width: 100%;
`;

export const AboutTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 5%;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 5%;
    }
`;

export const AboutHeader = styled.div`
    font-size: 30px;
    padding: 3%;
`;

export const AboutBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 3%;
`;

export const AboutQuote = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 3%;
    margin-top: 15%;

    &:last-child {
        margin-top: 0%;
        padding: 0% 3%;
    }
`;