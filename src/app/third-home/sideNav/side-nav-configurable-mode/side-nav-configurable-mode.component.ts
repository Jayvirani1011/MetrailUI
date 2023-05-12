import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav-configurable-mode',
  templateUrl: './side-nav-configurable-mode.component.html',
  styleUrls: ['./side-nav-configurable-mode.component.css']
})
export class SideNavConfigurableModeComponent {
  mode = new FormControl('over' as MatDrawerMode);
}
