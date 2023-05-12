import { Component } from '@angular/core';

export interface Tile{
  color: string,
  cols: number,
  rows: number,
  text: string
}

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'OneDFour', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
