import LandingPage from "../../pages/extPages/landingPage";
import {LABEL} from "../../fixtures/data";

describe('LANDING PAGE', () => {
    beforeEach(() => {
        LandingPage.open()
    })

    it('verify web elements', () => {
        LandingPage.logo
            .should(`be.visible`)
            .and(`have.text`, LABEL.APP_NAME)
        LandingPage.header
            .should(`be.visible`)
            .and(`have.text`, LABEL.HEADER.LANDING_PAGE)
        LandingPage.header.parent().find(`div`)
            .should(`be.visible`)
            .and(`have.text`, LABEL.SUBHEADER.LANDING_PAGE)
        LandingPage.loginLink.should(`be.visible`).and(`have.attr`, `href`, `/v6/user/login`)
        LandingPage.registerLink.should(`be.visible`).and(`have.attr`, `href`, `/v6/user/register`)
    });

    it('verify header elements', () => {
        LandingPage.verifyHeaderElements(`.header-logo`, LABEL.APP_NAME)
        LandingPage.verifyHeaderElements(`.card-title`, LABEL.REGISTRATION_PAGE.FORM_NAME)
        LandingPage.verifyHeaderElements(`.card-text`, LABEL.REGISTRATION_PAGE.MESSAGE)
    });

    it('verify page fields', () => {
        LandingPage.verifyPageFields()
    });

    it('verify links navigation', () => {
        LandingPage.loginLink.click()
        LandingPage.verifyUrl(`login`)
        cy.go(`back`);
        LandingPage.registerLink.click()
        LandingPage.verifyUrl(`register`)
    });
});