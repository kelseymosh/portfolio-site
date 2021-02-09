import styled from 'styled-components';

export const HeroContainer = styled.div` 
    display: flex;
    flex-direction: row;
    padding: 5%;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        padding: none;
    }
`;

export const HeroImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const HeroImage = styled.img`
    width: 100%;
`;

export const HeroVideoWrapper = styled.div`
    display: flex;
    width: 50%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;