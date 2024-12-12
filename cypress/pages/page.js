import {SELECTORS} from "../fixtures/data";

class Page {

    get inputCompany(){
        return cy.get(SELECTORS.INPUT_COMPANY_NAME)
    }

    get inputFirstName(){
        return cy.get('[name="firstName"]')
    }

    get inputLastName(){
        return cy.get('[name="lastName"]')
    }

    get inputEmail(){
        return cy.get('[name="email"]')
    }

    get inputPassword(){
        return cy.get('[name="password"]')
    }

    get submitBtn(){
        return cy.get('[type="submit"]')
    }

    open (path){
        return cy.visit(path)
    }
}

export default Page