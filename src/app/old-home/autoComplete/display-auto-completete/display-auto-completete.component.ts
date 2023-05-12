import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

export interface User{
  name: string
}

@Component({
  selector: 'app-display-auto-completete',
  templateUrl: './display-auto-completete.component.html',
  styleUrls: ['./display-auto-completete.component.css']
})
export class DisplayAutoCompleteteComponent {
  myControl = new FormControl<string | User>('');
  option: User[] = [{name: 'BabuRav'},{name: 'Raju'},{name: 'Shyam'}];
  filteredOptions?: Observable<User[]>;

  ngOnInit(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const name =  typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) :  this.option.slice();
      })
    )
  }

  displyStr(user: User){
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): any {
    const finalValue = name.toLocaleLowerCase();
    return this.option.filter(opt => opt.name.toLocaleLowerCase().includes(finalValue));
  }
}
