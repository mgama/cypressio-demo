export class ProfileInfoPage {
  
    getContactDetailsHeader() {
        return cy.get('h4[text=Contact Details]');
    }

    getContactDetailsName() {
        // Brittle locator but was neccesary since there is not a test-id or id to use
        return cy.get('#page-container-desktop > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2)')
    }

    getChildDetailsName() {
        // Another brittle locator but neccesary since there was no test-id or id to use
        return cy.get('#page-container-desktop > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2)')
    }

    goToEditContactDetails() {
        cy.get('button#edit-contact-details').click();
    //   return new EditContactDetailsPage(this.page);
    }
  
    goToEditChildDetails() {
        cy.get('button#child-0-edit').click();
    //   return new EditChildDetailsPage(this.page);
    }
  }