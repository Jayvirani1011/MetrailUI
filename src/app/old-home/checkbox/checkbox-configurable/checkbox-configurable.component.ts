import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-configurable',
  templateUrl: './checkbox-configurable.component.html',
  styleUrls: ['./checkbox-configurable.component.css']
})
export class CheckboxConfigurableComponent {
  checked: boolean = false;
  indeterminate: boolean = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
