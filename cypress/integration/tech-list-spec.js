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

});
