import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: 'counter', component: CounterComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'todos', component: TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
