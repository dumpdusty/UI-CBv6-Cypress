import InfoPage from '../infoPages/infoPage';

class CompanyPage extends InfoPage {
    open() {
        return cy.apiLogin(Cypress.env('email'), Cypress.env(`password`)).then((response)=> {
            return super.open(`/company/${response.body.payload.user.companyAccount}`)
        })
    }
}


export default new CompanyPage