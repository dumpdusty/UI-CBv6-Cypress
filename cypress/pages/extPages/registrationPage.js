import {LINKS, SELECTORS} from "../../fixtures/data";
import ExtPage from "./extPage";

class registrationPage extends ExtPage {
    open() {
        return super.open(LINKS.REGISTER)
    }

    get inputCompany() {
        return cy.get(SELECTORS.INPUT_COMPANY_NAME)
    }

    get inputFirstName() {
        return cy.get('[name="firstName"]')
    }

    get inputLastName() {
        return cy.get('[name="lastName"]')
    }
}