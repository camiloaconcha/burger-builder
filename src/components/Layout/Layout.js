//Functional component,
import Aux from '../../hoc/Aux';
import React from 'react';
import classes from './Layout.css';
//From the HoC
const layout = props => (
    <Aux>
        <div>Toolbar, SideDrawer , Backdrop</div>
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default layout;
