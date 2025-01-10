describe('Patients page test', () => {
  beforeEach(() => {
    cy.visit('/pacientes')
  })

  it('Patient search section loaded', () => {
    cy.get('[data-testid="searchSection"]').should('be.visible')
  })

  it('Patient search filter loaded', () => {
    cy.get('[data-testid="searchSection"]')
      .find('div')
      .find('svg')
      .should('be.visible')
  })

  it('Patient search summary loaded', () => {
    cy.get('[data-testid="searchSection"]').find('p').should('be.visible')
  })

  it('Patients data section loaded', () => {
    cy.get('[data-testid="patients-data"]').should('be.visible')
  })

  it('Patients view filter is loaded', () => {
    cy.get('[data-testid="patients-data"]')
      .find('main')
      .find('div')
      .should('be.visible')
  })

  it('Patient view is toggling properly', () => {
    cy.get('[data-testid="patients-data"]')
      .find('main>div>button:first')
      .should('have.class', '_isActive_1d6sd_72')
    cy.get('[data-testid="patients-data"]')
      .find('main>div>button:nth-child(2)')
      .should('not.have.class', '_isActive_1d6sd_72')

    cy.get('[data-testid="patients-data"]')
      .find('main>div>button:nth-child(2)')
      .click()

    cy.get('[data-testid="patients-data"]')
      .find('main>div>button:first')
      .should('not.have.class', '_isActive_1d6sd_72')
    cy.get('[data-testid="patients-data"]')
      .find('main>div>button:nth-child(2)')
      .should('have.class', '_isActive_1d6sd_72')
  })
  /**
   * TODO: Create a test for labels when this are created dynamically from the filters menu selected options
   */
})
