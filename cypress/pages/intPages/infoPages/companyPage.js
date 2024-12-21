import InfoPage from '../infoPages/infoPage';
import AuthPage from "../../extPages/authPage";

class CompanyPage extends InfoPage {
    open() {
        return AuthPage.apiLogin(Cypress.env('email'), Cypress.env(`password`)).then((data)=> {
            return super.open(`/company/${data.companyId}`)
        })
    }
}


export default new CompanyPage