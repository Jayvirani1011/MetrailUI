import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent {
  step = 0;

  setStep(index: number){
    this.step = index;
  }

  nextStep(){
    this.step++;
  }

  prevStep(){
    this.step--;
  }
}
