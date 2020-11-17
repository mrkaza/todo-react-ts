interface Register {
  type: "REGISTER";
  payload: object;
}
interface RegisterError {
  type: "REGISTER_ERROR";
  payload: object;
}

interface Logout {
  type: "LOGOUT";
}

interface Login {
  type: "LOGIN";
  payload: object;
}
interface LoginError {
  type: "LOGIN_ERROR";
  payload: object;
}
interface FacebookLogin {
  type: "FACEBOOK_LOGIN";
  payload: object;
}

export type AuthDispatchTypes =
  | Register
  | RegisterError
  | Logout
  | Login
  | LoginError
  | FacebookLogin;
