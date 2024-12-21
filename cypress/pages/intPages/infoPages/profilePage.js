import InfoPage from '../infoPages/infoPage';

class ProfilePage extends InfoPage {
    open(email, password) {
        return cy.apiLogin(email, password).then((response)=> {
            return super.open(`/profile/${response.body.payload.userId}`)
        })
    }
}


export default new ProfilePage