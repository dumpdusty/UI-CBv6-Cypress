import LoginPage from "../../pages/extPages/loginPage";


describe('AUTHORISATION', () => {
    describe('POSITIVE', () => {
        it('verify login page web elements', () => {
            LoginPage.open();

            LoginPage.inputEmail.should('be.visible').type(Cypress.env('email'))
            LoginPage.inputPassword.should('be.visible').type(Cypress.env('password'))
            LoginPage.submitBtn.should('be.visible').click();
        });

        it('auth using login method', () => {
            LoginPage.login(Cypress.env('email'), Cypress.env('password'))
            cy.url().should('include', 'client')
        });
    });

    describe('NEGATIVE', () => {
        it('verify login with invalid email', () => {
            LoginPage.login('invalid@email.com', Cypress.env('password'))
            cy.get(`.ant-notification-notice-message`).should(`be.visible`).and(`have.text`, `Auth failed`)
        });

        it('verify login with invalid password', () => {
            LoginPage.login(Cypress.env('email'), 'qwe123')
            cy.get(`.ant-notification-notice-message`).should(`be.visible`).and(`have.text`, `Auth failed`)
        });
    });
});
