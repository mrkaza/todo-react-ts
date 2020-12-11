import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from 'consts';
import { removeCrud } from 'modules/todo';

const CrudMessage = () => {
  const dispatch = useDispatch();
  const message: null | string = useSelector(
    (state: RootStore) => state.todo.crudMessage,
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeCrud());
    }, 1000);
  }, [message]);

  return (
    <div className="col s12 crud-message">{message && <p>{message}</p>}</div>
  );
};

export default CrudMessage;
