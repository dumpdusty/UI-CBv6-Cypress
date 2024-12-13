import AuthPage from "../../pages/extPages/authPage";
import {ALERTS} from "../../fixtures/data";


describe('AUTHORISATION', () => {
    describe('POSITIVE', () => {
        it('verify page input fields', () => {
            AuthPage.open();

            AuthPage.inputEmail.should('be.visible').type(Cypress.env('email'))
            AuthPage.inputPassword.should('be.visible').type(Cypress.env('password'))
            AuthPage.submitBtn.should('be.visible').click();
        });

        it('auth using login method', () => {
            AuthPage.login(Cypress.env('email'), Cypress.env('password'))
            AuthPage.verifyUrl(`client`)
        });
    });

    describe('NEGATIVE', () => {
        it('verify login with invalid email', () => {
            AuthPage.login('invalid@email.com', Cypress.env('password'))
            AuthPage.errorMessage.should(`be.visible`).and(`have.text`, ALERTS.LOGIN)
        });

        it('verify login with invalid password', () => {
            AuthPage.login(Cypress.env('email'), 'qwe123')
            AuthPage.errorMessage.should(`be.visible`).and(`have.text`, ALERTS.LOGIN)
        });
    });
});
