//Functional component,
import Aux from '../../hoc/Auxiliar';
import React from 'react';
import classes from './Layout.css';
import Toolbar from './../Navigation/Toolbar/Toolbar';
//From the HoC
const layout = props => (
    <Aux>
        <Toolbar/>
        <div>Toolbar, SideDrawer , Backdrop</div>
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default layout;
