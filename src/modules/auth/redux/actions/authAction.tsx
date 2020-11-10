import firebase, {firebaseAuth, provider} from '../../../../consts/fbConfig';
import {Dispatch} from 'redux';
import {AuthDispatchTypes, REGISTER, REGISTER_ERROR, LOGOUT, LOGIN, LOGIN_ERROR, FACEBOOK_LOGIN} from '../../index';



export const register = (newUser: {email: string, password:string}) => {
    return (dispatch: Dispatch<AuthDispatchTypes> ) => {
        firebaseAuth.createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((user) => {
            dispatch({type:REGISTER, payload: user})
        }).catch((error) => {
            dispatch({type:REGISTER_ERROR, payload: error})
        })
    }
}

export const logout = () => {
    return (dispatch: Dispatch<AuthDispatchTypes>) => {
        firebaseAuth.signOut().then(() => {
            dispatch({type:LOGOUT})
        })
    }
}

export const login = (email: string, password: string) => {
    return (dispatch: Dispatch<AuthDispatchTypes>) => {
        firebaseAuth.signInWithEmailAndPassword(
            email,
            password
        ).then(user => {
            dispatch({type: LOGIN, payload: user})
        }).catch(error => {
            dispatch({type: LOGIN_ERROR, payload: error})
        })
    }
}

export const facebookLogin = () => {
    return (dispatch: Dispatch<AuthDispatchTypes>) => {
        firebaseAuth.signInWithPopup(provider).then(user => {
            dispatch({type:FACEBOOK_LOGIN, payload:user})
        })
    }
}