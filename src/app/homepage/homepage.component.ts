import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  heroes = [
    {
      name: 'Windstorm',
      id: 1,
    },
    {
      name: 'Bombasto',
      id: 1,
    }
  ]

  today = null;
}
