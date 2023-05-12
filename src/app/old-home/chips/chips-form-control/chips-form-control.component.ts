import { keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chips-form-control',
  templateUrl: './chips-form-control.component.html',
  styleUrls: ['./chips-form-control.component.css'],
})
export class ChipsFormControlComponent {
  keyWords = ['Angular', 'how to', 'tutorial', 'accessibility'];
  formControl = new FormControl(['angular']);

  removeKeyWord(keyWord: string){
    const index = this.keyWords.indexOf(keyWord);
    if(index >= 0){
      this.keyWords.splice(index, 1);
    }
  }

  add(e: MatChipInputEvent): void{
    const value = (e.value || '').trim();

    if(value){
      this.keyWords.push(value);
    }

    e.chipInput.clear();
  }
}
