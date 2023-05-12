import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-dialog-menu',
  templateUrl: './dialog-menu.component.html',
  styleUrls: ['./dialog-menu.component.css']
})
export class DialogMenuComponent {
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger|null=null;

  constructor(public dialog: MatDialog){}

  openDialog() {
    const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, {restoreFocus: false})

    dialogRef.afterClosed().subscribe(() => this.menuTrigger?.focus());
  }
}

@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'dialog-from-menu-example-dialog.html',
})

export class DialogFromMenuExampleDialog{}