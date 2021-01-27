import styled from 'styled-components'
import { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as GithubImg } from '../Logos/Github.svg'
import { ReactComponent as LinkedinImg } from '../Logos/Linkedin.svg'
import { ReactComponent as MediumImg } from '../Logos/Medium.svg'

const iconStyle = css`
    height: 30px;
    width: 30px;

    path {
        fill: #3c3c3b !important;
    }
`

export const SidebarContainer = styled.aside`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fcfaf5;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    margin-top: 60px;
    transition: 0.3s ease-in-out;
    opacity: ${({ open }) => (open ? "100%" : "0")};
    top: ${({ open }) => (open ? "0" : "-100%")};
`;

export const SidebarWrapper = styled.div`
    color: #3c3c3b;
`;

export const MenuTitle = styled.p`
    font-size: 12px;
    text-align: center;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;
    color: #3c3c3b;

    &:hover {
        color: #d4c8be;
        transition: 0.2s ease-in-out;
    }
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