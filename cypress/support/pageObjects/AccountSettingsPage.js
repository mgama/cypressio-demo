import { EditShippingAddressPage } from "./EditShippingAddressPage";

export class AccountSettingsPage {
     
    getDisplayedAddress() {
        return cy.get('div.global-address-display');
    }

    getEditAddressBookButton() {
        return cy.get('button#edit-address-0');
    }
  
    goToEditAddressBook() {
        this.getEditAddressBookButton().click();
        return new EditShippingAddressPage();
    }
 }