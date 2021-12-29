describe('About page', () => {
    beforeEach(() => {
      cy.viewport(1400, 1000);
      cy.visit('/about');
    })
  
    it('Should display about welcome message', () => {
      cy.get('.hero-title').should('contain', 'our COMMUNITY').should('be.visible');
    });

    it('Should be able to play video', () => {
      cy.get('.video-header a').scrollIntoView().should('be.visible').click();
      cy.get('.video-header.playing').scrollIntoView().should('be.visible');
    });

    it('Should have all sections', () => {
      cy.get('.container-navigation').scrollIntoView().should('be.visible');
      cy.get('.about-header').scrollIntoView().should('be.visible');
      cy.get('.about-section').scrollIntoView().should('be.visible');
      cy.get('.team-story-section').scrollIntoView().should('be.visible');
      cy.get('.newsletter-section').scrollIntoView().should('be.visible');
      cy.get('.team-section').scrollIntoView().should('be.visible');
      cy.get('.instagram-section').scrollIntoView().should('be.visible');
      cy.get('.footer').scrollIntoView().should('be.visible');
      cy.get('.footer-legal').scrollIntoView().should('be.visible');
    });

    it('Should be able to follow links', () => {
      // discord link
      cy.get('[data-cy="join-discord-link"]')
      .should('have.attr', 'href').and('contain', 'https://discord.gg/QzSt8ZkssV');
    });
});