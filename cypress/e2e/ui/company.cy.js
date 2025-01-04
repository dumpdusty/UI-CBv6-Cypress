import CompanyPage from "../../pages/intPages/infoPages/companyPage";
import {LINKS} from "../../fixtures/data";
import ProfilePage from "../../pages/intPages/infoPages/profilePage";

describe(`COMPANY PAGE`, () => {
    beforeEach(() => {
        cy.intercept(`GET`, LINKS.INTERCEPT.COMPANY_INFO).as(`companyInfo`);
        CompanyPage.open(Cypress.env('email'), Cypress.env(`password`));
        cy.wait(`@companyInfo`);
    })
    it('verify profile dropdown', () => {
        CompanyPage.verifyUrl('company')
        CompanyPage.profileDropdownLink.click();
        CompanyPage.verifyDropDownMenu();
    });

    it('verify company info', () => {
        const subtitles = ['Company Name', 'Company Email', `Company Owner`, 'Invite Link', 'Created'];


        cy.get(`.h5`).first().should(`have.text`, `Company Information `);
        cy.get(`.setting-item`).find(`h6`).each((item, index) => {
            cy.wrap(item).should(`be.visible`).and(`have.text`, subtitles[index])
        });

        cy.get(`@companyInfo`).its(`response.body`).then((response) => {
            const dateCreated = ProfilePage.changeDateFormat(response.payload.createdAt)
            cy.get('[name="companyName"]').should(`have.value`, response.payload.companyName);
            cy.get('[name="email"]').should(`have.value`, response.payload.email);
            cy.get('.col-md>a').eq(0).should(`have.text`, response.payload.owner.name);
            cy.get('.col-md>a').eq(1).should(`contain.text`, 'invite');
            cy.get(':nth-child(5) > .ant-row > .col-md').should(`include.text`, dateCreated);
        });
    });
});