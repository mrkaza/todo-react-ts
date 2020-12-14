interface Register {
  type: 'REGISTER';
  payload: Record<string, unknown>;
}
interface RegisterError {
  type: 'REGISTER_ERROR';
  payload: { message: string };
}

interface Logout {
  type: 'LOGOUT';
}

interface Login {
  type: 'LOGIN';
  payload: Record<string, unknown>;
}
interface LoginError {
  type: 'LOGIN_ERROR';
  payload: { message: string };
}
interface FacebookLogin {
  type: 'FACEBOOK_LOGIN';
  payload: Record<string, unknown>;
}

export type AuthDispatchTypes =
  | Register
  | RegisterError
  | Logout
  | Login
  | LoginError
  | FacebookLogin;
