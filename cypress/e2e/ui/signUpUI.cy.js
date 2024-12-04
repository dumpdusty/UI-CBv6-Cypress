
describe('REGISTRATION', () => {
    const newEmail = `user_${Date.now()}@pirate.com`;
    describe('positive', () => {
       it('', () => {
        cy.visit(`/`)
        cy.get(`[placeholder*="company"]`).should(`be.visible`).type('randomCompanyName')
        cy.get(`[name="firstName"]`).should(`be.visible`).type('randomFirstName')
        cy.get(`[name="lastName"]`).should(`be.visible`).type('randomLastName')
        cy.get(`[name="email"]`).should(`be.visible`).type(newEmail)
        cy.get(`[name="password"]`).should(`be.visible`).type(`Pirate666!`)
        cy.get(`[type="submit"]`).click();
       }); 
    });
});