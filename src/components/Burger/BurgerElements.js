import styled from 'styled-components';

export const StyledBurger = styled.button`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 48px;
    height: 48px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 10;

    div {
        width: 48px;
        height: 1.0px;
        background: #3c3c3b;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 7px;
    }

    .first-div {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    .second-div {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`;