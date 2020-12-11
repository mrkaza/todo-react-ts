import { RootStore } from 'consts';
import { createSelector } from 'reselect';

import { TodoType } from './todoReducer';

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
          return todos
            .slice()
            .sort(
              (a: TodoType, b: TodoType) =>
                parseFloat(b.createdAt.seconds) -
                parseFloat(a.createdAt.seconds),
            );
        case 'created.desc':
          return todos
            .slice()
            .sort(
              (a: TodoType, b: TodoType) =>
                parseFloat(a.createdAt.seconds) -
                parseFloat(b.createdAt.seconds),
            );
        case 'completed':
          return todos.filter((todo: TodoType) => todo.completed);
        case 'not-completed':
          return todos.filter((todo: TodoType) => !todo.completed);
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
        return todo.title.includes(search);
      });
    } else {
      return orderedTodos;
    }
  },
);
