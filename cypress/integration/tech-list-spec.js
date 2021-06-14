describe('Tech list elements', () => {

  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000/tech_list')
  })


  it('Should show tech cards', () => {
      cy.get('[data-cy=tech-card]').should('be.visible')
  });

  it('Should display all required info on tech cards', () => {
      cy.get('[data-cy=tech-name]').should('be.visible')
        .get('[data-cy=gif]').should('be.visible')
        .get('[data-cy=info]').should('be.visible')
        .get('[data-cy=description]').should('be.visible')
        .get('[data-cy=list-button]').should('contain', 'Add')
  });

  it('Should render the correct button after being added to list', () => {
      cy.get('[data-cy=list-button]').click()
        .get('[data-cy=list-button]').should('contain', 'Remove')
  });

  it('Should display header on tech page', () => {
     cy.get('nav').should('contain', 'TECH')
     cy.get('nav').should('contain', 'LEARNING LIST')
  });

  it('Should be able to navigate to the learning list from the tech page', () => {
     cy.get('[data-cy=learning-link]').click().url().should('eq', 'http://localhost:3000/learning_list');
  });

  it('Should be able to navigate to the home page from the tech page', () => {
     cy.get('[data-cy=logo]').click().url().should('eq', 'http://localhost:3000/');
  });

});

describe('Tech sad path', () => {

  it('Should display a warning if data cannot be fetched', () => {
    cy.intercept('http://localhost:3000/api/techs/all', {
      statusCode: 404,
      delay: 100,
      body: null
    })
      .visit('http://localhost:3000/tech_list')
      .get('h3').should('contain', 'Sorry, we seem to have misplaced our skills, please check back later');
  });

});
