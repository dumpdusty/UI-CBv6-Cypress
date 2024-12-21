import InfoPage from '../infoPages/infoPage';

class CompanyPage extends InfoPage {
    open() {
        return cy.apiLogin(Cypress.env('email'), Cypress.env(`password`)).then((data)=> {
            return super.open(`/company/${data.body.payload.user.companyAccount}`)
        })
    }
}


export default new CompanyPage