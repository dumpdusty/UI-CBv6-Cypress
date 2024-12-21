import LandingPage from "../../pages/extPages/landingPage";
import {LABEL} from "../../fixtures/data";

describe('LANDING PAGE', () => {
    it('verify web elements', () => {
        LandingPage.open()
        LandingPage.logo.should(`be.visible`).and(`have.text`, LABEL.APP_NAME)
    });
    it('verify header elements', () => {

    });
});