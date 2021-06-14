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

});
