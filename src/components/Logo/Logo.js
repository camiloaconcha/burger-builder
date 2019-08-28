import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Burger" />
        </div>
    );
};

export default Logo;
