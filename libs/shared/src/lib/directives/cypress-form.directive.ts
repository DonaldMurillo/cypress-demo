import { Directive, ElementRef, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Directive({
	selector: `
  		[cypressDemoCypressForm],
		input[formControlName], 
		mat-select[formControlName],
		textarea[formControlName],
  `
})
export class CypressFormDirective implements OnInit, OnDestroy {

	private destroy$ = new Subject();
	private name!: string | number | null;

	constructor(
		private element: ElementRef, 
		private renderer: Renderer2,
		private _control: NgControl,
		@Inject('isProd') private isProd: boolean) { }

	ngOnInit(): void {
		if (this.isProd) return;
		this.name = this._control.name
		this.renderer.setAttribute(this.element.nativeElement, 'data-cy-id', `field:${this.name}`);
	}

	ngOnDestroy(): void {
		this.destroy$.next(null);
		this.destroy$.complete();
	}

}
