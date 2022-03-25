import { LoginPage } from '../support/pageObjects/LoginPage';
import {MyAccountPage} from '../support/pageobjects/MyAccountPage';
import GenerateRandomData from '../data/GenerateRandomData';

const generateRandomData = new GenerateRandomData();
let profileInfoPage;
let editContactDetailsPage;

beforeEach(() => {
  const myAccountPage = new MyAccountPage();
  myAccountPage.getAccountPopOverName()
    .should('be.visible')
    .should('not.have.text', '');
  profileInfoPage = myAccountPage.goToProfileInfo();
  // Example of storing text value as a variable
  // https://stackoverflow.com/questions/70743343/get-text-from-an-element-and-store-in-a-variable-in-cypress
  profileInfoPage.getContactDetailsName()
    .should('be.visible')  
    .invoke('text').as('currentContactDetailsName');
  cy.get('@currentContactDetailsName').then((text) => {
    cy.log('the currentContactDetailsName is ' + text);
  })
  editContactDetailsPage = profileInfoPage.goToEditContactDetails();
});

describe('Change Contact Details Smoketests', () => {

  it('Negative Test: Change User First Name from Profile Info Page and Cancel Changes smoketest', () => {
      const randomStringForTestData = generateRandomData.generateRandomString();
      editContactDetailsPage.changeFirstName(randomStringForTestData);
      editContactDetailsPage.cancelChanges();
      editContactDetailsPage.getFirstNameInput()
        .should('not.exist');
      profileInfoPage.getContactDetailsName()
        .should('be.visible')
        .invoke('text').then((text) => {
          const contactDetailsNameAfterCancellingChanges = text;
          cy.log('The contactDetailsNameAfterCancellingChanges is ' + contactDetailsNameAfterCancellingChanges);
          cy.get('@currentContactDetailsName').then((currentContactDetailsName) => {
          expect(contactDetailsNameAfterCancellingChanges).to.equal(currentContactDetailsName);
        })
      });
  });

  it('Change User First Name from Profile Info Page and Save Changes smoketest', () => {
    const randomStringForTestData = generateRandomData.generateRandomString();
    editContactDetailsPage.changeFirstName(randomStringForTestData);
    editContactDetailsPage.saveChanges();
    editContactDetailsPage.waitForProfileSuccessfullyUpdatedNotification();
    editContactDetailsPage.getProfileSuccesfullyUpdatedNotification()
      .should('be.visible');
    editContactDetailsPage.goBackToProfileInfo();
    profileInfoPage.getContactDetailsName()
      .should('be.visible')
      .invoke('text').then((text) => {
        const contactDetailsNameAfterSavingChanges = text;
        cy.log('The contactDetailsNameAfterCancellingChanges is ' + contactDetailsNameAfterSavingChanges);
        cy.get('@currentContactDetailsName').then((currentContactDetailsName) => {
        expect(contactDetailsNameAfterSavingChanges).to.not.equal(currentContactDetailsName);
        expect(contactDetailsNameAfterSavingChanges).to.include(randomStringForTestData);
      })
    });
  });

  it(`Negative Test: Change User First Name to empty value from Profile Info Page 
  and Verify error on Required field smoketest`, () => {
    editContactDetailsPage.getFirstNameInput().clear();
    editContactDetailsPage.saveChanges();
    editContactDetailsPage.waitForRequiredFieldError();
    editContactDetailsPage.getRequiredFieldError()
      .should('be.visible');
    editContactDetailsPage.getFirstNameInput()
      .should('have.text', '');
    editContactDetailsPage.goBackToProfileInfo();
    profileInfoPage.getContactDetailsName()
      .should('be.visible')
      .invoke('text').then((text) => {
      const contactDetailsNameAfterAttemptedFirstNameChanges = text;
      cy.log('The contactDetailsNameAfterAttemptedFirstNameChanges is ' + contactDetailsNameAfterAttemptedFirstNameChanges);
      cy.get('@currentContactDetailsName').then((currentContactDetailsName) => {
        expect(contactDetailsNameAfterAttemptedFirstNameChanges).to.equal(currentContactDetailsName);
      });
    });
  });

  // Currently failing since there is a bug. Last Name is not a required field
  // on the Edit Contact Details Page
  it(`Negative Test: Change User Last Name to empty value from Profile Info Page 
  and Verify error on Required field smoketest`, () => {
    editContactDetailsPage.getLastNameInput().clear();
    editContactDetailsPage.saveChanges();
    editContactDetailsPage.waitForRequiredFieldError();
    editContactDetailsPage.getRequiredFieldError()
      .should('be.visible');
    editContactDetailsPage.getLastNameInput()
      .should('have.text', '');
    editContactDetailsPage.goBackToProfileInfo();
    profileInfoPage.getContactDetailsName()
      .should('be.visible')
      .invoke('text').then((text) => {
        const contactDetailsNameAfterAttemptedLastNameChanges = text;
        cy.log('The contactDetailsNameAfterAttemptedLastNameChanges is ' + contactDetailsNameAfterAttemptedLastNameChanges);
        cy.get('@currentContactDetailsName').then((currentContactDetailsName) => {
        expect(contactDetailsNameAfterAttemptedLastNameChanges).to.equal(currentContactDetailsName);
      });
    });
  });

  it('Negative Test: Change User Last Name from Profile Info Page and Cancel Changes smoketest', () => {
    const randomStringForTestData =  generateRandomData.generateRandomString();
    editContactDetailsPage.changeLastName(randomStringForTestData);
    editContactDetailsPage.cancelChanges();
    profileInfoPage.getContactDetailsName()
      .should('be.visible')
      .invoke('text').then((text) => {
        const contactDetailsNameAfterCancellingChanges = text;
        cy.log('The contactDetailsNameAfterCancellingChanges is ' + contactDetailsNameAfterCancellingChanges);
        cy.get('@currentContactDetailsName').then((currentContactDetailsName) => {
          expect(contactDetailsNameAfterCancellingChanges).to.equal(currentContactDetailsName);
      });
    });
  });

  it('Change User Last Name from Profile Info Page and Save Changes smoketest', () => {
    const randomStringForTestData = generateRandomData.generateRandomString();
    editContactDetailsPage.changeLastName(randomStringForTestData);
    editContactDetailsPage.saveChanges();
    editContactDetailsPage.waitForProfileSuccessfullyUpdatedNotification();
    editContactDetailsPage.getProfileSuccesfullyUpdatedNotification()
      .should('be.visible');
    editContactDetailsPage.goBackToProfileInfo();
    profileInfoPage.getContactDetailsName()
      .should('be.visible')
      .invoke('text').then((text) => {
        const contactDetailsNameAfterSavingChanges = text;
        cy.log('The contactDetailsNameAfterSavingChanges is ' + contactDetailsNameAfterSavingChanges);
        cy.get('@currentContactDetailsName').then((currentContactDetailsName) => {
          expect(contactDetailsNameAfterSavingChanges).to.include(randomStringForTestData);
          expect(contactDetailsNameAfterSavingChanges).to.not.equal(currentContactDetailsName);
      });
    });
  });

  it('Change User First and Last Name from Profile Info Page and Save Changes smoketest', () => {
    const randomStringForTestData = generateRandomData.generateRandomString();
    editContactDetailsPage.changeFirstName(randomStringForTestData);
    const secondRandomStringForTestData =  generateRandomData.generateRandomString();
    editContactDetailsPage.changeLastName(secondRandomStringForTestData);
    editContactDetailsPage.saveChanges();
    editContactDetailsPage.waitForProfileSuccessfullyUpdatedNotification();
    editContactDetailsPage.getProfileSuccesfullyUpdatedNotification()
      .should('be.visible');
    editContactDetailsPage.goBackToProfileInfo();
    profileInfoPage.getContactDetailsName()
      .should('be.visible')
      .invoke('text').then((text) => {
        const contactDetailsNameAfterSavingChanges = text;
        cy.log('The contactDetailsNameAfterSavingChanges is ' + contactDetailsNameAfterSavingChanges);
        cy.get('@currentContactDetailsName').then((currentContactDetailsName) => {
          expect(contactDetailsNameAfterSavingChanges).to.include(randomStringForTestData);
          expect(contactDetailsNameAfterSavingChanges).to.include(secondRandomStringForTestData);
          expect(contactDetailsNameAfterSavingChanges).to.not.equal(currentContactDetailsName);
      });
    });
  });

  it('Negative Test: Change User First and Last Name from Profile Info Page and Cancel Changes smoketest', () => {
    const randomStringForTestData = generateRandomData.generateRandomString();
    editContactDetailsPage.changeFirstName(randomStringForTestData);
    const secondRandomStringForTestData =  generateRandomData.generateRandomString();
    editContactDetailsPage.changeLastName(secondRandomStringForTestData);
    editContactDetailsPage.cancelChanges();
    profileInfoPage.getContactDetailsName()
      .should('be.visible')
      .invoke('text').then((text) => {
        const contactDetailsNameAfterCancellingChanges = text;
        cy.log('The contactDetailsNameAfterCancellingChanges is ' + contactDetailsNameAfterCancellingChanges);
        cy.get('@currentContactDetailsName').then((currentContactDetailsName) => {
          expect(contactDetailsNameAfterCancellingChanges).to.equal(currentContactDetailsName);
      });
    });
  });

});