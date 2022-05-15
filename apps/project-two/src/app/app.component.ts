import { Component } from '@angular/core';

@Component({
  selector: 'cypress-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-two';
  navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Address Form', path: 'address-form' },
  ]
}
