describe('Input component test', () => {
  beforeEach(() => {
    cy.visit('/pacientes')
  })

  it('Input section is loaded', () => {
    cy.get('[data-testid="inputSection"]').should('be.visible')
  })

  it('SVG Icon should be loaded', () => {
    cy.get('[data-testid="inputSection"]')
      .find('div')
      .find('svg')
      .should('be.visible')
  })

  it('Input loaded with correct attributes', () => {
    const attributes = {
      type: 'text',
      placeholder: 'Busca clientes, Archivos, Etc...',
    }

    cy.findByRole('textbox')
      .invoke('attr', 'type')
      .should('eq', attributes.type)
    cy.findByRole('textbox')
      .invoke('attr', 'placeholder')
      .should('eq', attributes.placeholder)
  })
})
