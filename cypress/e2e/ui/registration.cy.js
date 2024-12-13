import RegistrationPage from '../../pages/extPages/registrationPage'
import {TEXT} from "../../fixtures/data";

describe('REGISTER', () => {
    it('verify page web-elements', () => {
       RegistrationPage.open()

        RegistrationPage.verifyHeaderElements(`.header-logo`, TEXT.registrationPage.appName)
        RegistrationPage.verifyHeaderElements(`.card-title`, TEXT.registrationPage.SIGNUP)
        RegistrationPage.verifyHeaderElements(`.card-text`, TEXT.registrationPage.CREATE_ACCOUNT)

        // RegistrationPage.inputCompany.type('Black Pearl')
        // RegistrationPage.inputEmail.type('willturner@pirate.com')
    });
});