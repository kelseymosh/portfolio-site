import styled from 'styled-components'
import { css } from 'styled-components'
import { ReactComponent as GithubImg } from '../Logos/Github.svg'
import { ReactComponent as LinkedinImg } from '../Logos/Linkedin.svg'
import { ReactComponent as MediumImg } from '../Logos/Medium.svg'

const iconStyle = css`
    height: 30px;
    width: 30px;

    &:hover path {
        fill: #c0cfb2 !important;
        transition: all ease 0.3s;  
`   

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

export const IconWrapper = styled.div`

`

export const IconLink = styled.a`
    cursor: pointer;
`

export const Github = styled(GithubImg)`
    ${iconStyle}
`

export const Linkedin = styled(LinkedinImg)`
    ${iconStyle}
`

export const Medium = styled(MediumImg)`
    ${iconStyle}
`