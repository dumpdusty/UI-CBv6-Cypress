import Page from "./page";
import {LINKS} from "../fixtures/data";

class LoginPage extends Page{

    open(){
        return super.open(LINKS.LOGIN)
    }

    login(email, password){
        cy.visit(LINKS.LOGIN)
        this.inputEmail.type(email)
        this.inputPassword.type(password)
        this.submitBtn.click()
    }
}

export default new LoginPage