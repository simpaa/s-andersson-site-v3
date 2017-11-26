import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Menu = () => (
    <div className="main-menu">
        <ul>
            <li><NavLink exact to="/" activeClassName="menu-item-active">MY WORK</NavLink></li>
            <li><NavLink to="/about" activeClassName="menu-item-active">ABOUT ME</NavLink></li>
            <li><NavLink to="/contact" activeClassName="menu-item-active">CONTACT</NavLink></li>
          </ul>
    </div>
);

export default Menu;