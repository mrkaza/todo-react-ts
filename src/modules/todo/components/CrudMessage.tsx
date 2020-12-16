import { RootStore } from 'modules/redux';
import { removeCrud } from 'modules/todo';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CrudMessage: React.FC = () => {
  const dispatch = useDispatch();
  const message: null | string = useSelector(
    (state: RootStore) => state.todo.crudMessage,
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeCrud());
    }, 1000);
  }, [message, dispatch]);

  return (
    <div className="col s12 crud-message">{message && <p>{message}</p>}</div>
  );
};

export default CrudMessage;
