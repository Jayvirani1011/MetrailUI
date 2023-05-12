import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChip, MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';

export interface Characters{
  name: string;
}

export interface ChipColor{
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-chips-input',
  templateUrl: './chips-input.component.html',
  styleUrls: ['./chips-input.component.css']
})
export class ChipsInputComponent {
  addOnBlur = true;
  readonly seperatorKeysCode = [ENTER, COMMA] as const;
  character: Characters[] = [{name: 'BabuRav'}, {name: 'Raju'}, {name: 'Shyam'},{name: 'Anuradha'}];

  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ]

  add(e: MatChipInputEvent): void{
    const value = (e.value || '').trim();

    if (value) {
      this.character.push({name: value});
    }

    e.chipInput!.clear();
  }

  remove(character: Characters): void{
    const index = this.character.indexOf(character);

    if(index >= 0){
      this.character.splice(index, 1);
    }
  }

  edit(character: Characters, e: MatChipEditedEvent){
    const value = e.value.trim();

    if(!value){
      this.remove(character);
      return;
    }

    const index = this.character.indexOf(character);
    if(index >= 0){
      this.character[index].name = value;
    }
  }
}
