
export default class Page {
    open (path){
        return cy.visit(path)
    }

    verifyUrl(text){
        return cy.url().should(`include`, text)
    }
}