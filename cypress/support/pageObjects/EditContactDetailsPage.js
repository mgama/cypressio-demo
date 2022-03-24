
export class EditContactDetailsPage {

    getBackToProfileInfoButton() {
        return cy.contains('< Back to Profile Info');
    }

    getEditContactDetailsHeader() {
        return cy.contains('Edit Contact Details');
    }

    getFirstNameInput() {
        return cy.get('input[name=first_name]');
    }

    getLastNameInput() {
        return cy.get('input[name=last_name]');
    }

    getSaveButton() {
        return cy.contains('Save');
    }

    getCancelButton() {
        return cy.contains('Cancel');
    }

    getProfileSuccesfullyUpdatedNotification() {
        return cy.contains('Profile info successfully updated');
    }

    getErrorOnProfileUpdateNotification() {
        return cy.contains('Error updating profile info');
    }

    getRequiredFieldError() {
        return cy.contains('Required');
    }

    changeFirstName(firstName) {
        return this.getFirstNameInput()
            .click()
            .clear()
            .type(firstName, {force:true});
    }

    changeLastName(lastName) {
        return this.getLastNameInput()
            .click()
            .clear()
            .type(lastName, {force:true});
    }

    saveChanges() {
        return this.getSaveButton().click();
    }

    cancelChanges() {
        return this.getCancelButton().click();
    }

    waitForProfileSuccessfullyUpdatedNotification() {
        return this.getProfileSuccesfullyUpdatedNotification()
            .should('be.visible');
    }

    waitForErrorOnProfileUpdateNotification() {
        return this.getErrorOnProfileUpdateNotification()
            .should('be.visible');
    }

    goBackToProfileInfo() {
        return this.getBackToProfileInfoButton().click();
    }

    waitForRequiredFieldError() {
        return this.getRequiredFieldError()
            .should('be.visible');
    }
}