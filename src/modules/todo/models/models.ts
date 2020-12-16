export type TodoType = null | {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
  createdAt: { nanoseconds: string; seconds: string; toDate(): any };
};

export interface TodoState {
  todos: null | TodoType[];
  crudMessage: null | string;
  todo: null | TodoType;
  search: null | string;
  orderBy: string;
}
