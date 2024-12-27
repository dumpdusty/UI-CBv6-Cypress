import ProfilePage from "../../pages/intPages/infoPages/profilePage";

describe(`USER PROFILE`, () => {
    beforeEach(() => {
        ProfilePage.open(Cypress.env('email'), Cypress.env(`password`));
    })

    it('verify profile dropdown', () => {
        ProfilePage.verifyUrl('profile')
        ProfilePage.profileDropdownLink.click();
        ProfilePage.verifyDropDownMenu();
    });

    it('verify profile info', () => {
        const subheaders = ['Name', 'Email', `Password`, 'Roles', `Company`, 'Created'];
        cy.intercept(`GET`, `https://clientbase-server-edu-dae6cac55393.herokuapp.com/v6/user/*`).as(`userInfo`);

        cy.get(`h4`).first().should(`have.text`, `Profile`);

        cy.get(`.setting-item`).find(`h6`).each((item, index) => {
            cy.wrap(item).should(`be.visible`).and(`have.text`, subheaders[index])
        });

        cy.get(`@userInfo`).its(`response.body`).then((response) => {
            const dateCreated = ProfilePage.changeDateFormat(response.payload.createdAt)
            cy.get(':nth-child(1) > .g-2 > .col-md').should(`have.text`, response.payload.name);
            cy.get(':nth-child(2) > .g-2 > .col-md').should(`have.text`, response.payload.companyAccount.email);
            cy.get(':nth-child(3) > .g-2 > .col-md').should(`have.text`, `Reset`);
            cy.get('.d-flex > :nth-child(1)').should(`have.text`, `verified`);
            cy.get('.d-flex > :nth-child(2)').should(`have.text`, `companyOwner`);
            cy.get(':nth-child(5) > .g-2 > .col-md').should(`have.text`, response.payload.companyAccount.companyName);
            cy.get(':nth-child(6) > .g-2 > .col-md').should(`include.text`, dateCreated);
        });
    });
});