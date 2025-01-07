describe('Register modal test', () => {
  beforeEach(() => {
    cy.visit('/pacientes')
  })

  it('Register button rendered', () => {
    cy.get('[data-testid="customButton"]')
      .contains('Registrar paciente')
      .should('be.visible')
  })

  it('Click register button opens register modal', () => {
    cy.get('[data-testid="customButton"]')
      .contains('Registrar paciente')
      .click()
    cy.get('[data-testid="genericModal"]')
      .contains('Registra un paciente!')
      .should('be.visible')
  })

  it('Click X button closes register modal', () => {
    cy.get('[data-testid="customButton"]')
      .contains('Registrar paciente')
      .click()
    cy.get('[data-testid="modalCloseButton"]').click()
    cy.get('[data-testid="genericModal"]').should('not.exist')
  })

  it('Click cancel button closes register modal', () => {
    cy.get('[data-testid="customButton"]')
      .contains('Registrar paciente')
      .click()
    cy.get('[data-testid="genericModal"]')
      .find('[data-testid="customButton"]')
      .contains('Cancelar')
      .click()
    cy.get('[data-testid="genericModal"]').should('not.exist')
  })
})
