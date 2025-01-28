import internalPage from '../internalPage';

class ClientPage extends internalPage {


    open(email, password) {
        return cy.apiLogin(email, password).then(()=> {
            return super.open(`/client`)
        })
    }
}


export default new ClientPage