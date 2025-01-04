describe('CustomButton test', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Should check if the custom button exists', () => {
		cy.get('[data-testid="customButton"]').should('be.visible')
	})

	it('Should check if the custom button has the correct props', () => {
		const buttonProps = {
			children: 'Dr. Carlos',
			disabled: true,
		}

		cy.get('[data-testid="customButton"]').should(
			'have.text',
			buttonProps.children
		)
		cy.get('[data-testid="customButton"]').should('not.be.disabled')
	})
})
