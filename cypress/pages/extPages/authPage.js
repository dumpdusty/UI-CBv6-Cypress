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
}

export default new AuthPage