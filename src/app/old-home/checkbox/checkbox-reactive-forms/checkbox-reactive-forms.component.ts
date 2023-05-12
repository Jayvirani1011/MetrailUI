import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkbox-reactive-forms',
  templateUrl: './checkbox-reactive-forms.component.html',
  styleUrls: ['./checkbox-reactive-forms.component.css']
})
export class CheckboxReactiveFormsComponent {
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false
  });

  constructor(private _formBuilder: FormBuilder){}
}
