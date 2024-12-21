// declaring types not required in newer versions of IDE
// code commented below will produce an error inside of support/commands.js but custom command will work
// to get rid of the error just uncomment code below

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Log into app
       * @example
       * cy.login('email', 'password')
       */
      login(email: string, password: string): Chainable<Subject>;

        /**
         * Log into app using API
         * @example
         * cy.login('email', 'password')
         */
        apiLogin(email: string, password: string): Chainable<Subject>;
    }
  }