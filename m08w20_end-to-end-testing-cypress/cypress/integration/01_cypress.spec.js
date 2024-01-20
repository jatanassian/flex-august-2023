/* eslint-disable no-undef */
describe('test for cypress', () => {
	it('does it work?', () => {
		assert.strictEqual(true, true);

		expect(100).to.equal(100);
	});

	it('can visit the homepage', () => {
		cy.visit('https://www.google.ca/');
	});
});
