import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { change, decrement, increment } from '../+store/actions';
import { getCounter } from '../+store/selectors';
  
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  counter$ = this.store.select(getCounter)

  constructor(
    private store: Store
  ) { }

  incrementHandler() {
    this.store.dispatch(increment());
  }
  
  decrementHandler() {
    this.store.dispatch(decrement());
  }

  changeHandler(num: number) {
    this.store.dispatch(change({ counter: num }))
  }
}
