//action only has type

export interface Action<T extends string> {
  type: T;
}

//action has type and payload

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}
