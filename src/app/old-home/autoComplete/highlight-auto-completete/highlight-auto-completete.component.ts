import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-highlight-auto-completete',
  templateUrl: './highlight-auto-completete.component.html',
  styleUrls: ['./highlight-auto-completete.component.css']
})
export class HighlightAutoCompleteteComponent {
  myControl = new FormControl('');
  option: string[] = ['One','Two','Three'];
  filteredOption?: Observable<string[]>;

  ngOnInit(){
    this.filteredOption = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    )
  }
  private _filter(value: string): any {
    const filterValue = value.toLowerCase();

    return this.option.filter(option => option.toLowerCase().includes(filterValue));
  }
}
