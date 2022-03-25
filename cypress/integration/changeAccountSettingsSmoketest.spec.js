import { LoginPage } from '../support/pageObjects/LoginPage';
import {MyAccountPage} from '../support/pageobjects/MyAccountPage';
import GenerateRandomData from '../data/GenerateRandomData';

const generateRandomData = new GenerateRandomData();
let accountSettingsPage;
let editShippingAddressPage;

beforeEach(() => {
  const myAccountPage = new MyAccountPage();
  myAccountPage.getAccountPopOverName()
    .should('be.visible')
    .should('not.have.text', '');
  accountSettingsPage = myAccountPage.goToAccountSettings();
  accountSettingsPage.getDisplayedAddress()
    .should('be.visible')
    .invoke('text').as('originalAddress');
  cy.get('@originalAddress').then((text) => {
    cy.log('the originalAddress is ' + text);
  })
  editShippingAddressPage = accountSettingsPage.goToEditAddressBook();
});

describe('Change Account Settings Smoketests', () => {

    it('Negative Test: Change All Address Values (valid US Address) on Account Settings and Cancel Changes', () => {
        const randomStringForTestData = generateRandomData.generateRandomString();
        editShippingAddressPage.getFirstNameInput()
            .should('be.visible')
            .should('be.enabled');
        editShippingAddressPage.changeFirstName(randomStringForTestData);
        editShippingAddressPage.changeLastName(randomStringForTestData);
        editShippingAddressPage.changeCompany(randomStringForTestData);
        editShippingAddressPage.changeStreetAddress(randomStringForTestData);
        editShippingAddressPage.changeApt(randomStringForTestData);
        editShippingAddressPage.changeCity(randomStringForTestData);
        editShippingAddressPage.selectCountry('United States');
        editShippingAddressPage.selectState('Massachusetts');
        editShippingAddressPage.changeZipCode('02131');
        editShippingAddressPage.changePhoneNumber('6175552340');
        editShippingAddressPage.cancelChanges();
        // Verify the original address on the Account Settings Page is still in place since the changes were cancelled
        accountSettingsPage.getDisplayedAddress()
            .should('be.visible')
            .invoke('text').then((text) => {
                const displayedAddressAfterCancellingChanges = text;
                cy.log('The displayedAddressAfterCancellingChanges is ' + displayedAddressAfterCancellingChanges);
                cy.get('@originalAddress').then((originalAddress) => {
                expect(displayedAddressAfterCancellingChanges).to.equal(originalAddress);
            });
        });
    });

    it('Change All Address Values (valid US Address) on Account Settings and Save Changes', () => {
        const randomStringForTestData =  generateRandomData.generateRandomString();
        editShippingAddressPage.getFirstNameInput()
            .should('be.visible')
            .should('be.enabled');
        editShippingAddressPage.changeFirstName(randomStringForTestData);
        editShippingAddressPage.changeLastName(randomStringForTestData);
        editShippingAddressPage.changeCompany(randomStringForTestData);
        editShippingAddressPage.changeStreetAddress(randomStringForTestData);
        editShippingAddressPage.changeApt(randomStringForTestData);
        editShippingAddressPage.changeCity(randomStringForTestData);
        editShippingAddressPage.selectCountry('United States');
        editShippingAddressPage.selectState('Massachusetts');
        editShippingAddressPage.changeZipCode('02131');
        editShippingAddressPage.changePhoneNumber('6175552340');
        editShippingAddressPage.saveChanges();
        editShippingAddressPage.waitForSuccessfulAddressUpdateNotification();
        editShippingAddressPage.goBackToAccountSettings();
        // Verify the displayed address on the Account Settings Page has been updated to the changes done on this test
        accountSettingsPage.getDisplayedAddress()
            .should('be.visible')
            .invoke('text').then((text) => {
                const displayedAddressAfterSavingChanges = text;
                cy.log('The displayedAddressAfterSavingChanges is ' + displayedAddressAfterSavingChanges);
                cy.get('@originalAddress').then((originalAddress) => {
                expect(displayedAddressAfterSavingChanges).to.not.equal(originalAddress);
            });
        });
    });

    it('Change All Address Values (valid Canada Address) on Account Settings and Save Changes', () => {
        const randomStringForTestData =  generateRandomData.generateRandomString();
        editShippingAddressPage.getFirstNameInput()
            .should('be.visible')
            .should('be.enabled');
        editShippingAddressPage.changeFirstName(randomStringForTestData);
        editShippingAddressPage.changeLastName(randomStringForTestData);
        editShippingAddressPage.changeCompany(randomStringForTestData);
        editShippingAddressPage.changeStreetAddress(randomStringForTestData);
        editShippingAddressPage.changeApt(randomStringForTestData);
        editShippingAddressPage.changeCity(randomStringForTestData);
        editShippingAddressPage.selectCountry('Canada');
        editShippingAddressPage.selectState('Alberta');
        editShippingAddressPage.changeZipCode('T2P 1J9');
        editShippingAddressPage.changePhoneNumber('6175552340');
        editShippingAddressPage.saveChanges();
        editShippingAddressPage.waitForSuccessfulAddressUpdateNotification();
        editShippingAddressPage.goBackToAccountSettings();
        // Verify the displayed address on the Account Settings Page has been updated to the changes done on this test
        accountSettingsPage.getDisplayedAddress()
            .should('be.visible')
            .invoke('text').then((text) => {
                const displayedAddressAfterSavingChanges = text;
                cy.log('The displayedAddressAfterSavingChanges is ' + displayedAddressAfterSavingChanges);
                cy.get('@originalAddress').then((originalAddress) => {
                expect(displayedAddressAfterSavingChanges).to.not.equal(originalAddress);
            });
        });
    });

    it('Negative Test: Change Zip Code to empty value on Account Settings and Verify Error on Required field', () => {
        editShippingAddressPage.getZipCodeInput()
            .should('be.visible')
            .should('be.enabled')
            .clear();
        editShippingAddressPage.saveChanges();
        editShippingAddressPage.waitForRequiredFieldErrorMessage();
        editShippingAddressPage.getRequiredFieldErrorMessage()
        .should('be.visible');
        editShippingAddressPage.goBackToAccountSettings();
        // Verify the displayed address on the Account Settings Page has not been updated to the zip code changes tried on this test
        accountSettingsPage.getDisplayedAddress()
            .should('be.visible')
            .invoke('text').then((text) => {
                const displayedAddressAfterAttemptedZipCodeChanges = text;
                cy.log('The displayedAddressAfterAttemptedZipCodeChanges is ' + displayedAddressAfterAttemptedZipCodeChanges);
                cy.get('@originalAddress').then((originalAddress) => {
                expect(displayedAddressAfterAttemptedZipCodeChanges).to.equal(originalAddress);
            });
        });
    });

    it('Negative Test: Change First Name to empty value on Account Settings and Verify Error on Required field', () => {
        editShippingAddressPage.getFirstNameInput()
            .should('be.visible')
            .should('be.enabled')
            .clear();
        editShippingAddressPage.saveChanges();
        editShippingAddressPage.waitForRequiredFieldErrorMessage();
        editShippingAddressPage.getRequiredFieldErrorMessage()
        .should('be.visible');
        editShippingAddressPage.goBackToAccountSettings();
        // Verify the displayed address on the Account Settings Page has not been updated to the first name changes tried on this test
        accountSettingsPage.getDisplayedAddress()
            .should('be.visible')
            .invoke('text').then((text) => {
                const displayedAddressAfterAttemptedFirstNameChanges = text;
                cy.log('The displayedAddressAfterAttemptedZipCodeChanges is ' + displayedAddressAfterAttemptedFirstNameChanges);
                cy.get('@originalAddress').then((originalAddress) => {
                expect(displayedAddressAfterAttemptedFirstNameChanges).to.equal(originalAddress);
            });
        });
    });

    it('Negative Test: Change Last Name to empty value on Account Settings and Verify Error on Required field', () => {
        editShippingAddressPage.getLastNameInput()
            .should('be.visible')
            .should('be.enabled')
            .clear();
        editShippingAddressPage.saveChanges();
        editShippingAddressPage.waitForRequiredFieldErrorMessage();
        editShippingAddressPage.getRequiredFieldErrorMessage()
        .should('be.visible');
        editShippingAddressPage.goBackToAccountSettings();
        // Verify the displayed address on the Account Settings Page has not been updated to the last name changes tried on this test
        accountSettingsPage.getDisplayedAddress()
            .should('be.visible')
            .invoke('text').then((text) => {
                const displayedAddressAfterAttemptedLastNameChanges = text;
                cy.log('The displayedAddressAfterAttemptedLastNameChanges is ' + displayedAddressAfterAttemptedLastNameChanges);
                cy.get('@originalAddress').then((originalAddress) => {
                expect(displayedAddressAfterAttemptedLastNameChanges).to.equal(originalAddress);
            });
        });
    });

    it('Negative Test: Change Street Address to empty value on Account Settings and Verify Error on Required field', () => {
        editShippingAddressPage.getStreetAddressInput()
            .should('be.visible')
            .should('be.enabled')
            .clear();
        editShippingAddressPage.saveChanges();
        editShippingAddressPage.waitForRequiredFieldErrorMessage();
        editShippingAddressPage.getRequiredFieldErrorMessage()
        .should('be.visible');
        editShippingAddressPage.goBackToAccountSettings();
        // Verify the displayed address on the Account Settings Page has not been updated to the Street Address changes tried on this test
        accountSettingsPage.getDisplayedAddress()
            .should('be.visible')
            .invoke('text').then((text) => {
                const displayedAddressAfterAttemptedStreetAddressChanges = text;
                cy.log('The displayedAddressAfterAttemptedStreetAddressChanges is ' + displayedAddressAfterAttemptedStreetAddressChanges);
                cy.get('@originalAddress').then((originalAddress) => {
                expect(displayedAddressAfterAttemptedStreetAddressChanges).to.equal(originalAddress);
            });
        });
    });

    it('Negative Test: Change City to empty value on Account Settings and Verify Error on Required field', () => {
        editShippingAddressPage.getCityInput()
            .should('be.visible')
            .should('be.enabled')
            .clear();
        editShippingAddressPage.saveChanges();
        editShippingAddressPage.waitForRequiredFieldErrorMessage();
        editShippingAddressPage.getRequiredFieldErrorMessage()
        .should('be.visible');
        editShippingAddressPage.goBackToAccountSettings();
        // Verify the displayed address on the Account Settings Page has not been updated to the City changes tried on this test
        accountSettingsPage.getDisplayedAddress()
            .should('be.visible')
            .invoke('text').then((text) => {
                const displayedAddressAfterAttemptedCityChanges = text;
                cy.log('The displayedAddressAfterAttemptedCityChanges is ' + displayedAddressAfterAttemptedCityChanges);
                cy.get('@originalAddress').then((originalAddress) => {
                expect(displayedAddressAfterAttemptedCityChanges).to.equal(originalAddress);
            });
        });
    });

});