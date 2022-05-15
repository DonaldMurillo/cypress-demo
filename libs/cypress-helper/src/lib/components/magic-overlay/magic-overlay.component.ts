import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
	selector: 'cypress-demo-magic-overlay',
	templateUrl: './magic-overlay.component.html',
	styleUrls: ['./magic-overlay.component.scss'],
})
export class MagicOverlayComponent implements AfterViewInit {

	@Input() elementRef!: ElementRef;

	elements!: Element[];
	selected!: Element | null;
	constructor(private renderer: Renderer2, private cdt: ChangeDetectorRef) { }

	ngAfterViewInit(): void {
		console.log('triggered');
		setTimeout(() => {
			this.elements = [
				...new Set(this.elementRef.nativeElement.querySelectorAll('[data-cy], [data-cy-id], [data-cy-id-data]'))
			] as Element[];
			console.log(this.elements)
		},0);
	}

	showElementInDom(element: Element): void {
		this.renderer.addClass(element, 'hover-dom-node');
	}

	hideElementInDom(element: Element): void {
		this.renderer.removeClass(element, 'hover-dom-node');

	}

	select(element: Element): void {
		this.elements.forEach(el => {
			this.renderer.removeClass(el, 'hover-dom-node');
		})
		this.renderer.addClass(element, 'hover-dom-node');
		this.selected = element;
	}

	handleDomChange(): void {
		console.log('triggered change');
		this.cdt.markForCheck()
	}
}
