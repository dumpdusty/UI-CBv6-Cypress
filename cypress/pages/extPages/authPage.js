import ExtPage from "./extPage";
import {LINKS} from "../../fixtures/data";

class AuthPage extends ExtPage {
    open() {
        return super.open(LINKS.LOGIN)
    }

    login(email, password) {
        this.open(LINKS.LOGIN)
        this.inputEmail.type(email)
        this.inputPassword.type(password)
        this.submitBtn.click()
    }

    apiLogin(email, password) {
        let userId, companyId;
        return cy.request(
            {
                method: 'POST',
                url: 'https://clientbase-server-edu-dae6cac55393.herokuapp.com/v6/user/login',
                body: {email, password},
                failOnStatusCode: false,
            }).then(
            (response) => {
                userId = response.body.payload.userId
                companyId = response.body.payload.user.companyAccount
                window.localStorage.setItem("token", response.body.payload.token);
                window.localStorage.setItem("userId", response.body.payload.userId);
                console.log(response.body)
                return {userId, companyId}
            })
    }
}

export default new AuthPage