import { firestore } from 'modules/firebase';
import { TodoDispatchTypes } from 'modules/todo';
import { Dispatch } from 'redux';

export const getUserTodos = (userId: string) => {
  return (dispatch: Dispatch<TodoDispatchTypes>): void => {
    const todos: Record<string, unknown>[] = [];
    firestore
      .collection('todos')
      .where('userId', '==', userId)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          const todo = doc.data();
          todo.id = doc.id;
          todos.push(todo);
        });
        dispatch({ type: 'GET_TODOS', payload: todos });
      });
  };
};

export const addTodo = (
  todo: { title: string; description: string },
  userId: string,
) => {
  return (dispatch: Dispatch<TodoDispatchTypes>): void => {
    firestore
      .collection('todos')
      .add({
        title: todo.title,
        description: todo.description,
        completed: false,
        createdAt: new Date(),
        userId: userId,
      })
      .then(() => {
        dispatch({ type: 'ADD_TODO', payload: 'Todo added!' });
      })
      .catch(() => {
        dispatch({
          type: 'ADD_TODO_ERROR',
          payload: 'There was a probem adding todo.',
        });
      });
  };
};

export const deleteTodo = (id: string) => {
  return (dispatch: Dispatch<TodoDispatchTypes>): void => {
    firestore
      .collection('todos')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_TODO', payload: 'Todo deleted!' });
      });
  };
};

export const completeTodo = (id: string) => {
  return (dispatch: Dispatch<TodoDispatchTypes>): void => {
    firestore
      .collection('todos')
      .doc(id)
      .update({
        completed: true,
      })
      .then(() => {
        dispatch({ type: 'COMPLETE_TODO', payload: 'Todo Completed!' });
      });
  };
};

export const todoDetails = (id: string) => {
  return (dispatch: Dispatch<TodoDispatchTypes>): void => {
    firestore
      .collection('todos')
      .doc(id)
      .get()
      .then((doc) => {
        dispatch({ type: 'TODO_DETAILS', payload: doc.data() });
      });
  };
};

export const editTodo = (newDesc: string, id: string) => {
  return (dispatch: Dispatch<TodoDispatchTypes>): void => {
    firestore
      .collection('todos')
      .doc(id)
      .update({
        description: newDesc,
      })
      .then(() => {
        dispatch({ type: 'EDIT_TODO', payload: 'Todo edited.' });
      });
  };
};
