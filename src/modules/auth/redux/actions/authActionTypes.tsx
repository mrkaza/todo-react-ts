export const REGISTER = 'REGISTER';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGOUT = 'LOGOUT';

export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';

export interface Register {
    type: typeof REGISTER,
    payload: object
}
export interface RegisterError {
    type: typeof REGISTER_ERROR,
    payload: object
}

export interface Logout {
    type: typeof LOGOUT
}

export interface Login {
    type: typeof LOGIN,
    payload: object
}
export interface LoginError {
    type: typeof LOGIN_ERROR,
    payload: object
}

export interface FacebookLogin {
    type: typeof FACEBOOK_LOGIN,
    payload: object
}

export type AuthDispatchTypes = Register | RegisterError | Logout | Login | LoginError | FacebookLogin;