import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() usernameFromParent: string;
  @Output() public onSetUsername: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}

  handleSetUsername(inputUsername: any): void {
    if (inputUsername.value) {
      this.onSetUsername.emit(`${inputUsername.value as string} from Child`);
    } else {
      alert('Please enter a username');
    }
  }
}
