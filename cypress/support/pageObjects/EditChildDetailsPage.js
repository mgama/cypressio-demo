export class EditChildDetailsPage {
  
    getBackToProfileInfoButton() {
        return cy.get('text=< Back to Profile Info');
    }
    
    getEditChildDetailsHeader() {
        return cy.get('text=Edit Child Details');
    }

    getNameInput() {
        return cy.get('input[name=name]');
    } 

    getSaveButton() {
        return cy.get('text=Save');
    }

    getCancelButton() {
        return cy.get('text=Cancel');
    }

    getErrorOnChildInfoUpdateNotification() {
        return cy.get('text=Error updating child info');
    }

    getChildInfoSuccesfullyUpdatedNotification() {
        return cy.get('text=Child info successfully updated');
    }

    getRequiredChildNameError() {
        return cy.get('text=Required');
    }

    changeName(name) {
        return this.getNameInput()
            .click()
            .type(name, {force:true})
    }

    saveChanges() {
        return this.getSaveButton().click();
    }

    cancelChanges() {
        return this.getCancelButton.click();
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
        return this.getBackToProfileInfoButton.click();
    }

    waitForRequiredChildNameError() {
        return this.getRequiredChildNameError()
            .should('be.visible');
    }  
}