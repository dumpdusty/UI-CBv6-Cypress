import {SELECTORS} from "../fixtures/data";

export default class Page {
    open (path){
        return cy.visit(path)
    }
}