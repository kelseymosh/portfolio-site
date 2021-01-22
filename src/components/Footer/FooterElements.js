import styled from 'styled-components'
import { ReactComponent as GithubImg } from '../Logos/Github.svg'
import { ReactComponent as LinkedinImg } from '../Logos/Linkedin.svg'
import { ReactComponent as MediumImg } from '../Logos/Medium.svg'

export const FooterContainer = styled.footer`
    background-color: #3c3c3b;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const FooterWrapper = styled.div`
    padding : 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

export const LogoWrapper = styled.div`

`

export const LogoLink = styled.a`
    cursor: pointer;
`

export const Github = styled(GithubImg)`
    height: 30px;
    width: 30px;
    
    &:hover path {
        fill: #c0cfb2 !important;
        transition: all ease 0.3s;
    }
`

export const Linkedin = styled(LinkedinImg)`
    height: 30px;
    width: 30px;

    &:hover path {
        fill: #c0cfb2 !important;
        transition: all ease 0.3s;
`

export const Medium = styled(MediumImg)`
    height: 30px;
    width: 30px;

    &:hover path {
        fill: #c0cfb2 !important;
        transition: all ease 0.3s;
`