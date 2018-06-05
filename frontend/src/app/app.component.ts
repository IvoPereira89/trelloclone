import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: `
    <header>
      <h1>{{ title }}</h1>
    </header>
    <div class="container">
      <app-lists></app-lists>
    </div>
    <footer>

    </footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'TrelloClone';

  constructor() {}

}
