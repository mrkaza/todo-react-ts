import React from 'react';
import {useSelector} from 'react-redux';
import {RootStore} from '../consts/rootReducer';

const Home = () => {
    const user = useSelector((state:RootStore) =>state.auth.user)
    console.log(user);
    return (
        <div>hej</div>
    )
}

export default Home;