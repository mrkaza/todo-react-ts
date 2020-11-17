import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoDetails } from "../modules/todo/index";
import { useParams } from "react-router-dom";
import { RootStore } from "../consts/rootReducer";
import { format } from "date-fns";

const TodoDetails = () => {
  const dispatch = useDispatch();
  const routeParams: { id: string } = useParams();
  const id = routeParams.id;

  useEffect(() => {
    dispatch(todoDetails(id));
  }, []);

  const todo = useSelector((state: RootStore) => state.todo.todo);
  return (
    <div className="container">
      {todo ? (
        <div className="row">
          <div className="col s12 l6 offset-l3">
            <div className="card">
              <div className="todo-item">
                <p className="title teal white-text">{todo.title}</p>
                <p className="desc">{todo.description}</p>
                <div className="edit">
                  <p className="created">
                    Created at:{" "}
                    {format(todo.createdAt.toDate(), "do MMM yyyy, H:mm")}{" "}
                  </p>
                  {todo.completed ? (
                    <p className="created">Completed: true</p>
                  ) : (
                    <p className="created">Completed: false</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default TodoDetails;
