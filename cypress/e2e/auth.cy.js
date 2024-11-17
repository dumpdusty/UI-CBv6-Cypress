describe('AUTHORIZATION', () => {
    describe('positive', () => {
        it('verify user login with valid credentials', () => {
            cy.visit(`/user/login`)
            cy.get(`[name="email"]`).should(`be.visible`).type(Cypress.env(`email`))
            cy.get(`[name="password"]`).should(`be.visible`).type(Cypress.env(`password`))
            cy.get(`[type="submit"]`).click();

            cy.location(`pathname`).should(`contain`, `client`)
        });
    });

    describe('negative', () => {
        it('login with invalid email', () => {
            cy.visit(`/user/login`)
            cy.get(`[name="email"]`).should(`be.visible`).type(`invalid@pirate.com`)
            cy.get(`[name="password"]`).should(`be.visible`).type(Cypress.env(`password`))
            cy.get(`[type="submit"]`).click();

            cy.location(`pathname`).should(`contain`, `login`)
            cy.get(`[role="alert"]`).should(`contain.text`, `failed`)
        });
        it('login with invalid password', () => {
            cy.visit(`/user/login`)
            cy.get(`[name="email"]`).should(`be.visible`).type(Cypress.env(`email`))
            cy.get(`[name="password"]`).should(`be.visible`).type(`123`)
            cy.get(`[type="submit"]`).click();

            cy.location(`pathname`).should(`contain`, `login`)
            cy.get(`[role="alert"]`).should(`contain.text`, `failed`)
        });
        it('login with invalid credentials', () => {
            cy.visit(`/user/login`)
            cy.get(`[name="email"]`).should(`be.visible`).type(`invalid@pirate.com`)
            cy.get(`[name="password"]`).should(`be.visible`).type( `123`)
            cy.get(`[type="submit"]`).click();

            cy.location(`pathname`).should(`contain`, `login`)
            cy.get(`[role="alert"]`).should(`contain.text`, `failed`)
        });
        
    });
});