 Cypress.Commands.add('login', (email, password) => {
  // cy.session([email, password], () => {
         cy.request({
            method: "POST",
            url: "/login",
            body: {
                email: email,
                password: password
            }
        }).then( response => {
            expect(response.status).equal(200)
            cy.setCookie("accessToken", response.body.accessToken)
        })
      })
 //}) 
