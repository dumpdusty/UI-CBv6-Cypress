import RegistrationPage from "../../pages/extPages/registrationPage";
import {LABEL, ALERTS} from "../../fixtures/data";

describe('REGISTER', () => {
    describe('POSITIVE', () => {
        const newEmail = `user_${Date.now()}@pirate.com`;
        it('verify page fields', () => {
            RegistrationPage.open()
            RegistrationPage.inputCompany.should('be.visible').type(`Black Pearl`)
            RegistrationPage.inputFirstName.should(`be.visible`).type(`Jack`)
            RegistrationPage.inputLastName.should(`be.visible`).type(`Sparrow`)
            RegistrationPage.inputEmail.should(`be.visible`).type(newEmail)
            RegistrationPage.inputPassword.should(`be.visible`).type(Cypress.env('password'))
            RegistrationPage.submitBtn.should(`be.visible`).click()

            RegistrationPage.verifyUrl(`onboarding`)
            cy.get(`.container`).find(`.ms-2`).should(`have.text`, `Confirm Email`)
        });
    });

    describe('NEGATIVE', () => {
        it('signup with existing email', () => {
            RegistrationPage.sigUp(Cypress.env('email'))
            RegistrationPage.errorMessage.should(`be.visible`).and(`have.text`, ALERTS.SIGNUP)
        });
    });

    describe('VERIFY WEB ELEMENTS', () => {
        it('verify header elements', () => {
            RegistrationPage.open()

            RegistrationPage.verifyHeaderElements(`.header-logo`, LABEL.REGISTRATION_PAGE.APP_NAME)
            RegistrationPage.verifyHeaderElements(`.card-title`, LABEL.REGISTRATION_PAGE.SIGNUP)
            RegistrationPage.verifyHeaderElements(`.card-text`, LABEL.REGISTRATION_PAGE.CREATE_ACCOUNT)
        });

    });

});