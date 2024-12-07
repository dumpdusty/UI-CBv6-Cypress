class BasePage {

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

export default BasePage