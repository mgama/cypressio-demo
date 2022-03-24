export class MyAccountPage {
    visit() {
        cy.visit('account');
    }

    getAccountPopOverName() {
        return cy.get('.my-account-popover-name');
    }

    goToProfileInfo() {
        cy.get('text=Profile Info').click();
    //   return new ProfileInfoPage(this.page);
    }

    goToAccountSettings() {
        cy.get('text=Account Settings').click();
    //   return new AccountSettingsPage(this.page);
    }
  }