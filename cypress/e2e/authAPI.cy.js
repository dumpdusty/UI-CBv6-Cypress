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

    describe('negative', () => {
        it('login with invalid email', () => {
            cy.apiLogin(`invalid@pirate.com`, Cypress.env(`password`)).then(response =>{    
                expect(response.status).to.eq(400);
                expect(response.body.message).to.eq(`Auth failed`)
            })
    
            cy.location(`pathname`).should(`contain`, `login`)
            
        });
        it('login with invalid password', () => {
            cy.apiLogin(Cypress.env(`email`), `123`).then(response =>{    
                expect(response.status).to.eq(400);
                expect(response.body.message).to.eq(`Auth failed`)
            })
    
            cy.location(`pathname`).should(`contain`, `login`)
        });
        it('login with invalid credentials', () => {
            cy.apiLogin(`invalid@pirate.com`, `123`).then(response =>{    
                expect(response.status).to.eq(400);
                expect(response.body.message).to.eq(`Auth failed`)
            })
    
            cy.location(`pathname`).should(`contain`, `login`)
        });
    });
});


// describe('API AUTH with mocks', () => {
//     const mockResponse = {
//         "message": "Auth success",
//         "success": true,
//         "fail": false,
//         "silent": true,
//         "payload": {
//             "confirmEmailLink": "/user/verify/email/6695925f7a64171a42f614d5/undefined",
//             "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2tzcGFycm93QHBpcmF0ZS5jb20iLCJ1c2VySWQiOiI2Njk1OTI1ZjdhNjQxNzFhNDJmNjE0ZDUiLCJpYXQiOjE3MzE5MDkwNzgsImV4cCI6MTczMjc3MzA3OH0.127yz8yoRvx6p2n7OvXkJNUxRRv8rYX4wLVXa1-sGLg",
//             "user": {
//                 "emailConfirmation": {
//                     "confirmed": true
//                 },
//                 "resetPassword": {
//                     "history": []
//                 },
//                 "lastLogin": {
//                     "date": "2024-11-18T05:51:08.073Z"
//                 },
//                 "_id": "6695925f7a64171a42f614d5",
//                 "timeZone": "America/Los_Angeles",
//                 "email": "jacksparrow@pirate.com",
//                 "password": null,
//                 "name": "Jack Sparrow",
//                 "firstName": "Jack",
//                 "lastName": "Sparrow",
//                 "companyAccount": "6695925f7a64171a42f614d6",
//                 "isCompanyOwner": true,
//                 "roles": [
//                     "verified",
//                     "companyOwner"
//                 ],
//                 "active": true,
//                 "createdAt": "2024-07-15T21:19:27.949Z",
//                 "updatedAt": "2024-11-18T05:51:08.073Z"
//             },
//             "acl": [
//                 "user.auth",
//                 "user.search",
//                 "client.create.own",
//                 "client.get.own",
//                 "client.search.own",
//                 "client.update.own",
//                 "client.delete.own",
//                 "order.create.own",
//                 "order.get.own",
//                 "order.search.own",
//                 "order.update.own",
//                 "order.delete.own",
//                 "vendor.create.own",
//                 "vendor.get.own",
//                 "vendor.search.own",
//                 "vendor.update.own",
//                 "vendor.delete.own",
//                 "service.create.own",
//                 "service.get.own",
//                 "service.search.own",
//                 "service.update.own",
//                 "service.delete.own",
//                 "report.get.own",
//                 "user.delete.any",
//                 "user.update.any",
//                 "companyAccount.update.own"
//             ],
//             "userId": "6695925f7a64171a42f614d5"
//         }
//     }

//     describe('positive', () => {
//         it('verify user can login with valid credentials', () => {
//             cy.intercept('POST', 'https://clientbase-server-edu-dae6cac55393.herokuapp.com/v6/user/login', mockResponse).as('loginRequest')
//             cy.apiLogin(Cypress.env('email'), Cypress.env(`password`))
//                 .then((response) => {                    
//                         expect(response.status).to.eq(200);
//                         expect(response.body.payload).to.haveOwnProperty('token') // true
//                         expect(response.body.message).to.eq(`Auth success`)

//                     }
//                 )
//             // to verify that token was successfully placed in local storage
//             cy.visit(`/client`);
//         });
//     });
// });