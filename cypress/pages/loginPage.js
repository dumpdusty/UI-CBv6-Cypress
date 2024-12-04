import BasePage from "./basePage";

class LoginPage extends BasePage{

    open(){
        return super.open('/user/login')
    }

    login(email, password){
        cy.visit('/user/login')
        this.inputEmail.type(email)
        this.inputPassword.type(password)
        this.loginBtn.click()
    }
}

export default new LoginPage