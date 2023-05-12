import { Component } from '@angular/core';

interface routerInterface {
  id: string;
  class: string;
  routerlink: string;
  name: string;
  child?: {
    id: string;
    class: string;
    routerlink: string;
    name: string;
  }[];
}

@Component({
  selector: 'app-third-home',
  templateUrl: './third-home.component.html',
  styleUrls: ['./third-home.component.css'],
})
export class ThirdHomeComponent {
  routeObj: routerInterface[] = [
    {
      id: crypto.randomUUID(),
      class: 'nav-item',
      routerlink: '/newHome',
      name: 'New Hopme',
    },
    {
      id: crypto.randomUUID(),
      class: 'nav-item',
      routerlink: '/newHome',
      name: 'New Hopme',
      child: [
        {
          id: crypto.randomUUID(),
          class: 'nav-item',
          routerlink: '/newHome',
          name: 'child Hopme',
        },
        {
          id: crypto.randomUUID(),
          class: 'nav-item',
          routerlink: '/newHome',
          name: 'child  Hopme',
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      class: 'nav-item',
      routerlink: '/newHome',
      name: 'New Hopme',
    },
  ];
}
