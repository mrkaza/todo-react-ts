import { RootStore } from 'modules/redux';
import { TodoType } from 'modules/todo';
import { createSelector } from 'reselect';

const getTodos = (state: RootStore) => state.todo.todos;
const getOrder = (state: RootStore) => state.todo.orderBy;
const getSearch = (state: RootStore) => state.todo.search;

export const selectTodos = createSelector(
  getTodos,
  getOrder,
  (todos, order) => {
    if (todos) {
      switch (order) {
        case 'created.asc':
          return todos.slice().sort((a: TodoType, b: TodoType): number => {
            let x = 0;
            if (a && b) {
              x =
                parseFloat(b.todo.createdAt.seconds) -
                parseFloat(a.todo.createdAt.seconds);
            }
            return x;
          });
        case 'created.desc':
          return todos.slice().sort((a: TodoType, b: TodoType): number => {
            let x = 0;
            if (a && b) {
              x =
                parseFloat(a.todo.createdAt.seconds) -
                parseFloat(b.todo.createdAt.seconds);
            }
            return x;
          });
        case 'completed':
          return todos.filter((todo: TodoType) => todo?.todo.completed);
        case 'not-completed':
          return todos.filter((todo: TodoType) => !todo?.todo.completed);
      }
    }
  },
);

export const selector = createSelector(
  selectTodos,
  getSearch,
  (orderedTodos, search) => {
    if (search && orderedTodos) {
      return orderedTodos.filter((todo: TodoType) => {
        return todo?.todo.title.includes(search);
      });
    } else {
      return orderedTodos;
    }
  },
);
