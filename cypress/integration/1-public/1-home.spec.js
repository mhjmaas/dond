const { get } = require("react-hook-form");

describe('Home page', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('/')
      cy.viewport(1400, 1000)
    })
  
    it('Should display welcome message', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      // Then, we use `should` to assert that there are two matched items,
      // which are the two default items.
      cy.get('.hero-title').should('contain', 'Hell let loose').should('be.visible');
    });

    it('Should have all sections', () => {
      cy.get('.container-navigation').scrollIntoView().should('be.visible');
      cy.get('.about-section').scrollIntoView().should('be.visible');
      cy.get('.match-section').scrollIntoView().should('be.visible');
      cy.get('.team-section').scrollIntoView().should('be.visible');
      cy.get('.blog-section').scrollIntoView().should('be.visible');
      cy.get('.cta-section').scrollIntoView().should('be.visible');
      cy.get('.games-section').scrollIntoView().should('be.visible');
      cy.get('.faq-section').scrollIntoView().should('be.visible');
      cy.get('.instagram-section').scrollIntoView().should('be.visible');
      cy.get('.footer').scrollIntoView().should('be.visible');
      cy.get('.footer-legal').scrollIntoView().should('be.visible');
    });

    it('Should be able to follow links', () => {
      // learn more
      cy.get('[data-cy="index-learn-more"]').scrollIntoView().click();
      cy.location('pathname').should('match', /\/about$/);
      cy.contains('h1.hero-title', 'about').should('be.visible'); 

      cy.visit('/')

      // meet the team
      cy.get('[data-cy="index-meet-team"]').scrollIntoView().click();
      cy.location('pathname').should('match', /\/members$/);
      cy.contains('h1.hero-title', 'Meet our legends').should('be.visible'); 

      cy.visit('/')

      // meet the team
      cy.get('[data-cy="index-see-all"]').scrollIntoView().click();
      cy.location('pathname').should('match', /\/blog$/);
      cy.contains('h1.hero-title', 'Our latest news').should('be.visible'); 

      cy.visit('/')

      // meet the team
      cy.get('[data-cy="index-contact-us"]').scrollIntoView().click();
      cy.location('pathname').should('match', /\/contact$/);
      cy.contains('h1.hero-title', 'CONTACT US').should('be.visible'); 
    });
});