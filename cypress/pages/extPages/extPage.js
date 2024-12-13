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
}