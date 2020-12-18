import { CustomHook } from 'models';
import { login } from 'modules/auth';
import { RootStore } from 'modules/redux';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
      dispatch(login(data.email, data.password));
      console.log(data);
    },
    [dispatch],
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
