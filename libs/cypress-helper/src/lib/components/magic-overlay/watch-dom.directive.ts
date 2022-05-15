import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[cypressDemoWatchDom]'
})
export class WatchDomDirective {

	// TODO: MAKE THIS DIRECTIVE WORK
	@Input('cypressDemoWatchDom') set _el(ref: ElementRef) {
		console.log('here')
		this.elRef = ref;
		this.registerDomChangedEvent(this.elRef.nativeElement);
	}  
	elRef!: ElementRef;
	constructor() { }

	registerDomChangedEvent(el: Node) {
		const observer = new MutationObserver(list => {
			const evt =
				new CustomEvent('dom-changed',
					{ detail: list, bubbles: true });
			el.dispatchEvent(evt);
		});
		const attributes = false;
		const childList = true;
		const subtree = true;
		observer.observe(el, { attributes, childList, subtree });
	}

}
