import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RiCodeBoxLine } from 'react-icons/ri'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FiDatabase } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    border-top: 1px solid #000;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const AboutMe = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    border-right: 1px solid #000;
    width: 60%;
    padding: 5%;
    font-size: calc(87.5% + 0.25vw);

    @media screen and (max-width: 768px) {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #000;
    }
`;

export const AboutLink = styled(Link)`
    font-size: calc(50% + 0.25vw);
    color: #3c3c3b;
    margin-top: 1%;
`;

export const LanguagesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 0 0 50%;
    padding: 5%;
    font-size: 20px;

    @media screen and (max-width: 768px) {
        width: 100%;
        flex: none;
    }  
`;

export const LanguagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const IconWrapper = styled.div`
    text-align: center;
`;

export const FrontendIcon = styled(RiCodeBoxLine)`
    color: #3c3c3b;
`;

export const BackendIcon = styled(HiOutlineDesktopComputer)`
    color: #3c3c3b;
`;

export const DatabaseIcon = styled(FiDatabase)`
    color: #3c3c3b;
`;

export const Arrow = styled(BsArrowRight)`
    color: #3c3c3b;
    width: 20px;
`;

export const Language = styled.li`
    font-size: calc(50% + 0.25vw);
`;