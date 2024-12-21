import InfoPage from '../infoPages/infoPage';
import AuthPage from "../../extPages/authPage";

class ProfilePage extends InfoPage {
    open() {
        return AuthPage.apiLogin(Cypress.env('email'), Cypress.env(`password`)).then((data)=> {
            return super.open(`/profile/${data.userId}`)
        })
    }
}


export default new ProfilePage