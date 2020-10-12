import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="main-nav">
            <h4>Quick Links</h4>
            <ul>
                <li><NavLink to="/landscapes">Landscapes</NavLink></li>
                <li><NavLink to="/forests">Forests</NavLink></li>
                <li><NavLink to="/beaches">Beaches</NavLink></li>
            </ul>
        </div>

    )
}

export default Nav;