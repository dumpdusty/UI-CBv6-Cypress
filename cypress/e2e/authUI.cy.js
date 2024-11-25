describe('AUTHORIZATION', () => {
    describe('positive', () => {
        it('verify user login with valid credentials', () => {
          cy.login(Cypress.env(`email`), Cypress.env(`password`));

            cy.location(`pathname`).should(`contain`, `client`)
        });
    });

    describe('negative', () => {
        it('login with invalid email', () => {
           cy.login(`invalid@pirate.com`, Cypress.env(`password`))

            cy.location(`pathname`).should(`contain`, `login`)
            cy.get(`[role="alert"]`).should(`contain.text`, `failed`)
        });
        it('login with invalid password', () => {
            cy.login(Cypress.env(`email`), `123`)

            cy.location(`pathname`).should(`contain`, `login`)
            cy.get(`[role="alert"]`).should(`contain.text`, `failed`)
        });
        it('login with invalid credentials', () => {
            cy.login(`invalid@pirate.com`, `123`)

            cy.location(`pathname`).should(`contain`, `login`)
            cy.get(`[role="alert"]`).should(`contain.text`, `failed`)
        });
    });

    // TODO: find the solution
    describe.only('win-alert', () => {
        it('test', () => {
            cy.login(`a`, ' ')

            cy.on(`windows:alert`, (message) => {
                cy.log(message)
                expect(message).to.eq('enfjewg')
                return true
            })
        });
    });
});