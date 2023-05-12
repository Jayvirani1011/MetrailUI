import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-custome',
  templateUrl: './select-custome.component.html',
  styleUrls: ['./select-custome.component.css']
})
export class SelectCustomeComponent {
  toppings = new FormControl('')

  toppingList: string[] = ['Extra Cheese', 'Mashroom', 'Onion', 'Pepperoni', 'Sausag', 'Tamato'];

  disaleSelect = new FormControl(false);
}
