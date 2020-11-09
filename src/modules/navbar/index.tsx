import React from 'react';
import {Link} from 'react-router-dom';
import IsLoggedIn from './components/IsLoggedIn';
import IsLoggedOut from './components/IsLoggedOut';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">Todo App</Link>
                <IsLoggedIn /> <IsLoggedOut />
            </div>
        </nav>
    )
}

export default Navbar;