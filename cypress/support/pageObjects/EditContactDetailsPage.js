
export class EditContactDetailsPage {

    getBackToProfileInfoButton() {
        return cy.get('text=< Back to Profile Info');
    }

    getEditContactDetailsHeader() {
        return cy.get('text=Edit Contact Details');
    }

    getFirstNameInput() {
        return cy.get('input[name=first_name]');
    }

    getLastNameInput() {
        return cy.get('input[name=last_name]');
    }

    getSaveButton() {
        return cy.get('text=Save');
    }

    getCancelButton() {
        return cy.get('text=Cancel');
    }

    getProfileSuccesfullyUpdatedNotification() {
        return cy.get('text=Profile info successfully updated');
    }

    getErrorOnProfileUpdateNotification() {
        return cy.get('text=Error updating profile info');
    }

    getRequiredFieldError() {
        return cy.get('text=Required');
    }

    changeFirstName(firstName) {
        return cy.getFirstNameInput()
            .click()
            .type(firstName, {force:true});
    }

    changeLastName(lastName) {
        return cy.getLastNameInput()
            .click()
            .type(lastName, {force:true});
    }

    saveChanges() {
        return cy.getSaveButton().click();
    }

    cancelChanges() {
        return cy.getCancelButton.click();
    }

    waitForProfileSuccessfullyUpdatedNotification() {
        return cy.getProfileSuccesfullyUpdatedNotification()
            .should('be.visible');
    }

    waitForErrorOnProfileUpdateNotification() {
        return cy.getErrorOnProfileUpdateNotification()
            .should('be.visible');
    }

    goBackToProfileInfo() {
        return cy.getBackToProfileInfoButton().click();
    }

    waitForRequiredFieldError() {
        return cy.getRequiredFieldError()
            .should('be.visible');
    }
}