import { AuthDispatchTypes } from 'modules/auth';
import { firebaseAuth, provider } from 'modules/firebase';
import { Dispatch } from 'redux';

export const registerUser = (newUser: { email: string; password: string }) => {
  return (dispatch: Dispatch<AuthDispatchTypes>): void => {
    firebaseAuth
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((user) => {
        dispatch({ type: 'REGISTER', payload: user });
      })
      .catch((error) => {
        dispatch({ type: 'REGISTER_ERROR', payload: error.message });
      });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<AuthDispatchTypes>): void => {
    firebaseAuth.signOut().then(() => {
      dispatch({ type: 'LOGOUT' });
    });
  };
};

export const login = (email: string, password: string) => {
  return (dispatch: Dispatch<AuthDispatchTypes>): void => {
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: 'LOGIN', payload: user });
      })
      .catch((error) => {
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
      });
  };
};

export const facebookLogin = () => {
  return (dispatch: Dispatch<AuthDispatchTypes>): void => {
    firebaseAuth.signInWithPopup(provider).then((user) => {
      dispatch({ type: 'FACEBOOK_LOGIN', payload: user });
    });
  };
};
