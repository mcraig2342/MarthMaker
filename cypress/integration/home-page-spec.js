describe('Adding and removing comics from reading list', () => {

  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000')
  })


  it('Should show greeting on page load', () => {
     cy.get('h1').should('contain', 'Welcome to Marth Maker')
  });

  it('Should show description on page load', () => {
     cy.get('p').should('contain', 'Marth Maker is a tech guide that will help you improve your tech-skill')
  });

  it('Should display header on home page', () => {
     cy.get('nav').should('contain', 'TECH')
     cy.get('nav').should('contain', 'LEARNING LIST')
  });

  it('Should be able to navigate to the tech list from the home page', () => {
     cy.get('[data-cy=tech-link]').click().url().should('eq', 'http://localhost:3000/tech_list');
  });

  it('Should be able to navigate to the learning list from the home page', () => {
     cy.get('[data-cy=learning-link]').click().url().should('eq', 'http://localhost:3000/learning_list');
  });

});
