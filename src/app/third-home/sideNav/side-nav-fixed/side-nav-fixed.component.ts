import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-side-nav-fixed',
  templateUrl: './side-nav-fixed.component.html',
  styleUrls: ['./side-nav-fixed.component.css']
})
export class SideNavFixedComponent {
  options = this._formBulder.group({
    bottom: 0,
    fixed: false,
    top: 0
  })

  constructor(private _formBulder: FormBuilder){}

  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
