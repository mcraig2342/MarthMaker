describe('Learning list elements and functionality', () => {

  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000/tech_list')
  })


  it('Should show tech cards in learning list if they have been added', () => {
      cy.get('[data-cy=list-button]').click()
        .get('[data-cy=list-button]').should('contain', 'Remove')
        .get('[data-cy=learning-link]').click().url().should('eq', 'http://localhost:3000/learning_list')
        .get('[data-cy=tech-card]').should('contain', 'Wave Dash')
  });

  it('Should display all required info on tech cards in learning list', () => {
    cy.get('[data-cy=list-button]').click()
      .get('[data-cy=list-button]').should('contain', 'Remove')
      .get('[data-cy=learning-link]').click().url().should('eq', 'http://localhost:3000/learning_list')
      .get('[data-cy=tech-card]').should('contain', 'Wave Dash')
      .get('[data-cy=tech-name]').should('be.visible')
      .get('[data-cy=gif]').should('be.visible')
      .get('[data-cy=info]').should('be.visible')
      .get('[data-cy=description]').should('be.visible')
      .get('[data-cy=list-button]').should('contain', 'Remove')
  });

  it('Should be able to remove a card from the list from tech page', () => {
    cy.get('[data-cy=list-button]').click()
      .get('[data-cy=list-button]').click()
      .get('[data-cy=learning-link]').click().url().should('eq', 'http://localhost:3000/learning_list')
      .get('h3').should('contain', 'No tech in learning list, add some from the tech page!');

  });

  it('Should be able to remove a card from the list from learning list page', () => {
    cy.get('[data-cy=list-button]').click()
      .get('[data-cy=learning-link]').click().url().should('eq', 'http://localhost:3000/learning_list')
      .get('[data-cy=list-button]').click()
      .get('h3').should('contain', 'No tech in learning list, add some from the tech page!');

  });

  it('Should display header on learning list page', () => {
     cy.get('nav').should('contain', 'TECH')
     cy.get('nav').should('contain', 'LEARNING LIST')
  });

  it('Should be able to navigate to the tech list from the learning list page', () => {
     cy.get('[data-cy=tech-link]').click().url().should('eq', 'http://localhost:3000/tech_list');
  });

  it('Should be able to navigate to the home page from the learning list page', () => {
     cy.get('[data-cy=logo]').click().url().should('eq', 'http://localhost:3000/');
  });

});

describe('Learning sad path', () => {

  it('Should display a warning if nothing has been added to the list', () => {
    cy.stub()
      .visit('http://localhost:3000/tech_list')
      .get('[data-cy=learning-link]').click().url().should('eq', 'http://localhost:3000/learning_list')
      .get('h3').should('contain', 'No tech in learning list, add some from the tech page!');
  });

});
