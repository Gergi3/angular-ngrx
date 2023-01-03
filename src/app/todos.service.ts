import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(filter(x => !!x))
  }
}
