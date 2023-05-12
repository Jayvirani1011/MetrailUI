import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog-injectingdata',
  templateUrl: './dialog-injectingdata.component.html',
  styleUrls: ['./dialog-injectingdata.component.css']
})
export class DialogInjectingdataComponent {
  constructor(public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
    
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})

export class DialogDataExampleDialog{
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
