describe('Tech list elements', () => {

  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000/tech_list')
  })


  it('Should show tech cards', () => {
      cy.get('[data-cy=tech-card]').should('be.visible')
  });

});
