describe('Games page', () => {
    beforeEach(() => {
      cy.viewport(1400, 1000);
      cy.visit('/#games');
    })
  

    it('Should show games section', () => {
      cy.get('.games-section').scrollIntoView().should('be.visible');
    });
});

