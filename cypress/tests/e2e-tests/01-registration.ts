import user from "../../fixtures/registration.json"

describe("Registration flow testing", function() {

    it('Verify user should be able to register successfully with correct credentials', () => {
        cy.visit("/")
        cy.api({
            method: "POST",
            url: "/api/signup",
            body: {
                email:  user.email,
                password: user.password
            }
        }).then( response => {
            expect(response.status).equal(201)
            cy.setCookie("accessToken", response.body.accessToken)
        })
        cy.get('#loginMessage').should('have.text', 'User is logged in')
    });

   /*it('Verify user should not be able to register with incorrect credentials', () => {
        cy.visit("/")
        cy.api({
            url: "/signup",
            body: {
                email: 'peterGmail.com',
                password: 1
            }
        }).then( response => {
            expect(response.status).equal(200) //status code should be 400 but application respond with 200(app error)
        })
        cy.get('#loginMessage').should('not.be.visible')
    });*/

})