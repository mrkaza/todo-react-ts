import { firestore } from 'modules/firebase';
import { TodoActions, TodoType } from 'modules/todo';
import { Dispatch } from 'redux';

export const getUserTodos = (userId: string) => {
  return (dispatch: Dispatch<TodoActions>): void => {
    const todos: TodoType[] = [];
    firestore
      .collection('todos')
      .where('userId', '==', userId)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          const todo = doc.data();
          const id = doc.id;
          const newTodo = { todo: todo, id: id };
          todos.push(newTodo);
        });
        dispatch(TodoActions.GetTodos(todos));
      });
  };
};

export const addTodo = (
  todo: { title: string; description: string },
  userId: string,
) => {
  return (dispatch: Dispatch<TodoActions>): void => {
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
        dispatch(TodoActions.AddTodo({ message: 'Todo added' }));
      })
      .catch(() => {
        dispatch(
          TodoActions.AddTodoError({
            message: 'There was a probem adding todo.',
          }),
        );
      });
  };
};

export const deleteTodo = (id: string) => {
  return (dispatch: Dispatch<TodoActions>): void => {
    firestore
      .collection('todos')
      .doc(id)
      .delete()
      .then(() => {
        dispatch(TodoActions.DeleteTodo({ message: 'Todo deleted' }));
      });
  };
};

export const completeTodo = (id: string) => {
  return (dispatch: Dispatch<TodoActions>): void => {
    firestore
      .collection('todos')
      .doc(id)
      .update({
        completed: true,
      })
      .then(() => {
        dispatch(TodoActions.CompleteTodo({ message: 'Todo completed' }));
      });
  };
};

export const todoDetails = (id: string) => {
  return (dispatch: Dispatch<TodoActions>): void => {
    firestore
      .collection('todos')
      .doc(id)
      .get()
      .then((doc) => {
        dispatch(TodoActions.TodoDetails(doc.data()));
      });
  };
};

export const editTodo = (newDesc: string, id: string) => {
  return (dispatch: Dispatch<TodoActions>): void => {
    firestore
      .collection('todos')
      .doc(id)
      .update({
        description: newDesc,
      })
      .then(() => {
        dispatch(TodoActions.EditTodo({ message: 'Todo edited' }));
      });
  };
};
