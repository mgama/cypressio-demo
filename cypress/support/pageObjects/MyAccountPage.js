import { ProfileInfoPage } from './ProfileInfoPage';
import { AccountSettingsPage } from './AccountSettingsPage';

export class MyAccountPage {
    visit() {
        cy.visit('account');
    }

    getAccountPopOverName() {
        return cy.get('.my-account-popover-name');
    }

    goToProfileInfo() {
        cy.contains('Profile Info').click();
        return new ProfileInfoPage();
    }

    goToAccountSettings() {
        cy.contains('Account Settings').click();
        return new AccountSettingsPage();
    }
  }