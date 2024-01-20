/* eslint-disable no-undef */
it('can display results from an API query', () => {
	cy.visit('/');

	// Tell Cypress to get in the way (intercept) of the API call and respond with fake data
	cy.intercept('GET', '**/search*', { fixture: 'itunes' }).as('loadedData');

	cy.get('#Explicit').uncheck();

	// Get the input, type "Daft Punk"
	cy.get('.search__form').find('input').type('Daft punk');

	// Get the spinner and make sure it's visible
	cy.get('.spinner').should('be.visible');

	// Wait until the API results load
	cy.wait('@loadedData');

	// Pick one Daft Punk album and make sure it's visible
	cy.contains('Discovery').should('be.visible');

	cy.get('article.album').should('not.contain', 'Daft Club');

	cy.get('.album')
		.first()
		.children('.album__info')
		.children('.album__name')
		.should('have.text', 'Random Access Memories');
});
