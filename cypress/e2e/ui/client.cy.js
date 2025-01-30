import ClientPage from "../../pages/intPages/entityPage/clientPage";

describe('CLIENT PAGE', () => {
    beforeEach(() => {
        ClientPage.open(Cypress.env('email'), Cypress.env(`password`));
    })

    it('verify URL', () => {
        cy.url().should('include', '/client');
    });

    it.only('verify search function with intercept', () => {

        cy.intercept('POST', 'https://clientbase-server-edu-dae6cac55393.herokuapp.com/v6/client/search', (req) => {
            if (req.body.name) {
                req.alias = 'secondSearch'
            }
        });

        cy.get('.form-control').type('Blake{enter}');

        cy.wait(`@secondSearch`).its(`response`).then(res => {
            //verify response status code
            expect(res.statusCode).to.eq(200)

            // verify response body message
            expect(res.body.message).to.eq(`ClientSearch ok`)

            //verify response body items count matches rendered table rows
            const clientCount = res.body.payload.items.length
            cy.get(`tbody > tr`).its('length').should(`eq`, clientCount);
        })

        cy.get(`tbody > tr`).each(el => {
            cy.wrap(el).find(`td:nth-child(1)`).should(`include.text`, 'Blake');
        })

        // waiting for page content loading could be done by cy.get(specific_element).should('be.visible')
        // in this case we do not have any specific element to wait for, so we use cy.intercept and then cy.wait
    });
});