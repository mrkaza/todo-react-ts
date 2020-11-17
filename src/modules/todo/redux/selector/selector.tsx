import { createSelector } from "reselect";
import { RootStore } from "../../../../consts";
import { TodoType } from "../../index";

const getTodos = (state: RootStore) => state.todo.todos;
const getOrder = (state: RootStore) => state.todo.orderBy;

export const selectTodos = createSelector(
  getTodos,
  getOrder,
  (todos, order) => {
    if (todos) {
      switch (order) {
        case "created.asc":
          return todos
            .slice()
            .sort(
              (a: TodoType, b: TodoType) =>
                parseFloat(b.createdAt.seconds) -
                parseFloat(a.createdAt.seconds)
            );

        case "created.desc":
          return todos
            .slice()
            .sort(
              (a: TodoType, b: TodoType) =>
                parseFloat(a.createdAt.seconds) -
                parseFloat(b.createdAt.seconds)
            );

        case "completed":
          return todos.filter((todo: TodoType) => todo.completed);

        case "not-completed":
          return todos.filter((todo: TodoType) => !todo.completed);
      }
    }
  }
);
