describe('API AUTH', () => {
    describe('positive', () => {
        it('verify user can login with valid credentials', () => {
            cy.apiLogin(Cypress.env('email'), Cypress.env(`password`))
                .then((response) => {
                        // will place token and userId values to the browser storage
                        // and any further requests won't require token value in headers
                        window.localStorage.setItem(`token`, response.body.payload.token)
                        window.localStorage.setItem(`userId`, response.body.payload.userId)

                        // simple response assertions
                        expect(response.status).to.eq(200);
                        expect(response.body.payload).to.haveOwnProperty('token') // true
                        expect(response.body.message).to.eq(`Auth success`)

                    }
                )
            // to verify that token was successfully placed in local storage
            cy.visit(`/client`);
        });
    });

    // TODO add {failOnStatusCode: false} property somewhere to prevent cypress error

    // describe('negative', () => {
    //     it('login with invalid email', () => {
    //         cy.apiLogin(`invalid@pirate.com`, Cypress.env(`password`)).then(response =>{
    //             cy.log(response)
    //
    //             // expect(response.status).to.eq(400);
    //             // expect(response.body.payload).to.haveOwnProperty('token') // true
    //             // expect(response.body.message).to.eq(`Auth success`)
    //         })
    //         cy.reload();
    //
    //         cy.location(`pathname`).should(`contain`, `login`)
    //         cy.get(`[role="alert"]`).should(`contain.text`, `failed`)
    //     });
    //     it('login with invalid password', () => {
    //         cy.login(Cypress.env(`email`), `123`)
    //
    //         cy.location(`pathname`).should(`contain`, `login`)
    //         cy.get(`[role="alert"]`).should(`contain.text`, `failed`)
    //     });
    //     it('login with invalid credentials', () => {
    //         cy.login(`invalid@pirate.com`, `123`)
    //
    //         cy.location(`pathname`).should(`contain`, `login`)
    //         cy.get(`[role="alert"]`).should(`contain.text`, `failed`)
    //     });
    // });
});
