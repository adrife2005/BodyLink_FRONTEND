describe('Pacients page test', () => {
  beforeEach(() => {
    cy.visit('/pacientes')
  })

  it('Pacient search section loaded', () => {
    cy.get('[data-testid="searchSection"]').should('be.visible')
  })

  it('Pacient search filter loaded', () => {
    cy.get('[data-testid="searchSection"]')
      .find('div')
      .find('svg')
      .should('be.visible')
  })

  it('Pacient search summary loaded', () => {
    cy.get('[data-testid="searchSection"]').find('p').should('be.visible')
  })

  /**
   * TODO: Create a test for labels when this are created dynamically from the filters menu selected options
   */
})
