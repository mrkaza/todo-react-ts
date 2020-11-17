import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../../consts/rootReducer";
import { removeCrud } from "../index";

const CrudMessage = () => {
  const dispatch = useDispatch();
  const message = useSelector((state: RootStore) => state.todo.crudMessage);

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeCrud());
    }, 1000);
  }, [message]);

  return (
    <div className="col s12 crud-message">
      {message ? <p>{message}</p> : null}
    </div>
  );
};

export default CrudMessage;
