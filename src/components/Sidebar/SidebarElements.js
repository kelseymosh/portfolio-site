import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fcfaf5;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ open }) => (open ? "100%" : "0")};
    top: ${({ open }) => (open ? "0" : "-100%")};
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff
`;
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #3c3c3b;
    cursor: pointer;

    &:hover {
        color: #d4c8be;
        transition: 0.2s ease-in-out;
    }
`;

