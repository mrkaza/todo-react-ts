import firebase from 'firebase';
import { CustomHook } from 'models';
import { login } from 'modules/auth';
import { RootStore } from 'modules/redux';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slide, toast } from 'react-toastify';

interface Api {
  onSubmit: (data: { email: string; password: string }) => void;
}

interface State {
  errorMessage: null | { message: string };
}

export const useSignIn: CustomHook<State, Api> = () => {
  const dispatch = useDispatch();

  const errorMessage = useSelector((state: RootStore) => state.auth.loginError);

  const onSubmit = useCallback(
    (data: { email: string; password: string }) => {
      const notify = () =>
        toast(errorMessage?.message, {
          transition: Slide,
          autoClose: false,
        });
      if (errorMessage) {
        notify();
      }
      dispatch(login(data.email, data.password));
      const loginCount = firebase.functions().httpsCallable('loginCount');
      loginCount().then((result) => {
        console.log(result);
      });
    },
    [dispatch, errorMessage],
  );

  const api = useMemo(
    () => ({
      onSubmit,
    }),
    [onSubmit],
  );

  const state = useMemo(
    () => ({
      errorMessage,
    }),
    [errorMessage],
  );

  return [state, api];
};
