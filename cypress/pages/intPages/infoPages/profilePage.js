import InfoPage from '../infoPages/infoPage';

class ProfilePage extends InfoPage {
    open() {
        return cy.apiLogin(Cypress.env('email'), Cypress.env(`password`)).then((response)=> {
            return super.open(`/profile/${response.body.payload.userId}`)
        })
    }
}


export default new ProfilePage