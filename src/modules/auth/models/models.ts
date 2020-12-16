// NOVO

export type UserType = null | {
  user: {
    uid: string;
  };
};

export interface AuthState {
  loginError: null | string;
  regError: null | string;
  user: null | UserType;
}
