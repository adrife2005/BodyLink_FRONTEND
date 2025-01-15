describe('Paginator test', () => {
  it('Paginator is visible', () => {
    cy.visit('/pacientes')
    cy.get('[data-testid="paginator"]').should('be.visible')
  })
})
