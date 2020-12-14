export type UserType = null | {
  user: {
    uid: string;
  };
};

type InitState = {
  loginError: null | string;
  regError: null | string;
  user: null | UserType;
};

type AuthReducer = (state: InitState | undefined, action: any) => InitState;

const initState: InitState = {
  loginError: null,
  regError: null,
  user: null,
};

export const authReducer: AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        user: action.payload,
        loginError: null,
        regError: null,
      };
    case 'REGISTER_ERROR':
      return {
        ...state,
        regError: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        loginError: null,
        regError: null,
        user: null,
      };
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        loginError: null,
        regError: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loginError: action.payload,
      };
    case 'FACEBOOK_LOGIN':
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
