import RegistrationPage from "../../pages/extPages/registrationPage";
import {LABEL, ALERTS} from "../../fixtures/data";

describe('REGISTER', () => {
    describe('POSITIVE', () => {
        it('verify user can register', () => {
            const newEmail = `user_${Date.now()}@pirate.com`;
            RegistrationPage.sigUp(newEmail)

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
      beforeEach(() => {
          RegistrationPage.open()
      })

        it('verify header elements', () => {
            RegistrationPage.verifyHeaderElements(`.header-logo`, LABEL.APP_NAME)
            RegistrationPage.verifyHeaderElements(`.card-title`, LABEL.REGISTRATION_PAGE.FORM_NAME)
            RegistrationPage.verifyHeaderElements(`.card-text`, LABEL.REGISTRATION_PAGE.MESSAGE)
        });

        it('verify page fields', () => {
            RegistrationPage.inputCompany.should('be.visible').and(`have.attr`, `placeholder`, `Enter company name`)
            RegistrationPage.inputCompany.parent().should('have.text', `Company name`)

            RegistrationPage.inputFirstName.should(`be.visible`).and(`have.attr`, `placeholder`, `Enter your first name`)
            RegistrationPage.inputFirstName.parent().should('have.text', `First name`)

            RegistrationPage.inputLastName.should(`be.visible`).and(`have.attr`, `placeholder`, `Enter last name`)
            RegistrationPage.inputLastName.parent().should('have.text', `Last name`)

            RegistrationPage.inputEmail.should(`be.visible`).and(`have.attr`, `placeholder`, `Enter email`)
            RegistrationPage.inputEmail.parent().should('have.text', `Email`)

            RegistrationPage.inputPassword.should(`be.visible`).and(`have.attr`, `placeholder`, `Enter password`)
            RegistrationPage.inputPassword.parent().should('have.text', `Password`)

            RegistrationPage.submitBtn.should(`be.visible`).and(`have.text`, `Create Account`)
        });
    });
});