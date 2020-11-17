import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../consts";
import { firestore } from "../../../consts/fbConfig";
import { getUserTodos } from "../redux/actions/todoActions";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import CrudMessage from "./CrudMessage";
import { TodoType } from "../index";
import { UserType } from "../../auth";

export const Todo = () => {
  const dispatch = useDispatch();
  const user: UserType = useSelector((state: RootStore) => state.auth.user);
  const userId: string = user.user.uid;
  let todos: TodoType[] = useSelector((state: RootStore) => state.todo.todos);

  useEffect(() => {
    firestore.collection("todos").onSnapshot(() => {
      dispatch(getUserTodos(userId));
    });
  }, []);

  const search = useSelector((state: RootStore) => state.todo.search);
  const orderBy = useSelector((state: RootStore) => state.todo.orderBy);

  const orderTodos = () => {
    if (todos && orderBy) {
      if (orderBy === "created.asc") {
        todos = todos
          .slice()
          .sort(
            (a: any, b: any) =>
              parseFloat(b.createdAt.seconds) - parseFloat(a.createdAt.seconds)
          );
      } else if (orderBy === "created.desc") {
        todos = todos
          .slice()
          .sort(
            (a: any, b: any) =>
              parseFloat(a.createdAt.seconds) - parseFloat(b.createdAt.seconds)
          );
      } else if (orderBy === "completed") {
        todos = todos.filter((todo: { completed: boolean }) => {
          return todo.completed === true;
        });
      } else if (orderBy === "not-completed") {
        todos = todos.filter((todo: { completed: boolean }) => {
          return todo.completed === false;
        });
      }
    }
  };

  if (todos && search) {
    todos = todos.filter((todo: { title: string }) => {
      return todo.title.includes(search);
    });
    orderTodos();
  } else {
    orderTodos();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <TodoForm />
        </div>
        <TodoFilter />
        <CrudMessage />
        {todos && todos.length === 0 ? (
          <div className="col s12 no-todos">
            No todos matching your parameters.
          </div>
        ) : (
          <div className="col s12">
            {todos &&
              todos.map((todo: TodoType) => {
                return <TodoItem todo={todo} key={todo.id} />;
              })}
          </div>
        )}
      </div>
    </div>
  );
};
