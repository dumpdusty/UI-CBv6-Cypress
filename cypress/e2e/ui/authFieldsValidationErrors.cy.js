import LoginPage from "../../pages/extPages/authPage";

describe('INPUT FIELDS VALIDATION', () => {
    beforeEach(() => {
        LoginPage.open()
    })

    it('fields validation option 2 - using Cypress only', () => {
        LoginPage.inputEmail
            .should('have.prop',
                'validationMessage',
                "Please fill out this field.");

        LoginPage.inputEmail.type(`a`)
            .then(input => {
                cy.wrap(input)
                    .should('have.prop',
                        'validationMessage',
                        "Please include an '@' in the email address. 'a' is missing an '@'.")
            })

        LoginPage.inputEmail.type(`a@`)
            .then(input => {
                cy.wrap(input)
                    .should('have.prop',
                        'validationMessage',
                        "Please enter a part following '@'. 'aa@' is incomplete.")
            })

        LoginPage.inputPassword
            .should('have.prop',
                'validationMessage',
                "Please fill out this field.")
    });


    /*  another way to verify fields validation
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

        cy.get('[name="password"]').then((input) => {
            input[0].checkValidity();
            expect(input[0].validationMessage).to.eq(
            "Please fill out this field."
            );
        });
    });
    */
});

