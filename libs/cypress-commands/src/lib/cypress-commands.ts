// https://on.cypress.io/custom-commands
// https://github.com/cypress-io/add-cypress-custom-command-in-typescript
// https://www.cypress.io/blog/2022/04/13/share-cypress-commands-in-an-nx-workspace/

// export { }

export type HtmlTag = 'input' | 'div' | 'span' | 'i' | 'button' | 'a';

// STEP 1: DEFINE TYPE
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable<Subject = any> {
			/**
			 * @CustomerCommand Selects the element with `button[data-cy-id="{id}"]`
			 */
			MyCommand_GET_Button(id: string): Chainable<JQuery<HTMLElement>>;

			/**
			 * @CustomerCommand Selects the element with `[data-cy-id="{id}"]`, optional for more specificity and html tag can be passed
			 * @param id 
			 * @param htmlTag optional, this can improve readablility of test
			 */
			MyCommand_GET_ByCyId(id: string, htmlTag?: HtmlTag): Chainable<JQuery<HTMLElement>>;

			/**
			 * @CustomerCommand Selects the element with `[data-cy="{data}"]`, optional for more specificity and html tag can be passed
			 * @param data 
			 * @param htmlTag optional, this can improve readablility of test
			 */
			MyCommand_GET_ByCyData(data: string, htmlTag?: HtmlTag): Chainable<JQuery<HTMLElement>>;

			/**
			 * @CustomerCommand Selects the element with `[data-cyid-data="{id:data}"]`, optional for more specificity and html tag can be passed
			 * @param id 
			 * @param data 
			 * @param htmlTag optional, this can improve readablility of test
			 */
			MyCommand_GET_ByCyIdData(id: string, data: string, htmlTag?: HtmlTag): Chainable<JQuery<HTMLElement>>;

			/**
			 * @CustomerCommand Selects the element with `button[data-cy-id="continue"]`
			 */
			MyCommand_GET_FormContinueButton(): Chainable<JQuery<HTMLElement>>;

			/**
			 * @CustomerCommand Selects the element with `[data-cy-id="field:{id}"]`
			 * @param id 
			 */
			MyCommand_GET_FormControlById(id: string): Chainable<JQuery<HTMLElement>>;

			/**
			 * @CustomerCommand Selects the element with `[data-cy-id="error:{id}"]`
			 * @param id 
			 */
			MyCommand_GET_FormControlErrorById(id: string): Chainable<JQuery<HTMLElement>>;

			/**
			 * Gets all form errors, Selects `[data-cy-id*="error"]`
			 */
			MyCommand_GET_FormErrors(): Chainable<JQuery<HTMLElement>>;

			/**
			 * @CustomCommand Chained to Input. Pastes `value`
			 */
			MyCommand_PASTE_ToInput(value: string | number): Chainable<string | number | string[] | undefined> | null;

		}
	}
}

// STEP 2: DEFINE YOUR FUNCTION
// STEP 2.1: GET COMMANDS

function MyCommand_GET_Button(id: string) {
	return cy.MyCommand_GET_ByCyId(id, 'button');
}

function MyCommand_GET_ByCyId(id: string, htmlTag?: HtmlTag) {
	if (htmlTag) return cy.get(`${htmlTag}[data-cy-id="${id}"]`);
	else return cy.get(`[data-cy-id="${id}"]`);
}

function MyCommand_GET_ByCyData(data: string, htmlTag?: HtmlTag) {
	if (htmlTag) return cy.get(`${htmlTag}[data-cy="${data}"]`);
	else return cy.get(`[data-cy="${data}"]`);
}

function MyCommand_GET_ByCyIdData(id: string, data: string, htmlTag?: HtmlTag) {
	if (htmlTag) return cy.get(`${htmlTag}[data-cy-id-data="${id}-${htmlTag}:${data}"]`);
	else return cy.get(`[data-cy-id="${id}:${data}"]`);
}

function MyCommand_GET_FormContinueButton() {
	return cy.MyCommand_GET_Button('continue');
}

function MyCommand_GET_FormControlById(id: string) {
	return cy.get(`[data-cy-id="field:${id}"]`);
}

function MyCommand_GET_FormControlErrorById(id: string) {
	return cy.get(`[data-cy-id="error:${id}"]`);
}

function MyCommand_GET_FormErrors() {
	return cy.get(`[data-cy-id*="error"]`);
}

// STEP 2.3 UTIL COMMANDS
function MyCommand_PASTE_ToInput(subject: any, value: string | number) {
	if (subject) return cy.wrap(subject).invoke('val', value).trigger('input');
	return null
}

// STEP 3: ADD IT TO THE CYPRESS GLOBAL OBJECT
// STEP 3.1: GET COMMANDS
Cypress.Commands.add("MyCommand_GET_Button", MyCommand_GET_Button);
Cypress.Commands.add("MyCommand_GET_ByCyId", MyCommand_GET_ByCyId);
Cypress.Commands.add("MyCommand_GET_ByCyIdData", MyCommand_GET_ByCyIdData);
Cypress.Commands.add("MyCommand_GET_ByCyData", MyCommand_GET_ByCyData);
Cypress.Commands.add("MyCommand_GET_FormContinueButton", MyCommand_GET_FormContinueButton);
Cypress.Commands.add("MyCommand_GET_FormControlById", MyCommand_GET_FormControlById);
Cypress.Commands.add("MyCommand_GET_FormControlErrorById", MyCommand_GET_FormControlErrorById);
Cypress.Commands.add("MyCommand_GET_FormErrors", MyCommand_GET_FormErrors);
// STEP 3.3: UTILS COMMANDS
Cypress.Commands.add("MyCommand_PASTE_ToInput", { prevSubject: 'element' }, MyCommand_PASTE_ToInput);



