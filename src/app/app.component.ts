import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-input-output-fe';
  username = 'Guest from Parent';

  constructor() {}

  setUsername(username: string): void {
    this.username = username;
  }
}
