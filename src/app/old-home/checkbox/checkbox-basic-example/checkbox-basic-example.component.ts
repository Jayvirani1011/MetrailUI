import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task{
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtask?: Task[];
}

@Component({
  selector: 'app-checkbox-basic-example',
  templateUrl: './checkbox-basic-example.component.html',
  styleUrls: ['./checkbox-basic-example.component.css']
})
export class CheckboxBasicExampleComponent {
  task: Task ={
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtask: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete(){
    this.allComplete = this.task.subtask != null && this.task.subtask.every(t => t.completed);
  }

  someComplete(){
    if (this.task.subtask == null) {
      return false;
    }
    return this.task.subtask.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(complete: boolean){
    this.allComplete = complete;
    if (this.task.subtask == null) {
      return;
    }
    this.task.subtask.forEach(t => (t.completed = complete));
  }
}
