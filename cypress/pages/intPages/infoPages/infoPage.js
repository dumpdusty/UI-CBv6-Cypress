import Page from '../../page';

export default class InfoPage extends Page {

    get profileDropdownLink(){
        return cy.get(`.dropdown-toggle`)
    }

    getMenuLink(){
        return cy.get(`.menu-link`)
    }

}