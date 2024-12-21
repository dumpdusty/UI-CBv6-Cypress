import LandingPage from "../../pages/extPages/landingPage";
import {LABEL} from "../../fixtures/data";

describe('LANDING PAGE', () => {
    it('verify web elements', () => {
        LandingPage.open()
        LandingPage.logo.should(`be.visible`).and(`have.text`, LABEL.APP_NAME)
    });

    it('verify header elements', () => {
        LandingPage.open()
        LandingPage.verifyHeaderElements(`.header-logo`, LABEL.APP_NAME)
        LandingPage.verifyHeaderElements(`.card-title`, LABEL.REGISTRATION_PAGE.FORM_NAME)
        LandingPage.verifyHeaderElements(`.card-text`, LABEL.REGISTRATION_PAGE.MESSAGE)
    });

    it.only('verify page fields', () => {
        LandingPage.open()
        LandingPage.verifyPageFields()
    });
});