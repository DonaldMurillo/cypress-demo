import { NavItem } from "../../models/shared-interfaces";

export function TestNav() {

	return describe('NavComponent', () => {


		it('should create', () => {
			// expect(component).toBeTruthy();
		});

	})
}

/**
 * Example of how to create a reusable type safe command
 * @param testTitle 
 * @param navItem 
 * @returns 
 */
export function TestNavItem(testTitle: string, navItem: NavItem) {

	return it(testTitle, () => {
		cy.MyCommand_GET_ByCyIdData('nav-menu', navItem.name, 'a').should('have.attr', 'href', '/' + navItem.path);
	})
}