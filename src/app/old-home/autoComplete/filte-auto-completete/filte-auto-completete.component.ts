import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-filte-auto-completete',
  templateUrl: './filte-auto-completete.component.html',
  styleUrls: ['./filte-auto-completete.component.css']
})
export class FilteAutoCompleteteComponent {
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
    const filterValue = value.toLocaleLowerCase();

    return this.option.filter(option => option.toLocaleLowerCase().includes(filterValue))
  }

  
}
