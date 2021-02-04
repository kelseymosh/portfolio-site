import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoImg } from '../Logos/Logo.svg'

export const Nav = styled.nav`
    background: #fcfaf5;
    border-bottom: ${({ open }) => open ? 'none' : '1px solid #000' };
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 0.5rem calc((100vw - 1000px) / 2);

    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 90px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogoLink = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
`;

export const Logo = styled(LogoImg)`
    height: 80px;
    width: 80px;

    &:hover g {
        fill: #d4c8be !important;
        transition: all ease 0.6s;
    }
    &:hover path {
        fill: #d4c8be !important;
        transition: all ease 0.6s;
    }
`;

export const MenuButton = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 90px;
`;

export const NavLink = styled(Link)`
    color: #3c3c3b;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #d4c8be;
    }

    &:active {
        color: #d4c8be !important;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin: 0 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtnLink = styled(Link)`
    border-radius: 2px;
    background: #d4c8be;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fcfaf5;
        border: 1px solid #3c3c3b;
        color: #3c3c3b;
    }
`
