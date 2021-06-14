Cypress.Commands.add('stub', () => {
  cy.fixture('mock-data.json')
    .then(mockData => {
      cy.intercept('http://smashlounge.com/api/techs/all', {
        statusCode: 201,
        delay: 100,
        body: mockData
      })
    })
})
