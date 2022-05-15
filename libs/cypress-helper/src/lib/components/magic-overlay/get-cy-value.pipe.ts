import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'getCyValue'
})
export class GetCyValuePipe implements PipeTransform {

	transform(value: Element, ...args: unknown[]): unknown {
		if (!value) return null
		if (value.hasAttribute('data-cy')) return value.getAttribute('data-cy');
		if (value.hasAttribute('data-cy-id')) return value.getAttribute('data-cy-id');
		if (value.hasAttribute('data-cy-id-data')) return value.getAttribute('data-cy-id-data');
		return null;
	}

}
