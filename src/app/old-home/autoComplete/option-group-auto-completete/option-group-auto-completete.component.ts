import { Component } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import {FormBuilder} from '@angular/forms';
import { group } from '@angular/animations';

export interface StateGroup{
  letter: string,
  names: string[]
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLocaleString();
  return opt.filter(item => item.toLowerCase().includes(filterValue));
}

@Component({
  selector: 'app-option-group-auto-completete',
  templateUrl: './option-group-auto-completete.component.html',
  styleUrls: ['./option-group-auto-completete.component.css']
})
export class OptionGroupAutoCompleteteComponent {
  stateForm = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroup: StateGroup[] = [
    {
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      letter: 'C',
      names: ['California', 'Colorado', 'Connecticut'],
    },
    {
      letter: 'D',
      names: ['Delaware'],
    },
    {
      letter: 'F',
      names: ['Florida'],
    },
    {
      letter: 'G',
      names: ['Georgia'],
    },
    {
      letter: 'H',
      names: ['Hawaii'],
    },
    {
      letter: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
    },
    {
      letter: 'K',
      names: ['Kansas', 'Kentucky'],
    },
    {
      letter: 'L',
      names: ['Louisiana'],
    },
    {
      letter: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
      ],
    },
    {
      letter: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
      ],
    },
    {
      letter: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon'],
    },
    {
      letter: 'P',
      names: ['Pennsylvania'],
    },
    {
      letter: 'R',
      names: ['Rhode Island'],
    },
    {
      letter: 'S',
      names: ['South Carolina', 'South Dakota'],
    },
    {
      letter: 'T',
      names: ['Tennessee', 'Texas'],
    },
    {
      letter: 'U',
      names: ['Utah'],
    },
    {
      letter: 'V',
      names: ['Vermont', 'Virginia'],
    },
    {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
  ]

  stateGroupOptions?: Observable<StateGroup[]>;

  constructor(private _formBuilder: FormBuilder){}

  ngOnInit(){
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    )
  }

  private _filterGroup(value: string): StateGroup[]{
    if (value) {
      return this.stateGroup
      .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
      .filter(group => group.names.length > 0)
    }

    return this.stateGroup
  }
  
}
