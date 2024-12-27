import internalPage from '../internalPage';

class CompanyPage extends internalPage {
    open() {
        return cy.apiLogin(Cypress.env('email'), Cypress.env(`password`)).then((response)=> {
            return super.open(`/company/${response.body.payload.user.companyAccount}`)
        })
    }
}


export default new CompanyPage