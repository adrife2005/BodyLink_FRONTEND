describe('Should test button component', () => {
  it('Should render a button', () => {
    cy.visit('/')
    cy.findByText('Submit').should('be.visible')
  })
})