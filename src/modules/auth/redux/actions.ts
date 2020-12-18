import firebase from 'firebase';
import { AuthActionTypes } from 'modules/auth';
import {
  Action,
  ActionUnion,
  ActionWithPayload,
  createAction,
} from 'modules/redux';

export const AuthActions = {
  Register: (
    user: firebase.auth.UserCredential,
  ): ActionWithPayload<typeof AuthActionTypes.Register, typeof user> =>
    createAction(AuthActionTypes.Register, user),

  RegError: (error: {
    message: string;
  }): ActionWithPayload<typeof AuthActionTypes.RegError, typeof error> =>
    createAction(AuthActionTypes.RegError, error),

  Logout: (): Action<typeof AuthActionTypes.Logout> =>
    createAction(AuthActionTypes.Logout),

  Login: (
    user: firebase.auth.UserCredential,
  ): ActionWithPayload<typeof AuthActionTypes.Login, typeof user> =>
    createAction(AuthActionTypes.Login, user),

  LogError: (error: {
    message: string;
  }): ActionWithPayload<typeof AuthActionTypes.LogError, typeof error> =>
    createAction(AuthActionTypes.LogError, error),

  Facebook: (
    user: firebase.auth.UserCredential,
  ): ActionWithPayload<typeof AuthActionTypes.Facebook, typeof user> =>
    createAction(AuthActionTypes.Facebook, user),
};

export type AuthActions = ActionUnion<typeof AuthActions>;
