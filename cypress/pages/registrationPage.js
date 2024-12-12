import Page from "../pages/page";
import {LINKS, TEXT} from "../fixtures/data";

class RegistrationPage extends Page{
    open(){
        return super.open(LINKS.REGISTER)
    }

    get cardHeader(){
        return cy.get(`.card-header`)
    }

    verifyHeaderElements = (addSelector, text) => {
        this.cardHeader.find(addSelector)
            .should(`be.visible`)
            .and(`have.text`, text)
    }
}

export default new RegistrationPage()