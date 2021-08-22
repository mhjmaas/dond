describe('Blog page', () => {
    beforeEach(() => {
        cy.viewport(1400, 1000);
        cy.visit('/blog');
    })
  
    it('Should display about welcome message', () => {
      cy.get('.hero-title').should('contain', 'Our latest news').should('be.visible');
    });

    it('Should have all sections', () => {
        cy.get('.container-navigation').scrollIntoView().should('be.visible');
        cy.get('.blog-grid-header').scrollIntoView().should('be.visible');
        cy.get('.blog-grid-section').scrollIntoView().should('be.visible');
        cy.get('.newsletter-section').scrollIntoView().should('be.visible');
        cy.get('.instagram-section').scrollIntoView().should('be.visible');
        cy.get('.footer').scrollIntoView().should('be.visible');
        cy.get('.footer-legal').scrollIntoView().should('be.visible');
    });

    it('Should be able to follow links', () => {
      // discord link
      cy.get('[data-cy="join-discord-link"]')
      .should('have.attr', 'href').and('contain', 'https://discord.io/dond');
    });
});