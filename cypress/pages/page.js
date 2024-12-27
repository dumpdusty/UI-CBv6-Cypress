
export default class Page {
    open (path){
        return cy.visit(path)
    }

    verifyUrl(text){
        return cy.url().should(`include`, text)
    }

    changeDateFormat(date){
        const dateCreated = new Date(date);
        return `${dateCreated.getUTCDate()} ${dateCreated.toLocaleString('default', { month: 'long' })} ${dateCreated.getUTCFullYear()}`;
    }
}