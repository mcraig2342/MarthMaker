Cypress.Commands.add('stub', () => {
  cy.fixture('mock-data.json')
    .then(mockData => {
      cy.intercept('http://localhost:3000/api/techs/all', {
        statusCode: 201,
        delay: 100,
        body: mockData
      })
    })
})
