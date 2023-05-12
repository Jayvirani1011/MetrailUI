import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-exclusive',
  templateUrl: './button-exclusive.component.html',
  styleUrls: ['./button-exclusive.component.css']
})
export class ButtonExclusiveComponent {
  groupControl = new FormControl('');
  groupStyle?: string;
}
