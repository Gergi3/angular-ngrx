import { createAction, props } from "@ngrx/store"
import { Todo } from "../todo";

export const actionTypes = {
  increment: '[Counter Component] INCREMENT',
  decrement: '[Counter Component] DECREMENT',
  change: '[Counter Component] CHANGE',

  loadTodos: '[Todos API] LOAD_TODOS',
  loadTodosSuccess: '[Todos API] LOAD_TODOS_SUCCESS',
  loadTodosFailure: '[Todos API] LOAD_TODOS_FAILURE',
}

export const increment = createAction(actionTypes.increment);
export const decrement = createAction(actionTypes.decrement);
export const change = createAction(actionTypes.change, props<{ counter: number }>());

export const loadTodos = createAction(actionTypes.loadTodos);
export const loadTodosSuccess = createAction(actionTypes.loadTodosSuccess, props<{ todos: Todo[] }>());
export const loadTodosFailure = createAction(actionTypes.loadTodosFailure, props<{ err: any }>());