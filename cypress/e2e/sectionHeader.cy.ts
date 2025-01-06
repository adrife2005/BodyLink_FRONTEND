describe('SectionHeader test', () => {
  it('Should have the provided title and description as props', () => {
    const props = [
      {
        path: '/pacientes',
        title: 'Pacientes',
        description: 'Registra, administra y archiva perfiles',
      },
      {
        path: '/citas',
        title: 'Citas',
        description: 'Descripcion',
      },
      {
        path: '/finanzas',
        title: 'Finanzas',
        description: 'Descripcion',
      },
      {
        path: '/mensajes',
        title: 'Mensajes',
        description: 'Descripcion',
      },
      {
        path: '/noticias',
        title: 'Noticias',
        description:
          'Enterate todo lo que esta pasando en BodyLink, mejora como profesional y participa en la comunidad',
      },
    ]

    props.forEach(prop => {
      cy.visit(prop.path)
      cy.get('[data-testid="section-header"]').should('be.visible')
      cy.get('[data-testid="section-header-title"]').should(
        'have.text',
        prop.title
      )
      cy.get('[data-testid="section-header-description"]').should(
        'have.text',
        prop.description
      )
    })
  })
})
