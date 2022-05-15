import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
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
	private namedControl!: FormControl;

	constructor(private element: ElementRef, private renderer: Renderer2, private _control: NgControl) { }

	ngOnInit(): void {
		console.log(this._control.name)
		this.name = this._control.name
		this.renderer.setAttribute(this.element.nativeElement, 'data-cy-id', `field:${this.name}`);
	}

	ngOnDestroy(): void {
		this.destroy$.next(null);
		this.destroy$.complete();
	}

}
