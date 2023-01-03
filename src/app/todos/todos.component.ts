import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTodos } from '../+store/actions';
import { getTodos } from '../+store/selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  
  todos$ = this.store.select(getTodos);
  
  constructor(
    private store: Store
  ) { }

  reloadTodosHandler() {
    this.store.dispatch(loadTodos())
  }
}
