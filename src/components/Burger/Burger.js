import React from 'react';
import { bool } from 'prop-types';
import { StyledBurger } from './BurgerElements';

const Burger = ({ open }) => {
    return (
        <StyledBurger open={open} >
            <div className="first-div" />
            <div className="second-div"/>
        </StyledBurger>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
};
export default Burger;