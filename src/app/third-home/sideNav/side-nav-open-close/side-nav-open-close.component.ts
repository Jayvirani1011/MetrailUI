import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav-open-close',
  templateUrl: './side-nav-open-close.component.html',
  styleUrls: ['./side-nav-open-close.component.css']
})
export class SideNavOpenCloseComponent {
  events: string[] = [];
  opened:boolean = false;
}
