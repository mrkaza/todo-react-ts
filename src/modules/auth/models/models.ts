import firebase from 'firebase';

// export type UserType = null | {
//   user: {
//     uid: string;
//   };
// };

export interface AuthState {
  loginError: null | { message: string };
  regError: null | { message: string };
  user: null | firebase.auth.UserCredential;
}
