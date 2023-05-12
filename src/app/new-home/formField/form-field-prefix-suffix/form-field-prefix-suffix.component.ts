import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-form-field-prefix-suffix',
  templateUrl: './form-field-prefix-suffix.component.html',
  styleUrls: ['./form-field-prefix-suffix.component.css']
})
export class FormFieldPrefixSuffixComponent {
  hide: boolean = true;
  colorControl = new FormControl('primary' as ThemePalette);
}
