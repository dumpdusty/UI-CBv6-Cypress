import Page from "../page";

export default class internalPage extends Page {

    get profileDropdownLink(){
        return cy.get(`.dropdown-toggle`)
    }

    get menuLink(){
        return cy.get(`.menu-link`)
    }

    get profileLink() {
        return cy.get(`[data-qa="profile"]`)

    }

    get companyLink() {
        return cy.get(`[data-qa="company"]`)
    }

    get logoutLink() {
        return cy.get(`[data-qa="logout"]`)
    }

    verifyDropDownMenu() {
        this.profileDropdownLink.should(`be.visible`)
        this.profileLink.should(`be.visible`).and(`have.text`, `Profile`);
        this.companyLink.should(`be.visible`).and(`have.text`, `Company`);
        this.logoutLink.should(`be.visible`).and(`have.text`, `Logout`);
    };

    verifyClientSearch(text){
        cy.get('[placeholder="Enter client name"]').type(text).type('{enter}');
        cy.get('.table-four').find(`tr`).find(`td`).find(`a`).each(el =>{
            cy.wrap(el).should(`include.text`, text);
        })
    };
}