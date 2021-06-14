describe('Learning list elements and functionality', () => {

  beforeEach(() => {
    cy.stub()
    cy.visit('http://localhost:3000/tech_list')
  })


  it('Should show tech cards in learning list if they have been added', () => {
  });

});

describe('Learning sad path', () => {

  it('Should display a warning if nothing has been added to the list', () => {

  });

});
