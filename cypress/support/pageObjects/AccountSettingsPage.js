export class AccountSettingsPage {
     
    getDisplayedAddress() {
        return cy.get('div.global-address-display');
    }

    getEditAddressBookButton() {
        return cy.get('button#edit-address-0');
    }
  
    goToEditAddressBook() {
      return this.getEditAddressBookButton.click();
    }
 }