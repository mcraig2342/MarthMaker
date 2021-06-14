describe('Adding and removing comics from reading list', () => {

  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000')
  })


  it('Should show greeting on page load', () => {
     cy.get('h1').should('contain', 'Welcome to Marth Maker')
  });



});
