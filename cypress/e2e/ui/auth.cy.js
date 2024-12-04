import LoginPage from "../../pages/loginPage";


describe('LOGIN USING LOGIN PAGE', () => {
    it('auth using elements', () => {
        LoginPage.open();
        LoginPage.inputEmail.type(Cypress.env('email'))
        LoginPage.inputPassword.type(Cypress.env('password'))
        LoginPage.loginBtn.click();
    });

    it('auth using login method', () => {
        LoginPage.login(Cypress.env('email'), Cypress.env('password'))
    });

    it('verify login page elements', () => {
        LoginPage.open();
    });
});