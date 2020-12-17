import firebase from 'firebase';
import { AuthActionTypes } from 'modules/auth';
import { ActionUnion, createAction } from 'modules/redux';

export const AuthActions = {
  Register: (user: firebase.auth.UserCredential) =>
    createAction(AuthActionTypes.Register, user),

  RegError: (error: { message: string }) =>
    createAction(AuthActionTypes.RegError, error),

  Logout: () => createAction(AuthActionTypes.Logout),

  Login: (user: firebase.auth.UserCredential) =>
    createAction(AuthActionTypes.Login, user),

  LogError: (error: { message: string }) =>
    createAction(AuthActionTypes.LogError, error),

  Facebook: (user: firebase.auth.UserCredential) =>
    createAction(AuthActionTypes.Facebook, user),
};

export type AuthActions = ActionUnion<typeof AuthActions>;
