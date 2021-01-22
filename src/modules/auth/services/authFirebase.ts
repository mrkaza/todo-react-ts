// import { AuthDispatchTypes } from 'modules/auth';
import { AuthActions } from 'modules/auth';
import { firebaseAuth, provider } from 'modules/firebase';
import { Dispatch } from 'redux';

export const registerUser = (newUser: { email: string; password: string }) => {
  return (dispatch: Dispatch<AuthActions>): void => {
    firebaseAuth
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((user) => {
        dispatch(AuthActions.Register(user));
      })
      .catch((error) => {
        dispatch(AuthActions.RegError(error));
      });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<AuthActions>): void => {
    firebaseAuth.signOut().then(() => {
      dispatch(AuthActions.Logout());
    });
  };
};

export const login = (email: string, password: string) => {
  return (dispatch: Dispatch<AuthActions>): void => {
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(AuthActions.Login(user));
      })
      .catch((error) => {
        dispatch(AuthActions.LogError(error));
      });
  };
};

export const facebookLogin = () => {
  return (dispatch: Dispatch<AuthActions>): void => {
    firebaseAuth.signInWithPopup(provider).then((user) => {
      dispatch(AuthActions.Facebook(user));
    });
  };
};
