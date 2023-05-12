import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-expand-toggles',
  templateUrl: './expand-toggles.component.html',
  styleUrls: ['./expand-toggles.component.css']
})
export class ExpandTogglesComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion | any;
}
