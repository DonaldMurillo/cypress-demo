import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'elementData'
})
export class ElementDataPipe implements PipeTransform {

	transform(value: Element, ...args: unknown[]): unknown {
		return {
			cy: value.hasAttribute('data-cy') ? value.getAttribute('data-cy') : null,
			cyId: value.hasAttribute('data-cy-id') ? value.getAttribute('data-cy-id') : null,
			cyIdData: value.hasAttribute('data-cy-id-data') ? value.getAttribute('data-cy-id-data') : null,
			tag: value.tagName.toLowerCase(),
			id: value.id,
			
		};
	}

}
