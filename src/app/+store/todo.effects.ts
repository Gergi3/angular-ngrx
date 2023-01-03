import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs";
import { TodosService as TodoService } from "../todos.service";
import { loadTodos, loadTodosFailure, loadTodosSuccess } from "./actions";

@Injectable()
export class TodoEffects {

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(loadTodos),
    mergeMap(() => this.todosService.getAll().pipe(
      map(todos => loadTodosSuccess({ todos })),
      catchError(err => [loadTodosFailure({ err })])
    ))
  ))

  constructor(
    private actions$: Actions,
    private todosService: TodoService
  ) { }
}