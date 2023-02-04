import user from "../../fixtures/registration.json"

describe('Create a new board', () => {
    beforeEach(function() {
        cy.visit('/')
        cy.login(user.email, user.password)
    })


    it('Add a new board in application', () => {
        cy.get('[data-cy="logged-user"]').should('be.visible')
    });
})