import AuthPage from "../../pages/extPages/authPage";


describe('AUTHORISATION', () => {
    describe('POSITIVE', () => {
        it('verify login page web elements', () => {
            AuthPage.open();

            AuthPage.inputEmail.should('be.visible').type(Cypress.env('email'))
            AuthPage.inputPassword.should('be.visible').type(Cypress.env('password'))
            AuthPage.submitBtn.should('be.visible').click();
        });

        it('auth using login method', () => {
            AuthPage.login(Cypress.env('email'), Cypress.env('password'))
            cy.url().should('include', 'client')
        });
    });

    describe('NEGATIVE', () => {
        it('verify login with invalid email', () => {
            AuthPage.login('invalid@email.com', Cypress.env('password'))
            cy.get(`.ant-notification-notice-message`).should(`be.visible`).and(`have.text`, `Auth failed`)
        });

        it('verify login with invalid password', () => {
            AuthPage.login(Cypress.env('email'), 'qwe123')
            cy.get(`.ant-notification-notice-message`).should(`be.visible`).and(`have.text`, `Auth failed`)
        });
    });
});
