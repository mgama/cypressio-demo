export class EditShippingAddressPage {
    
    getBackToAccountSettingsButton() {
        return cy.contains('Back to Account Settings');
    }

    getEditShippingAddressHeader() {
        return cy.contains('Edit Shipping Address');
    }

    getFirstNameInput() {
        return cy.get('input[name=first_name]');
    }

    getLastNameInput() {
        return cy.get('input[name=last_name]');
    }

    getCompanyInput() {
        return cy.get('input[name=company]');
    }

    getStreetAddressInput() {
        return cy.get("input[placeholder='Street Address']");
    }

    getAptInput() {
        return cy.get("input[placeholder='Apt, Suite, or Floor']");
    }
    
    getCityInput() {
        return cy.get('input[name=city]');
    }
    
    getCountryDropdown() {
        return cy.get('select[name=country]');
    }
    
    getStateDropdown() {
        return cy.get('select[name=state]');
    }
    
    getZipCodeInput() {
        return cy.get('input[name=zip_code]');
    }
    
    getPhoneNumberInput() {
        return cy.get('input[name=phone_number]');
    }
    
    getSaveButton() {
        return cy.contains('Save');
    }

    getCancelButton() {
        return cy.contains('Cancel');
    }

    getSuccessfulAddressUpdateNotification() {
        return cy.contains('Address successfully updated');
    }

    getErrorOnAddressUpdateNotification() {
        return cy.contains('Error updating address');
    }

    getRequiredFieldErrorMessage() {
        return cy.contains('Required');
    } 
  
    changeFirstName(firstName) {
        return this.changeFirstName()
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
  
    changeCompany(company) {
        return this.getCompanyInput()
            .click()
            .clear()
            .type(company, {force:true});
    }
  
    changeStreetAddress(streetAddress) {
        return this.getStreetAddressInput()
            .click()
            .clear()
            .type(streetAddress, {force:true});
    }
  
    changeApt(apt) {
        return this.getAptInput()
            .click()
            .clear()
            .type(apt, {force:true});
    }
  
    changeCity(city) {
        return this.getCityInput()
            .click()
            .clear()
            .type(city, {force:true});
    }
  
    selectCountry(country) {
        return this.getCountryDropdown()
            .select(country);
    }
  
    selectState(state) {
        return this.getStateDropdown()
            .select(state);
    }
  
    changeZipCode(zipCode) {
        return this.getZipCodeInput()
            .click()
            .clear()
            .type(zipCode, {force:true});
    }
  
    changePhoneNumber(phoneNumber) {
        return this.getPhoneNumberInput()
            .click()
            .clear()
            .type(phoneNumber, {force:true});
    }
  
    saveChanges() {
        return this.getSaveButton().click();
    }
  
    cancelChanges() {
        return this.getCancelButton().click();
    }
  
    waitForSuccessfulAddressUpdateNotification() {
        return this.getSuccessfulAddressUpdateNotification()
            .should('be.visible');
    }
  
    waitForErrorOnAddressUpdateNotification() {
        return this.getErrorOnAddressUpdateNotification()
            .should('be.visible');
    }
  
    goBackToAccountSettings() {
        return this.getBackToAccountSettingsButton().click();
    }
  
    waitForRequiredFieldErrorMessage() {
        return this.getRequiredFieldErrorMessage()
            .should('be.visible');
    }
  }