import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav-custom-escape',
  templateUrl: './side-nav-custom-escape.component.html',
  styleUrls: ['./side-nav-custom-escape.component.css']
})
export class SideNavCustomEscapeComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | any;

  reson: string = '';

  close(reson: string){
    this.reson = reson;
    this.sidenav.close();
  }
}
