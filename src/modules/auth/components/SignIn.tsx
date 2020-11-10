import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../index';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(login(email, password));
        setEmail('');
        setPassword('');
    }

    return (
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="input-field col s12">
                        <input value={email} id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input value={password} id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Login
                    </button>
                </form>
                <p className=" col s12 red-text text-darken-1 error-message">error</p>
            </div>
            <p>or</p>
            <div className="row">
                <div className="col s12 facebook">
                    facebook
                </div>
            </div>
        </div>
    )
}

