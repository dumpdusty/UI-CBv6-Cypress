import authSuccessResponse from '../../fixtures/authSuccessResponse.json';

describe('API AUTH', () => {
    describe('positive', () => {
        // TODO place request in before hook and split assertions to few its
        it('verify user can login with valid credentials', () => {
            cy.apiLogin(Cypress.env('email'), Cypress.env(`password`))
                .then((response) => {
                        // assertions could be split into multiple tests
                        expect(response.status).to.eq(200);
                        expect(response.body.payload).to.haveOwnProperty('token') // true
                        expect(response.body.message).to.eq(`Auth success`)

                    }
                )
            // to verify that token was successfully placed in local storage
            cy.visit(`/client`);
        });
    });


    describe('negative', () => {
        it('login with invalid email', () => {
            cy.apiLogin(`invalid@pirate.com`, Cypress.env(`password`))
                .then(response => {
                    expect(response.status).to.eq(400);
                    expect(response.body.message).to.eq(`Auth failed`)
            })

            cy.location(`pathname`).should(`contain`, `login`)

        });
        it('login with invalid password', () => {
            cy.apiLogin(Cypress.env(`email`), `123`)
                .then(response => {
                    expect(response.status).to.eq(400);
                    expect(response.body.message).to.eq(`Auth failed`)
            })

            cy.location(`pathname`).should(`contain`, `login`)
        });
        it('login with invalid credentials', () => {
            cy.apiLogin(`invalid@pirate.com`, `123`)
                .then(response => {
                    expect(response.status).to.eq(400);
                    expect(response.body.message).to.eq(`Auth failed`)
            })

            cy.location(`pathname`).should(`contain`, `login`)
        });
    });
});


describe('AUTH with mocks', () => {
    describe('MOCK WITH UI LOGIN', () => {
        it('verify user can login with valid credentials', () => {
            cy.intercept(
                'POST',
                'https://clientbase-server-edu-dae6cac55393.herokuapp.com/v6/user/login',
                authSuccessResponse).as('loginUIRequest')

            cy.login(Cypress.env('email'), Cypress.env(`password`))

            cy.wait(`@loginUIRequest`).its(`response.body`).then(res => {
                cy.log(JSON.stringify(res))
            })

            cy.get(`@loginUIRequest`).its(`response.body`).then(res => {
                    expect(res.statusCode).to.eq(200)
                    expect(res.body.message).to.eq(`Well done, man!`)
            })

            // below is to confirm that cy.wait is working only for one time for each request
            // cy.wait(`@loginUIRequest`).its(`response.body`).then(res => {
            //     cy.log(JSON.stringify(res))
            // })
        })
    });

    //  below is incorrect - cy.intercept should be used only with UI commands !!!
    // describe('MOCK WITH API LOGIN', () => {
    //     it('verify user can login with valid credentials', () => {
    //         cy.intercept(
    //             'POST',
    //             'https://clientbase-server-edu-dae6cac55393.herokuapp.com/v6/user/login',
    //             authSuccessResponse)
    //
    //         cy.apiLogin(Cypress.env('email'), Cypress.env(`password`)).then(response => {
    //             cy.log(JSON.stringify(response.body))
    //             expect(response.status).to.eq(200);
    //             expect(response.body.message).to.equal("Auth success");
    //         })
    //     });
    // });
});