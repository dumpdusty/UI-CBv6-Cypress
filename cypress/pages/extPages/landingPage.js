import ExtPage from "../../pages/extPages/extPage";

class LandingPage extends ExtPage {

    get logo(){
        return cy.get('.d-flex > .sidebar-logo')
    }

    open(){
        return super.open(`/`)
    }
}

export default new LandingPage