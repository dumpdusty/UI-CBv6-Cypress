import internalPage from '../internalPage';

class ProfilePage extends internalPage {


    open(email, password) {
        return cy.apiLogin(email, password).then((response)=> {
            return super.open(`/profile/${response.body.payload.userId}`)
        })
    }
}


export default new ProfilePage