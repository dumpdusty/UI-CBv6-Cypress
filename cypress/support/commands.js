// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/user/login')
    cy.get('[name="email"]').type(email)
    cy.get('[name="password"]').type(password)
    cy.get('[type="submit"]').click()
})

Cypress.Commands.add('apiLogin', (email, password) => {
    cy.visit(`/user/login`)
    cy.request(
        {
            method: 'POST',
            url: 'https://clientbase-server-edu-dae6cac55393.herokuapp.com/v6/user/login',
            body: { email, password },
            failOnStatusCode: false,
        }
    ).then(response => {
        // will place token and userId values to the browser storage
        // and any further requests won't require token value in headers
        window.localStorage.setItem(`token`, response.body.payload.token)
        window.localStorage.setItem(`userId`, response.body.payload._id)
        return response
    });
})