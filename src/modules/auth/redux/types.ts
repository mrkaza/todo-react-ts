enum GetAuthActionTypes {
  Register = 'REGISTER',
  RegError = 'REGISTER_ERROR',
  Logout = 'LOGOUT',
  Login = 'LOGIN',
  LogError = 'LOGIN_ERROR',
  Facebook = 'FACEBOOK_LOGIN',
}

export const AuthActionTypes = {
  ...GetAuthActionTypes,
};
