import { AuthState } from 'modules/auth';
import { AuthActions, AuthActionTypes } from 'modules/auth';

type AuthReducer = (
  state: AuthState | undefined,
  action: AuthActions,
) => AuthState;

const INIT_STATE: AuthState = {
  loginError: null,
  regError: null,
  user: null,
};

export const authReducer: AuthReducer = (
  state = INIT_STATE,
  action: AuthActions,
) => {
  switch (action.type) {
    case AuthActionTypes.Register:
      return {
        ...state,
        user: action.payload,
        loginError: null,
        regError: null,
      };
    case AuthActionTypes.RegError:
      return {
        ...state,
        regError: action.payload,
      };
    case AuthActionTypes.Logout:
      return {
        ...state,
        loginError: null,
        regError: null,
        user: null,
      };
    case AuthActionTypes.Login:
      return {
        ...state,
        user: action.payload,
        loginError: null,
        regError: null,
      };
    case AuthActionTypes.LogError:
      return {
        ...state,
        loginError: action.payload,
      };
    case AuthActionTypes.Facebook:
      return {
        ...state,
        loginError: null,
        regError: null,
        user: action.payload,
      };
    default:
      return state;
  }
};
