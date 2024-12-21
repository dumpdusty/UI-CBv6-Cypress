import Page from "../page";


export default class ExtPage extends Page{
    get inputEmail(){
        return cy.get('[name="email"]')
    }

    get inputPassword(){
        return cy.get('[name="password"]')
    }

    get submitBtn(){
        return cy.get('[type="submit"]')
    }

    get errorMessage(){
        return cy.get(`.ant-notification-notice-message`)
    }

    verifyHeaderElements = (selector, text) => {
        cy.get(`.card-header`)
            .find(selector)
            .should(`have.text`, text)
    }

    print(){
        return cy.log(`this is info page`)
    }
}