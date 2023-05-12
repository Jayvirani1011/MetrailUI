import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Charahters{
  name: string;
}

@Component({
  selector: 'app-chips-autocomplete',
  templateUrl: './chips-autocomplete.component.html',
  styleUrls: ['./chips-autocomplete.component.css'],
})
export class ChipsAutocompleteComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits?: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  charactersArr: Charahters[] = [
    {name: 'BabuRav'},
    {name: 'Raju'},
    {name: 'Shyam'},
    {name: 'TotlaSeth'},
    {name: 'Anuradha'},
  ];


  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor(){
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(''),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(e: MatChipInputEvent): void{
    const value = (e.value || '').trim();

    if(value) {
      this.fruits.push(value)
    }

    e.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void{
    const index = this.fruits.indexOf(fruit);

    if(index >= 0){
      this.fruits.splice(index, 1);
    }
  }

  selected(e: MatAutocompleteSelectedEvent): void{
    this.fruits.push(e.option.viewValue);
    this.fruitInput.nativeElement.value ='';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[]{
    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue))
  }

  // DragandDrop
  drop(event: CdkDragDrop<Charahters[]>) {
    moveItemInArray(this.charactersArr, event.previousIndex, event.currentIndex);
  }
}
