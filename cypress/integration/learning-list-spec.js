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

});

describe('Learning sad path', () => {

  it('Should display a warning if nothing has been added to the list', () => {

  });

});
