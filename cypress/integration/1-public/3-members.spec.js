describe('Members page', () => {
    beforeEach(() => {
        cy.viewport(1400, 1000);
        cy.visit('/members');
      
    })
  
    it('Should display about welcome message', () => {
      cy.get('.hero-title').should('contain', 'Meet our legends').should('be.visible');
    });

    it('Should have all sections', () => {
      cy.get('.container-navigation').scrollIntoView().should('be.visible');
      cy.get('.blog-grid-header').scrollIntoView().should('be.visible');
      cy.get('.team-section').scrollIntoView().should('be.visible');
      cy.get('.instagram-section').scrollIntoView().should('be.visible');
      cy.get('.footer').scrollIntoView().should('be.visible');
      cy.get('.footer-legal').scrollIntoView().should('be.visible');
    });
});