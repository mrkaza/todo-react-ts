import { CustomHook } from 'models';
import { orderTodos } from 'modules/todo';
import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

interface Api {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  orderBy: VoidFunction;
}
interface State {
  order: string;
}

export const useOrderBy: CustomHook<State, Api> = () => {
  const [order, setOrder] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setOrder(e.target.value);
    },
    [],
  );

  const orderBy = useCallback(() => {
    dispatch(orderTodos(order));
  }, [dispatch, order]);

  const state = useMemo(() => ({ order }), [order]);

  const api = useMemo(
    () => ({
      handleChange,
      orderBy,
    }),
    [handleChange, orderBy],
  );
  return [state, api];
};
