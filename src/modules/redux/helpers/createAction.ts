import { Action, ActionWithPayload } from '../models';

//create action with type only

export function createAction<T extends string>(type: T): Action<T>;

//create action with type and payload
export function createAction<T extends string, P>(
  type: T,
  payload: P,
): ActionWithPayload<T, P>;

//create action with type and optional payload

export function createAction<T extends string, P>(type: T, payload?: P) {
  return !payload ? { type } : { type, payload };
}
