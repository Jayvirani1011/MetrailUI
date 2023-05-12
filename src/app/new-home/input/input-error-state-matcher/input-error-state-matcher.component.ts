import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmmited = form && form.submitted
    return  !! (control && control.invalid && (control.dirty || control.touched || isSubmmited));
  }
}

@Component({
  selector: 'app-input-error-state-matcher',
  templateUrl: './input-error-state-matcher.component.html',
  styleUrls: ['./input-error-state-matcher.component.css']
})
export class InputErrorStateMatcherComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  emailfc = new FormControl('', [Validators.required, Validators.email]);
}
