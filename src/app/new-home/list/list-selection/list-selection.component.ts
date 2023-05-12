import { Component } from '@angular/core';

@Component({
  selector: 'app-list-selection',
  templateUrl: './list-selection.component.html',
  styleUrls: ['./list-selection.component.css']
})
export class ListSelectionComponent {
  typeOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  typeOfCloths: string[] = ['Puma', 'Nike', 'Zudio', 'Pantaloose', 'M2M'];
}
