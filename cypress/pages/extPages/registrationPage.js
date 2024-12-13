import {LINKS, SELECTORS} from "../../fixtures/data";
import ExtPage from "./extPage";

class RegistrationPage extends ExtPage {

    get inputCompany() {
        return cy.get(SELECTORS.INPUT_COMPANY_NAME)
    }

    get inputFirstName() {
        return cy.get('[name="firstName"]')
    }

    get inputLastName() {
        return cy.get('[name="lastName"]')
    }

    open() {
        return super.open(LINKS.REGISTER)
    }

    sigUp = (email) => {
        this.open(LINKS.REGISTER)
        this.inputCompany.type(`Black Pearl`)
        this.inputFirstName.type(`Will`)
        this.inputLastName.type(`Turner`)
        this.inputEmail.type(email)
        this.inputPassword.type(Cypress.env('password'))
        this.submitBtn.click()
    }
    verifyHeaderElements = (selector, text) => {
        cy.get(`.card-header`)
            .find(selector)
            .should(`have.text`, text)
    }
}

export default new RegistrationPage()