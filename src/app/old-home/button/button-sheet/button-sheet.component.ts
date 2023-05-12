import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-button-sheet',
  templateUrl: './button-sheet.component.html',
  styleUrls: ['./button-sheet.component.css']
})
export class ButtonSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetView);
  }
}

@Component({
  selector:'bottom-sheet-view',
  templateUrl:'bottom-sheet-view.component.html',
})

export class BottomSheetView{
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetView>){}

  openLink(e: MouseEvent){
    this._bottomSheetRef.dismiss();
    e.preventDefault();
  }
}
