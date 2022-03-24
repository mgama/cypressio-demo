export class EditChildDetailsPage {
  
    getBackToProfileInfoButton() {
        return cy.contains('< Back to Profile Info');
    }
    
    getEditChildDetailsHeader() {
        return cy.contains('Edit Child Details');
    }

    getNameInput() {
        return cy.get('input[name=name]');
    } 

    getSaveButton() {
        return cy.contains('Save');
    }

    getCancelButton() {
        return cy.contains('Cancel');
    }

    getErrorOnChildInfoUpdateNotification() {
        return cy.contains('Error updating child info');
    }

    getChildInfoSuccesfullyUpdatedNotification() {
        return cy.contains('Child info successfully updated');
    }

    getRequiredChildNameError() {
        return cy.contains('Required');
    }

    changeName(name) {
        return this.getNameInput()
            .click()
            .clear()
            .type(name, {force:true})
    }

    saveChanges() {
        return this.getSaveButton().click();
    }

    cancelChanges() {
        return this.getCancelButton().click();
    }

    waitForChildInfoSuccesfullyUpdatedNotification() {
        return this.getChildInfoSuccesfullyUpdatedNotification()
            .should('be.visible');
    }

    waitForErrorOnChildInfoUpdateNotification() {
        return this.getErrorOnChildInfoUpdateNotification()
            .should('be.visible');
    }

    goBackToProfileInfo() {
        return this.getBackToProfileInfoButton().click();
    }

    waitForRequiredChildNameError() {
        return this.getRequiredChildNameError()
            .should('be.visible');
    }  
}