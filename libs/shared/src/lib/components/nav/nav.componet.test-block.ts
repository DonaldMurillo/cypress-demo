import { NavItem } from "../../models/shared-interfaces";

export function TestNav() {

    return describe('NavComponent', () => {


        it('should create', () => {
            expect(component).toBeTruthy();
        });

    })
}

export function TestNavItems(testTitle: string, navItm: NavItem) {

    return it(testTitle, () => {
        cy.get('[data-cy=nav-item]').contains(navItm.name);
    })
}