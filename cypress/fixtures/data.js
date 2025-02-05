export const SELECTORS = {
    INPUT_COMPANY_NAME: '[name="companyName"]'
}

export const LINKS = {
    REGISTER: 'user/register',
    LOGIN: '/user/login',
    INTERCEPT: {
        USER_INFO: 'https://clientbase-server-edu-dae6cac55393.herokuapp.com/v6/user/*',
        COMPANY_INFO: 'https://clientbase-server-edu-dae6cac55393.herokuapp.com/v6/company/*'
    }
}

export const LABEL = {
    HEADER: {
        LANDING_PAGE: `Dispatching and accounting for service companies`
    },
    SUBHEADER: {
        LANDING_PAGE: `The easiest way to manage the process of receiving and transmitting an order.`
    },
    APP_NAME: `ClientBase`,
    REGISTRATION_PAGE: {
        FORM_NAME: 'Sign Up',
        MESSAGE: 'Create an account as a business owner',
    },

    LOGIN_PAGE: {
        FORM_NAME: 'Sign In',
        MESSAGE: `Welcome back! Please signin to continue.`,
    }

}

export const ALERTS = {
    SIGNUP: `User with this e-mail exists`,
    LOGIN: `Auth failed`
}

