import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-buttontoggles-forms',
  templateUrl: './buttontoggles-forms.component.html',
  styleUrls: ['./buttontoggles-forms.component.css']
})
export class ButtontogglesFormsComponent {
  fontStyleControl = new FormControl('');
  fontStyle?: string;
}
