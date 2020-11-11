import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../index';
import {RootStore} from '../../../consts/rootReducer';

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const errorMessage = useSelector((state:RootStore) => state.auth.regError);

    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
        dispatch(register(newUser))
    }


    return (
        <div className="container">
        <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="input-field col s12">
                    <input value={email} id="email" type="email" onChange={e=>setEmail(e.target.value)} />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s12">
                    <input value={password} id="password" type="password" onChange={e=>setPassword(e.target.value)} />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="facebook col s12">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Register
                    </button>
                </div>
            </form>
            {errorMessage ? (
                <p className=" col s12 red-text text-darken-1 error-message">{errorMessage.message}</p>
            ) : (null)}
        </div>
    </div>
    )
}