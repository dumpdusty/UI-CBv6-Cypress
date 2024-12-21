import InfoPage from '../infoPages/infoPage';

class ProfilePage extends InfoPage {
    open() {
        return cy.apiLogin(Cypress.env('email'), Cypress.env(`password`)).then((data)=> {
            return super.open(`/profile/${data.body.payload.userId}`)
        })
    }
}


export default new ProfilePage