/* eslint-disable no-undef */
describe('test input field', () => {
	beforeEach(() => {
		cy.visit('/');

		cy.get('.search__form').find('input').as('inputField');
	});

	it('can type into the field', () => {
		cy.get('@inputField')
			.type('Avril Lavigne')
			.should('have.value', 'Avril Lavigne');
	});

	it('can handle backspace', () => {
		cy.get('@inputField')
			.type('NN{backspace}irva_9{backspace}{backspace}na', { delay: 1000 })
			.should('have.value', 'Nirvana');
	});

	it('can type into the input and find a result', () => {
		cy.get('@inputField').type('Blink 182');

		cy.get('.album')
			.first()
			.children('.album__info')
			.children('.album__name')
			.should('have.text', 'ONE MORE TIME...');
	});
});
