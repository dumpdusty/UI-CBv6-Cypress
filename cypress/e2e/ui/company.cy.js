import CompanyPage from "../../pages/intPages/infoPages/companyPage";

describe(`COMPANY PAGE`, () => {
    it('open company page', () => {
        CompanyPage.open()
        CompanyPage.verifyUrl('company')
    });

    it.only('', () => {
        CompanyPage.open(Cypress.env('email'), Cypress.env(`password`));
        CompanyPage.profileDropdownLink.click();

        CompanyPage.getMenuLink().click();
    });
});