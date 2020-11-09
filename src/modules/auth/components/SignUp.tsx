import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../index';

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const errorMessage = useSelector(state =>state);
    console.log(errorMessage);
    


    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
        dispatch(register(newUser))
        setEmail('');
        setPassword('');
    }


    return (
        <div className="container">
        <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="input-field col s12">
                    <input id="email" type="email" onChange={e=>setEmail(e.target.value)} />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s12">
                    <input id="password" type="password" onChange={e=>setPassword(e.target.value)} />
                    <label htmlFor="password">Password</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Register
                </button>
            </form>
            <p className=" col s12 red-text text-darken-1 error-message">error</p>
            <p>or</p>
            <div className="row">
                <div className="col s12 facebook">
                    facebook
                </div>
            </div>
        </div>
    </div>
    )
}