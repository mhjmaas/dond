describe('Login page', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('/')
      cy.viewport(1400, 1000)
    })
  
    it('Should have login page', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      // Then, we use `should` to assert that there are two matched items,
      // which are the two default items.
      cy.get('.footer').scrollIntoView();
      cy.get('.login-link').should('contain', 'Login').should('be.visible');
    })
});