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
    verifyHeaderElements = (selector, text) => {
        cy.get(`.card-header`)
            .find(selector)
            .should(`have.text`, text)
    }
}

export default new RegistrationPage()