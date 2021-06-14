describe('Learning list elements and functionality', () => {

  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000/tech_list')
  })


  it('Should show tech cards in learning list if they have been added', () => {
      cy.get('[data-cy=list-button]').click()
        .get('[data-cy=list-button]').should('contain', 'Remove')
        .get('[data-cy=learning-link]').click().url().should('eq', 'http://localhost:3000/learning_list')
        .get('[data-cy=tech-card]').should('be.visible')
  });

});

describe('Learning sad path', () => {

  it('Should display a warning if nothing has been added to the list', () => {

  });

});
