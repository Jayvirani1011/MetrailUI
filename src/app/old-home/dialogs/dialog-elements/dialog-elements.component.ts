import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-elements',
  templateUrl: './dialog-elements.component.html',
  styleUrls: ['./dialog-elements.component.css']
})
export class DialogElementsComponent {
  constructor(public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(DialogelementsExampleDialog)
  }
}

@Component({
  selector: 'dialog-element-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html'
})

export class DialogelementsExampleDialog{}
