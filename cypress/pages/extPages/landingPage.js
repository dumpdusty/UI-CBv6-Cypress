import ExtPage from "../../pages/extPages/extPage";
import {SELECTORS} from "../../fixtures/data";
import RegistrationPage from "./registrationPage";

class LandingPage extends ExtPage {

    get inputCompany() {
        return cy.get(SELECTORS.INPUT_COMPANY_NAME)
    }

    get inputFirstName() {
        return cy.get('[name="firstName"]')
    }

    get inputLastName() {
        return cy.get('[name="lastName"]')
    }

    get logo(){
        return cy.get('.d-flex > .sidebar-logo')
    }

    open(){
        return super.open(`/`)
    }

    verifyPageFields =() => {
        this.inputCompany.should('be.visible').and(`have.attr`, `placeholder`, `Enter company name`)
        this.inputCompany.parent().should('have.text', `Company name`)

        this.inputFirstName.should(`be.visible`).and(`have.attr`, `placeholder`, `Enter your first name`)
        this.inputFirstName.parent().should('have.text', `First name`)

        this.inputLastName.should(`be.visible`).and(`have.attr`, `placeholder`, `Enter last name`)
        this.inputLastName.parent().should('have.text', `Last name`)

        this.inputEmail.should(`be.visible`).and(`have.attr`, `placeholder`, `Enter email`)
        this.inputEmail.parent().should('have.text', `Email`)

        this.inputPassword.should(`be.visible`).and(`have.attr`, `placeholder`, `Enter password`)
        this.inputPassword.parent().should('have.text', `Password`)

        this.submitBtn.should(`be.visible`).and(`have.text`, `Create Account`)
    }
}

export default new LandingPage