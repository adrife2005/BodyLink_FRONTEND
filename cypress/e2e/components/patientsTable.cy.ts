describe('Patients table test', () => {
  beforeEach(() => {
    cy.visit('/pacientes')
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
      .should($el => {
        expect($el).to.have.length(1)
        const className = $el[0].className
        expect(className).to.match(/isActive/gi)
      })
    cy.get('[data-testid="patients-data"]')
      .find('main>div>button:nth-child(2)')
      .should($el => {
        expect($el).to.have.length(1)
        const className = $el[0].className
        expect(className).to.not.match(/isActive/gi)
      })

    cy.get('[data-testid="patients-data"]')
      .find('main>div>button:nth-child(2)')
      .click()

    cy.get('[data-testid="patients-data"]')
      .find('main>div>button:first')
      .should($el => {
        expect($el).to.have.length(1)
        const className = $el[0].className
        expect(className).to.not.match(/isActive/gi)
      })
    cy.get('[data-testid="patients-data"]')
      .find('main>div>button:nth-child(2)')
      .should($el => {
        expect($el).to.have.length(1)
        const className = $el[0].className
        expect(className).to.match(/isActive/gi)
      })
  })

  it('Patients table sections are visible', () => {
    cy.get('[data-testid="patients-data"]')
      .find('main>div:nth-child(2)>table')
      .should('be.visible')
    cy.get('[data-testid="patients-data"]').find('aside').should('be.visible')
  })
})
