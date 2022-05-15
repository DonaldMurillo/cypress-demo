import { Component, Directive, ElementRef, HostListener } from '@angular/core';

@Component({
	selector: 'cypress-demo-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {

	displayHelper = false;
	title = 'project-two';
	navItems = [
		{ name: 'Home', path: 'home' },
		{ name: 'About', path: 'about' },
		{ name: 'Address Form', path: 'address-form' },
	];

	constructor(public elementRef: ElementRef) { }

	@HostListener('document:keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
		if (event.key === 'F1') {
			this.displayHelper = !this.displayHelper;
			event.preventDefault();
		}
	}
}
