import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-custome-email',
  templateUrl: './form-custome-email.component.html',
  styleUrls: ['./form-custome-email.component.css']
})
export class FormCustomeEmailComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage(){
    if(this.email.hasError('requried')){
      return  'You must be enter the valid email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
