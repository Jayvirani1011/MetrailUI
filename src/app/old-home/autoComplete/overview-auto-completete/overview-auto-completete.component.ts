import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State{
  flag: string,
  name: string,
  population: string
}

@Component({
  selector: 'app-overview-auto-completete',
  templateUrl: './overview-auto-completete.component.html',
  styleUrls: ['./overview-auto-completete.component.css']
})
export class OverviewAutoCompleteteComponent {
  stateCltl = new FormControl('');
  filteredState?: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  constructor(){
    this.filteredState = this.stateCltl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice()))
    );
  }

  private _filterStates(value: string): State[]{
    const finlValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().includes(finlValue));
  }
}
