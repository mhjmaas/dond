describe('Home page', () => {
    beforeEach(() => {
      cy.viewport(1400, 1000);
      cy.visit('/')
    })
  
    it('Should display welcome message', () => {
      cy.get('.hero-title').should('contain', 'Hell let loose').should('be.visible');
      cy.get('[data-cy="join-discord-link"]').should('contain','join our discord');
    });

    // it('Should be able to play video', () => {
    //   cy.get('.video-block a').scrollIntoView().should('be.visible').click();
    //   cy.get('.video-block.playing').scrollIntoView().should('be.visible');
    // });

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

    it('Should follow social links', ()=> {
      cy.get('[data-cy="index-insta-link"]')
      .should('have.attr', 'href').and('include', 'instagram');

      cy.get('[data-cy="index-facebook-link"]')
      .should('have.attr', 'href').and('include', 'facebook');

      cy.get('[data-cy="index-twitch-link"]')
      .should('have.attr', 'href').and('include', 'twitch');
      
      
    });

    it('Should be able to follow links', () => {
      cy.visit('/')

      // meet the team
      cy.get('[data-cy="index-meet-team"]').scrollIntoView().click();
      cy.location('pathname').should('match', /\/members$/);
      cy.contains('h1.hero-title', 'Meet our squads').should('be.visible'); 

      cy.visit('/')

      // meet the team
      cy.get('[data-cy="index-see-all"]').scrollIntoView().click();
      cy.location('pathname').should('match', /\/news$/);
      cy.contains('h1.hero-title', 'Our latest news').should('be.visible'); 

      cy.visit('/')

      // meet the team
      cy.get('[data-cy="index-contact-us"]').scrollIntoView().click();
      cy.location('pathname').should('match', /\/contact$/);
      cy.contains('h1.hero-title', 'CONTACT US').should('be.visible'); 
    });
});