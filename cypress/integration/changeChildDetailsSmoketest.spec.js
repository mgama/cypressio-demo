import { LoginPage } from '../support/pageObjects/LoginPage';
import {MyAccountPage} from '../support/pageobjects/MyAccountPage';
import GenerateRandomData from '../data/GenerateRandomData';

const generateRandomData = new GenerateRandomData();
let profileInfoPage;
let editChildDetailsPage;

// before(() => {
//   new LoginPage().loginUser();
// });

beforeEach(() => {
    // new LoginPage().loginUser();
    const myAccountPage = new MyAccountPage();
    myAccountPage.getAccountPopOverName()
        .should('be.visible')
        .should('not.have.text', '');
    profileInfoPage = myAccountPage.goToProfileInfo();
    profileInfoPage.getChildDetailsName().invoke('text').as('currentChildDetailsName');
    cy.get('@currentChildDetailsName').then((text) => {
        cy.log('the currentChildDetailsName is ' + text);
    })
    editChildDetailsPage = profileInfoPage.goToEditChildDetails();
});

describe('Change Child Details Smoketests', () => {

    it('Change Child Name from Profile Info Page and Cancel Changes smoketest', () => {
        const randomStringForTestData = generateRandomData.generateRandomString();
        editChildDetailsPage.changeName(randomStringForTestData);
        editChildDetailsPage.cancelChanges();
        profileInfoPage.getChildDetailsName()
            .should('be.visible')
            .invoke('text').then((text) => {
                const childDetailsNameAfterCancellingChanges = text;
                cy.log('The childDetailsNameAfterCancellingChanges is ' + childDetailsNameAfterCancellingChanges);
                cy.get('@currentChildDetailsName').then((currentChildDetailsName) => {
                expect(childDetailsNameAfterCancellingChanges).to.equal(currentChildDetailsName);
            })
        });
    });

    it('Change Child Name from Profile Info Page and Save Changes smoketest', () => {
        const randomStringForTestData =  generateRandomData.generateRandomString();
        editChildDetailsPage.changeName(randomStringForTestData);
        editChildDetailsPage.saveChanges();
        editChildDetailsPage.waitForChildInfoSuccesfullyUpdatedNotification();
        editChildDetailsPage.getChildInfoSuccesfullyUpdatedNotification()
            .should('be.visible');
        editChildDetailsPage.goBackToProfileInfo();
        profileInfoPage.getChildDetailsName()
            .should('be.visible')
            .invoke('text').then((text) => {
                const childDetailsNameAfterSavingChanges = text;
                cy.log('The childDetailsNameAfterSavingChanges is ' + childDetailsNameAfterSavingChanges);
                cy.get('@currentChildDetailsName').then((currentChildDetailsName) => {
                expect(childDetailsNameAfterSavingChanges).to.not.equal(currentChildDetailsName);
                expect(childDetailsNameAfterSavingChanges).to.equal(randomStringForTestData);
            })
        });
    });

    it('Negative Test: Change Child Name to Empty from Profile Info Page and Verify Error smoketest', () => {
        // Change the child name to be an empty string
        editChildDetailsPage.getNameInput()
            .clear();
        // Try to save the changes
        editChildDetailsPage.saveChanges();
        // Wait for the 'Required' error label to be displayed on Name field
        editChildDetailsPage.waitForRequiredChildNameError();
        // Verify the changes were not successful and 'Required' error label is still displayed
        editChildDetailsPage.getRequiredChildNameError()
            .should('be.visible');
        editChildDetailsPage.getChildInfoSuccesfullyUpdatedNotification()
            .should('not.be.visible');
         editChildDetailsPage.goBackToProfileInfo();
        // Verify the previous child name still exists on Profile Info Page
        profileInfoPage.getChildDetailsName()
            .should('be.visible')
            .invoke('text').then((text) => {
                const childDetailsNameAfterAttemptedSavedChanges = text;
                cy.log('The childDetailsNameAfterAttemptedSavedChanges is ' + childDetailsNameAfterAttemptedSavedChanges);
                cy.get('@currentChildDetailsName').then((currentChildDetailsName) => {
                expect(childDetailsNameAfterAttemptedSavedChanges).to.equal(currentChildDetailsName);
            })
        });
    });
});
