// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// How to slow down commands: https://github.com/cypress-io/cypress/issues/249
// const COMMAND_DELAY = Cypress.env('COMMAND_DELAY') || 0;
// if (COMMAND_DELAY > 0) {
//     for (const command of ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains']) {
//         Cypress.Commands.overwrite(command, (originalFn, ...args) => {
//             const origVal = originalFn(...args);

//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     resolve(origVal);
//                 }, COMMAND_DELAY);
//             });
//         });
//     }
// }


// Workaround solution for cy.type not working properly and entering incomplete strings on input fields when typing
// Soluction taken  from demetris-manikas on this bug: https://github.com/cypress-io/cypress/issues/3817
Cypress.Commands.add('text', {prevSubject: true}, (subject, text) => {
    subject.val(text)
    return cy.wrap(subject)
})