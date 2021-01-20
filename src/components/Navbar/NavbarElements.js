import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: ##fcfaf5;
    border-bottom: 1px solid #000;
    height: 100px;
    // margin-top: -90px;
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

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items:center;
    margin-left:24px;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const Bars = styled(FaBars)`
    color: #3c3c3b;
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

export const NavLink = styled(LinkScroll)`
    color: #3c3c3b;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #7F867B;
    }

    &.active {
        // border-bottom: 3px solid #7F867B;
        color: #7F867B;
    }
`;

// export const NavBtn = styled.nav`
//     display: flex;
//     align-items: center;
//     margin-right: 24px;

//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `
// export const NavBtnLink = styled(Link)`
//     border-radius: 4px;
//     background: #256ce1;
//     padding: 10px 22px;
//     color: #fff;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #256ce1;
//     }
// `
