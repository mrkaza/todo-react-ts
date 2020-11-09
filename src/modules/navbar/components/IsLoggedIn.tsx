import React from 'react';
import {NavLink} from 'react-router-dom';


const IsLoggedIn = () => {

    return (
        <ul id="nav-mobile" className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><button>Logout</button></li>
        </ul>
    )
}

export default IsLoggedIn;