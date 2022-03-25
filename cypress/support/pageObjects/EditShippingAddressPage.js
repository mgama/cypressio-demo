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
        return cy.get("input[name='line2']");
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
        this.getFirstNameInput()
            .click()
            .clear()
            .type(firstName, {force:true});
    }
  
    changeLastName(lastName) {
        this.getLastNameInput()
            .click()
            .clear()
            .type(lastName, {force:true});
    }
  
    changeCompany(company) {
        this.getCompanyInput()
            .click()
            .clear()
            .type(company, {force:true});
    }
  
    changeStreetAddress(streetAddress) {
        this.getStreetAddressInput()
            .click()
            .clear()
            .type(streetAddress, {force:true});
    }
  
    changeApt(apt) {
        this.getAptInput()
            .click()
            .clear()
            .type(apt, {force:true});
    }
  
    changeCity(city) {
        this.getCityInput()
            .click()
            .clear()
            .type(city, {force:true});
    }
  
    selectCountry(country) {
        this.getCountryDropdown()
            .select(country);
    }
  
    selectState(state) {
        this.getStateDropdown()
            .select(state);
    }
  
    changeZipCode(zipCode) {
        this.getZipCodeInput()
            .click()
            .clear()
            .type(zipCode, {force:true});
    }
  
    changePhoneNumber(phoneNumber) {
        this.getPhoneNumberInput()
            .click()
            .clear()
            .type(phoneNumber, {force:true});
    }
  
    saveChanges() {
        this.getSaveButton().click();
    }
  
    cancelChanges() {
        this.getCancelButton().click();
    }
  
    waitForSuccessfulAddressUpdateNotification() {
        this.getSuccessfulAddressUpdateNotification()
            .should('be.visible');
    }
  
    waitForErrorOnAddressUpdateNotification() {
        this.getErrorOnAddressUpdateNotification()
            .should('be.visible');
    }
  
    goBackToAccountSettings() {
        this.getBackToAccountSettingsButton().click();
    }
  
    waitForRequiredFieldErrorMessage() {
        this.getRequiredFieldErrorMessage()
            .should('be.visible');
    }
  }