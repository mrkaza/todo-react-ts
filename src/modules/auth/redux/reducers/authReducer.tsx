import {REGISTER,REGISTER_ERROR, LOGOUT, LOGIN, LOGIN_ERROR} from '../../index';

type InitState = {
    loginError: null | string;
    regError: null | string;
    user: null | object
}

const initState: InitState = {
    loginError: null,
    regError: null,
    user: null,
}


export const authReducer = (state: InitState =initState, action: any) => {
    switch(action.type) {
        case REGISTER:
            console.log('reg')
            return {
                ...state,
                user:action.payload,
                loginError:null,
                regError: null
            }
        case REGISTER_ERROR:
            console.log('reg-error')
            return {
                ...state,
                regError: action.payload
            }
        case LOGOUT:
            console.log('logout');
            return {
                ...state,
                loginError:null,
                regError:null,
                user: null
            }
        case LOGIN:
            console.log('loged in');
            return {
                ...state,
                user: action.payload,
                loginError: null,
                regError: null
            }
        case LOGIN_ERROR:
            console.log('login error');
            return {
                ...state,
                loginError: action.payload
            }
        default: 
            return state;
    }
}

// export default authReducer;