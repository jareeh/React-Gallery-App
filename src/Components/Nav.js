import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';

const Nav = () => {
    return (
        <BrowserRouter>
            <div className="main-nav">
                <h4>Quick Links</h4>
                <ul>
                    <li><NavLink to="/landscapes">Landscapes</NavLink></li>
                    <li><NavLink to="forests">Forests</NavLink></li>
                    <li><NavLink to="beaches">Beaches</NavLink></li>
                </ul>
            </div>
        </BrowserRouter>

    )
}

export default Nav;