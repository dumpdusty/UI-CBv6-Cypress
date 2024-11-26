describe('AUTHORIZATION', () => {
    describe('positive', () => {
        it('verify user login with valid credentials', () => {
          cy.login(Cypress.env(`email`), Cypress.env(`password`));

            cy.location(`pathname`).should(`contain`, `client`)
        });
    });

    describe('negative', () => {
        it('login with invalid email', () => {
           cy.login(`invalid@pirate.com`, Cypress.env(`password`))

            cy.location(`pathname`).should(`contain`, `login`)
            cy.get(`[role="alert"]`).should(`contain.text`, `failed`)
        });
        it('login with invalid password', () => {
            cy.login(Cypress.env(`email`), `123`)

            cy.location(`pathname`).should(`contain`, `login`)
            cy.get(`[role="alert"]`).should(`contain.text`, `failed`)
        });
        it('login with invalid credentials', () => {
            cy.login(`invalid@pirate.com`, `123`)

            cy.location(`pathname`).should(`contain`, `login`)
            cy.get(`[role="alert"]`).should(`contain.text`, `failed`)
        });
    });

    describe('INPUT FIELDS VALIDATION', () => {
        beforeEach(() => { 
            cy.visit('/user/login')
        })
        it('fields validation option 1 - interacting with DOM', () => {
            cy.get('[name="email"]').then(($input) => {
                $input[0].checkValidity();
                expect($input[0].validationMessage).to.eq(
                "Please fill out this field."
                );
            });

            cy.get('[name="email"]').type('a').then(($input) => {
                $input[0].checkValidity();
                expect($input[0].validationMessage).to.eq(
                "Please include an '@' in the email address. 'a' is missing an '@'."
                );
            });

            cy.get('[name="email"]').type('a@').then(($input) => {
                $input[0].checkValidity();
                expect($input[0].validationMessage).to.eq(
                "Please enter a part following '@'. 'aa@' is incomplete."
                );
            });

            cy.get('[name="password"]').then(($input) => {
                $input[0].checkValidity();
                expect($input[0].validationMessage).to.eq(
                "Please fill out this field."
                );
            });
        });

        it('fields validation option 2 - using Cypress only', () => {
            cy.get('[name="email"]')
                .should('have.prop', 'validationMessage', "Please fill out this field.");
            
            cy.get('[name="email"]').type(`a`).then(input => { 
                cy.wrap(input).should('have.prop', 'validationMessage', "Please include an '@' in the email address. 'a' is missing an '@'.")
            })

            cy.get('[name="email"]').type(`a@`).then(input => { 
                cy.wrap(input).should('have.prop', 'validationMessage', "Please enter a part following '@'. 'aa@' is incomplete.")
            })

            cy.get('[name="password"]').should('have.prop', 'validationMessage', "Please fill out this field.")
        });
    });
});