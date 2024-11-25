import authSuccessResponse from '../fixtures/authSuccessResponse.json';

describe('API AUTH', () => {
    describe('positive', () => {
        it('verify user can login with valid credentials', () => {
            cy.apiLogin(Cypress.env('email'), Cypress.env(`password`))
                .then((response) => {
                        // will place token and userId values to the browser storage
                        // and any further requests won't require token value in headers
                        window.localStorage.setItem(`token`, response.body.payload.token)
                        window.localStorage.setItem(`userId`, response.body.payload._id)

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


describe('API AUTH with mocks', () => {
    describe('positive', () => {
        it('verify user can login with valid credentials', () => {
            cy.intercept(
                'POST',
                'https://clientbase-server-edu-dae6cac55393.herokuapp.com/v6/user/login',
                authSuccessResponse).as('loginRequest')

            cy.login(Cypress.env('email'), Cypress.env(`password`))

            cy.get(`@loginRequest`).its('response').then(res => {
                expect(res.statusCode).to.eq(200)
                expect(res.body.message).to.eq(`Auth success`)
            })
        })
    });
});