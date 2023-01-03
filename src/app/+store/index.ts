import { routerReducer, RouterReducerState } from "@ngrx/router-store"
import { ActionReducerMap, createReducer, on } from "@ngrx/store"
import { Todo } from "../todo"
import { change, decrement, increment, loadTodosFailure, loadTodosSuccess } from "./actions"

export interface State {
  main: IMainState,
  router: RouterReducerState<any>
}

export interface IMainState {
  counter: number,
  todos: null | Todo[]
}

const mainInitialState: IMainState = {
  counter: 0,
  todos: null
}
export const mainReducer = createReducer<IMainState>(
  mainInitialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(change, (state, { counter }) => ({ ...state, counter })),
  on(loadTodosSuccess, (state, { todos }) => ({ ...state, todos })),
  on(loadTodosFailure, (state, { err }) => {
    console.error(err);
    return { ...state }
  })
)

export const reducers: ActionReducerMap<State> = {
  main: mainReducer,
  router: routerReducer
}