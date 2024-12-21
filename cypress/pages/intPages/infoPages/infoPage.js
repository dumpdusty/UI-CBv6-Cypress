import Page from '../../page';

export default class InfoPage extends Page {
    print(){
        return cy.log(`this is info page`)
    }
}