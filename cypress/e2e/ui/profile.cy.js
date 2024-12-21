import ProfilePage from "../../pages/intPages/infoPages/profilePage";

describe(`USER PROFILE`, () => {
    it('open profile page', () => {
        ProfilePage.open(Cypress.env('email'), Cypress.env(`password`));
        ProfilePage.verifyUrl('profile')
    });

    it.only('', () => {
        ProfilePage.open(Cypress.env('email'), Cypress.env(`password`));
        ProfilePage.profileDropdownLink.click();
    });
});