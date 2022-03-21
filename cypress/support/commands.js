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

// Workaround solution for cy.type not working properly and entering incomplete strings on input fields when typing
// Soluction taken  from demetris-manikas on this bug: https://github.com/cypress-io/cypress/issues/3817
Cypress.Commands.add('text', {prevSubject: true}, (subject, text) => {
    subject.val(text)
    return cy.wrap(subject)
})