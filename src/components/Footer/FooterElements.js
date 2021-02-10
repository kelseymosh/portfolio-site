import styled from 'styled-components';
import { css } from 'styled-components';
import { ReactComponent as GithubImg } from '../Logos/Github.svg';
import { ReactComponent as LinkedinImg } from '../Logos/Linkedin.svg';
import { ReactComponent as MediumImg } from '../Logos/Medium.svg';

const iconStyle = css`
    height: 30px;
    width: 30px;

    &:hover path {
        fill: #c0cfb2 !important;
        transition: all ease 0.3s;
    }  
`;

export const FooterContainer = styled.footer`
    background-color: #3c3c3b;
    display: flex;
    justify-content: space-around;
    padding : 48px 48px;
    margin: auto;
`;

export const IconWrapper = styled.div`
    display: flex;
`;

export const IconLink = styled.a`
    cursor: pointer;
`;

export const Github = styled(GithubImg)`
    ${iconStyle}
`;

export const Linkedin = styled(LinkedinImg)`
    ${iconStyle}
`;

export const Medium = styled(MediumImg)`
    ${iconStyle}
`;