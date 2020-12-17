import { CustomHook } from 'models';
import { searchTodo } from 'modules/todo';
import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

interface Api {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

interface State {
  search: string;
}

export const useSearch: CustomHook<State, Api> = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(searchTodo(search));
    },
    [dispatch, search],
  );

  const state = useMemo(
    () => ({
      search,
    }),
    [search],
  );

  const api = useMemo(
    () => ({
      handleSubmit,
      setSearch,
    }),
    [handleSubmit],
  );

  return [state, api];
};
