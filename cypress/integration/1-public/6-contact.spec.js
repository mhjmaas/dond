describe('Contact page', () => {
    beforeEach(() => {
        cy.viewport(1400, 1000);
        cy.visit('/contact')
      
    })
  
    it('Should display about welcome message', () => {
      cy.get('.hero-title').should('contain', 'CONTACT US').should('be.visible');
    });

    it('Should have all sections', () => {
      cy.get('.container-navigation').scrollIntoView().should('be.visible');
      cy.get('.contact-header').scrollIntoView().should('be.visible');
      cy.get('.contact-section').scrollIntoView().should('be.visible');
      cy.get('.faq-section').scrollIntoView().should('be.visible');
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

    it('Should have correct info', () => {
        // email
        cy.get('[data-cy="contact-email"]')
        .should('contain', 'info@dayofnodefeat.eu');

        // location
        cy.get('[data-cy="contact-location"]')
        .should('contain', 'Global');

        // discord
        cy.get('[data-cy="contact-discord"]')
        .should('contain', 'discord.io/dond');
    });

    it('Should be able to use contact form', () => {
        // name
        cy.get('.contact-section').scrollIntoView()
        cy.get('[data-cy="contact-name-input"]')
        .type('cy').should('have.value', 'cy');
        cy.get('[data-cy="name-error"]').should('contain', 'name is too short');
        cy.get('[data-cy="contact-name-input"]')
        .type('press').should('have.value', 'cypress');

        // email
        cy.get('[data-cy="contact-email-input"]')
        .type('user').should('have.value', 'user');
        cy.get('[data-cy="email-error"]').should('contain', 'Please provide a correct email format');
        cy.get('[data-cy="contact-email-input"]')
        .type('@cypress.com').should('have.value', 'user@cypress.com');

        // message
        cy.get('[data-cy="contact-message-input"]')
        .type('Hello').should('have.value', 'Hello');
        cy.get('[data-cy="message-error"]').should('contain', 'message is too short');
        cy.get('[data-cy="contact-message-input"]')
        .type(' beautiful world. This message is brought to you by cypress, awesome end to end testing software.')
        .should('have.value', 'Hello beautiful world. This message is brought to you by cypress, awesome end to end testing software.');

        // submit
        cy.get('[data-cy="contact-submit-message"]').click();
        cy.wait(5000);
        cy.get('[data-cy="contact-success-message"]').should('contain', 'Thank you! Your message has been received!');
    });
});