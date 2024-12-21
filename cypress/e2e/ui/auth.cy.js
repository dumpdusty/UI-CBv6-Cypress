import AuthPage from "../../pages/extPages/authPage";
import {ALERTS, LABEL} from "../../fixtures/data";
describe('AUTHORISATION', () => {
    describe('POSITIVE', () => {
        it('verify user can login with valid credentials', () => {
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

    describe('VERIFY WEB ELEMENTS', () => {
        beforeEach(() => {
            AuthPage.open()
        })

        it('verify header elements', () => {
           AuthPage.verifyHeaderElements(`.header-logo`, LABEL.APP_NAME)
           AuthPage.verifyHeaderElements(`.card-title`, LABEL.LOGIN_PAGE.FORM_NAME)
           AuthPage.verifyHeaderElements(`.card-text`, LABEL.LOGIN_PAGE.MESSAGE)
        });

        it('verify page input fields', () => {
            AuthPage.inputEmail.should(`be.visible`).and(`have.attr`, `placeholder`, `Enter your email address`)
            AuthPage.inputEmail.parent().should('have.text', `Email address`)

            AuthPage.inputPassword.should('be.visible').and(`have.attr`, `placeholder`, `Enter your password`);
            // try to find the solution to verify only password - probably only with `include.text` assertion
            AuthPage.inputPassword.parent().should('have.text', `Password Forgot password?`);

            AuthPage.submitBtn.should('be.visible').and(`have.text`, `Log In`);
        });
    });
});
