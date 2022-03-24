import { first } from "cypress/types/lodash";

export class EditShippingAddressPage {
    
    getBackToAccountSettingsButton() {
        return cy.get('text=Back to Account Settings');
    }

    getEditShippingAddressHeader() {
        return cy.get('text=Edit Shipping Address');
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
        return cy.get('text=Save');
    }

    getCancelButton() {
        return cy.get('text=Cancel');
    }

    getSuccessfulAddressUpdateNotification() {
        return cy.get('text=Address successfully updated');
    }

    getErrorOnAddressUpdateNotification() {
        return cy.get('text=Error updating address');
    }

    getRequiredFieldErrorMessage() {
        return cy.get('text=Required');
    } 
  
    changeFirstName(firstName) {
        return this.changeFirstName()
            .click()
            .type(firstName, {force:true});
    }
  
    changeLastName(lastName) {
        return this.getLastNameInput()
            .click()
            .type(lastName, {force:true});
    }
  
    changeCompany(company) {
        return cy.getCompanyInput()
            .click()
            .type(company, {force:true});
    }
  
    changeStreetAddress(streetAddress) {
        return cy.getStreetAddressInput()
            .click()
            .type(streetAddress, {force:true});
    }
  
    changeApt(apt) {
        return cy.getAptInput()
            .click()
            .type(apt, {force:true});
    }
  
    changeCity(city) {
        return cy.getCityInput()
            .click()
            .type(city, {force:true});
    }
  
    selectCountry(country) {
        return cy.getCountryDropdown()
            .select(country);
    }
  
    selectState(state) {
        return cy.getStateDropdown()
            .select(state);
    }
  
    changeZipCode(zipCode) {
        return cy.getZipCodeInput()
            .click()
            .type(zipCode, {force:true});
    }
  
    changePhoneNumber(phoneNumber) {
        return cy.getPhoneNumberInput()
            .click()
            .type(phoneNumber, {force:true});
    }
  
    saveChanges() {
        return cy.getSaveButton().click();
    }
  
    cancelChanges() {
        return cy.getCancelButton().click();
    }
  
    waitForSuccessfulAddressUpdateNotification() {
        return cy.getSuccessfulAddressUpdateNotification()
            .should('be.visible');
    }
  
    waitForErrorOnAddressUpdateNotification() {
        return cy.getErrorOnAddressUpdateNotification()
            .should('be.visible');
    }
  
    goBackToAccountSettings() {
        return cy.getBackToAccountSettingsButton().click();
    }
  
    waitForRequiredFieldErrorMessage() {
        return cy.getRequiredFieldErrorMessage()
            .should('be.visible');
    }
  }