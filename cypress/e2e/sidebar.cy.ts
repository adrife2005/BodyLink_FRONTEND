describe('Sidebard Test', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Should check if the sidebar exists', () => {
    cy.get('[data-testid="sidebard"]').should('be.visible')
  })

  it('Should navigate to the correct page when a menu button is clicked', () => {
    cy.findByRole('link', { name: /inicio/i })
      .click().url().should('include', '/')

    cy.findByRole('link', { name: /pacientes/i })
      .click().url().should('include', '/pacientes')

    cy.findByRole('link', { name: /citas/i })
      .click().url().should('include', '/citas')

    cy.findByRole('link', { name: /finanzas/i })
      .click().url().should('include', '/finanzas')

    cy.findByRole('link', { name: /mensajes/i })
      .click().url().should('include', '/mensajes')

    cy.findByRole('link', { name: /noticias/i })
      .click().url().should('include', '/noticias')
  })
})