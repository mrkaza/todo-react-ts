import React from 'react';
import {Link} from 'react-router-dom';
import IsLoggedIn from './components/IsLoggedIn';
import IsLoggedOut from './components/IsLoggedOut';

import {useSelector} from 'react-redux';
import {RootStore} from '../../consts/rootReducer';

const Navbar = () => {
    const user = useSelector((state:RootStore) => state.auth.user);

    return (
        <nav>
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">Todo App</Link>
                {user ? (<IsLoggedIn />) : (<IsLoggedOut />) }
            </div>
        </nav>
    )
}

export default Navbar;