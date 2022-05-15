// NEED TO FIGURE OUT HOW TO EXPORT THIS FROM THE MODULE W/O BREAKING ANGULAR
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { TestNavItem } from 'libs/shared/src/lib/components/nav/nav.component.test-block'

describe('project-two', () => {
	beforeEach(() => cy.visit('/'));

	TestNavItem('Home', { name: 'Home', path: 'home' });
	TestNavItem('About', { name: 'About', path: 'about' });
	TestNavItem('Address Form', { name: 'Address Form', path: 'address-form' });
});
