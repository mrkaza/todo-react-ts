import firebase from 'firebase';

export type TodoType = {
  todo: firebase.firestore.DocumentData;
  id: string;
};

export interface TodoState {
  todos: null | TodoType[];
  todo?: firebase.firestore.DocumentData | null;
  search: null | string;
  orderBy: string;
  todoCount?: firebase.firestore.DocumentData | null;
}

export interface Dispatch {
  type: string;
  payload?: string | null;
}

export interface TodoCount {
  count: number;
  completed: number;
}

// Type '{ crudMessage: string; todos: TodoType[] | null; todo: DocumentData | null; search: string | null; orderBy: string; } | { todo: DocumentData | undefined; todos: TodoType[] | null; crudMessage: { ...; } | null; search: string | null; orderBy: string; } | { ...; }' is not assignable to type 'TodoState'.
//     Type '{ crudMessage: string; todos: TodoType[] | null; todo: firebase.firestore.DocumentData | null; search: string | null; orderBy: string; }' is not assignable to type 'TodoState'.
