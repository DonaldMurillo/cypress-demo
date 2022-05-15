import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: '[data-cy], [data-cy-id-data]'
})
export class DynamicCyDirective {

	/** Directive used to bind the cypress id attribute with dynamic data */
	@Input('data-cy') set _value(value: string) {
		this.renderer.setAttribute(this.element.nativeElement, 'data-cy', value);
	};

	@Input('data-cy-id-data') set _data(value: string) {
		this.renderer.setAttribute(this.element.nativeElement, 'data-cy-id-data', value);
	};

	constructor(private element: ElementRef, private renderer: Renderer2) { }


}
