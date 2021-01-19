import { CustomHook } from 'models';
import { orderTodos } from 'modules/todo';
import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

interface Api {
  // handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  // orderBy: VoidFunction;
  orderAsc: () => void;
  orderDesc: () => void;
  orderCompleted: () => void;
  orderNotCompleted: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
interface State {
  order: string;
}

export const useOrderBy: CustomHook<State, Api> = () => {
  const [order, setOrder] = useState<string>('created.asc');
  const dispatch = useDispatch();

  const orderBy = useCallback(() => {
    dispatch(orderTodos(order));
  }, [dispatch, order]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      orderBy();
    },
    [orderBy],
  );

  const orderAsc = useCallback(() => {
    setOrder('created.asc');
  }, []);

  const orderDesc = useCallback(() => {
    setOrder('created.desc');
  }, []);

  const orderCompleted = useCallback(() => {
    setOrder('completed');
  }, []);

  const orderNotCompleted = useCallback(() => {
    setOrder('not-completed');
  }, []);

  const state = useMemo(() => ({ order }), [order]);

  const api = useMemo(
    () => ({
      orderAsc,
      orderDesc,
      orderCompleted,
      orderNotCompleted,
      handleSubmit,
    }),
    [orderAsc, orderDesc, orderCompleted, orderNotCompleted, handleSubmit],
  );
  return [state, api];
};
