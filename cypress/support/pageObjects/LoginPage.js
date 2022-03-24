import creds from '../../data/creds.json';

export class LoginPage {
    visit() {
        cy.visit('login');
    }

    getEmailInput() {
        return cy.get('input#email');
    }

    getPasswordInput() {
        return cy.get('input#password');
    }
 
    getSubmitButton() {
        return cy.get('button#form-submit-button');
    }

    loginUser() {
        this.getEmailInput()
            .should('be.enabled')
            .click()
            .type(creds.emailAddress, {force:true})
            .should('have.value', creds.emailAddress);
        this.getPasswordInput()
            .should('be.enabled')
            .click()
            .type(creds.password, {force:true})
            .should('have.value', creds.password);
        this.getSubmitButton()
            .should('be.enabled')
            .trigger('click');
        cy.intercept('/account');
        return this;
    }
}