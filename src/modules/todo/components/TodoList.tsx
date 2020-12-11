import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { TodoType, selector } from "modules/todo";

const TodoList = () => {
  const todos = useSelector(selector);

  return (
    <div>
      {todos && !todos.length ? (
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
  );
};

export default TodoList;