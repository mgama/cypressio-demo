import { LoginPage } from '../support/pageObjects/LoginPage';
import {MyAccountPage} from '../support/pageobjects/MyAccountPage';
import GenerateRandomData from '../data/GenerateRandomData';

describe('Change Contact Details Smoketests', () => {
  const generateRandomData = new GenerateRandomData();
  let profileInfoPage;
  let currentContactDetailsName = '';
  let editContactDetailsPage;
  
  before(() => {
      const loginPage = new LoginPage();
      loginPage.loginUser();
      const myAccountPage = new MyAccountPage();
      // myAccountPage.visit();
      myAccountPage.getAccountPopOverName().should('not.have.text', '');
      profileInfoPage = myAccountPage.goToProfileInfo();
      currentContactDetailsName = profileInfoPage.getContactDetailsName().innerText;
      editContactDetailsPage = profileInfoPage.goToEditContactDetails();
  });

  it('Negative Test: Change User First Name from Profile Info Page and Cancel Changes smoketest', () => {
      const randomStringForTestData = generateRandomData.generateRandomString();
      editContactDetailsPage.changeFirstName(randomStringForTestData);
      // editContactDetailsPage.getFirstNameInput().should('have.text', randomStringForTestData);
      editContactDetailsPage.cancelChanges();
      const contactDetailsNameAfterCancellingChanges = profileInfoPage.getContactDetailsName().innerText;
      expect(contactDetailsNameAfterCancellingChanges).to.equal(currentContactDetailsName);
  });

  /*
  it('Change User First Name from Profile Info Page and Save Changes smoketest', () => {
      const randomStringForTestData = await generateRandomData.generateRandomString();
      await editContactDetailsPage.changeFirstName(randomStringForTestData);
      await expect(editContactDetailsPage.firstNameInput).toHaveValue(randomStringForTestData);
      await editContactDetailsPage.saveChanges();
      await editContactDetailsPage.waitForSuccessfulProfileUpdateNotification();
      await editContactDetailsPage.goBackToProfileInfo();
      const contactDetailsNameAfterSavingChanges = await profileInfoPage.contactDetailsName.innerText();
      expect(contactDetailsNameAfterSavingChanges).toContain(randomStringForTestData);
      expect(contactDetailsNameAfterSavingChanges).not.toMatch(currentContactDetailsName);
  });

  it(`Negative Test: Change User First Name to empty value from Profile Info Page 
  and Verify error on Required field smoketest`, () => {
    await editContactDetailsPage.changeFirstName('');
    await expect(editContactDetailsPage.firstNameInput).toHaveValue('');
    await editContactDetailsPage.saveChanges();
    await editContactDetailsPage.waitForRequiredFieldError();
    await expect(editContactDetailsPage.requiredFieldError).toBeVisible();
    await expect(editContactDetailsPage.firstNameInput).toHaveValue('');
    await editContactDetailsPage.goBackToProfileInfo();
    const contactDetailsNameAfterAttemptedFirstNameChanges = await profileInfoPage.contactDetailsName.innerText();
    expect(contactDetailsNameAfterAttemptedFirstNameChanges).toMatch(currentContactDetailsName);
  });

  // Currently failing since there is a bug. Last Name is not a required field
  // on the Edit Contact Details Page
  it(`Negative Test: Change User Last Name to empty value from Profile Info Page 
  and Verify error on Required field smoketest`, () => {
    await editContactDetailsPage.changeLastName('');
    await expect(editContactDetailsPage.lastNameInput).toHaveValue('');
    await editContactDetailsPage.saveChanges();
    await editContactDetailsPage.waitForRequiredFieldError();
    await expect(editContactDetailsPage.requiredFieldError).toBeVisible();
    await expect(editContactDetailsPage.firstNameInput).toHaveValue('');
    await editContactDetailsPage.goBackToProfileInfo();
    const contactDetailsNameAfterAttemptedLastNameChanges = await profileInfoPage.contactDetailsName.innerText();
    expect(contactDetailsNameAfterAttemptedLastNameChanges).toMatch(currentContactDetailsName);
  });

  it('Negative Test: Change User Last Name from Profile Info Page and Cancel Changes smoketest', () => {
    const randomStringForTestData = await generateRandomData.generateRandomString();
    await editContactDetailsPage.changeLastName(randomStringForTestData);
    await expect(editContactDetailsPage.lastNameInput).toHaveValue(randomStringForTestData);
    await editContactDetailsPage.cancelChanges();
    const contactDetailsNameAfterCancellingChanges = await profileInfoPage.contactDetailsName.innerText();
    expect(contactDetailsNameAfterCancellingChanges).toMatch(currentContactDetailsName);
  });

  it('Change User Last Name from Profile Info Page and Save Changes smoketest', () => {
    const randomStringForTestData = await generateRandomData.generateRandomString();
    await editContactDetailsPage.changeLastName(randomStringForTestData);
    await expect(editContactDetailsPage.lastNameInput).toHaveValue(randomStringForTestData);
    await editContactDetailsPage.saveChanges();
    await editContactDetailsPage.waitForSuccessfulProfileUpdateNotification();
    await editContactDetailsPage.goBackToProfileInfo();
    const contactDetailsNameAfterSavingChanges = await profileInfoPage.contactDetailsName.innerText();
    expect(contactDetailsNameAfterSavingChanges).toContain(randomStringForTestData);
  });

  it('Change User First and Last Name from Profile Info Page and Save Changes smoketest', () => {
    const randomStringForTestData = await generateRandomData.generateRandomString();
    await editContactDetailsPage.changeFirstName(randomStringForTestData);
    await expect(editContactDetailsPage.firstNameInput).toHaveValue(randomStringForTestData);
    const secondRandomStringForTestData = await generateRandomData.generateRandomString();
    await editContactDetailsPage.changeLastName(secondRandomStringForTestData);
    await expect(editContactDetailsPage.lastNameInput).toHaveValue(secondRandomStringForTestData);
    await editContactDetailsPage.saveChanges();
    await editContactDetailsPage.waitForSuccessfulProfileUpdateNotification();
    await editContactDetailsPage.goBackToProfileInfo();
    const contactDetailsNameAfterSavingChanges = await profileInfoPage.contactDetailsName.innerText();
    expect(contactDetailsNameAfterSavingChanges).toContain(randomStringForTestData);
    expect(contactDetailsNameAfterSavingChanges).toContain(secondRandomStringForTestData);
    expect(contactDetailsNameAfterSavingChanges).not.toMatch(currentContactDetailsName);
  });

  it('Negative Test: Change User First and Last Name from Profile Info Page and Cancel Changes smoketest', () => {
    const randomStringForTestData = await generateRandomData.generateRandomString();
    await editContactDetailsPage.changeFirstName(randomStringForTestData);
    await expect(editContactDetailsPage.firstNameInput).toHaveValue(randomStringForTestData);
    const secondRandomStringForTestData = await generateRandomData.generateRandomString();
    await editContactDetailsPage.changeLastName(secondRandomStringForTestData);
    await expect(editContactDetailsPage.lastNameInput).toHaveValue(secondRandomStringForTestData);
    await editContactDetailsPage.cancelChanges();
    const contactDetailsNameAfterCancellingChanges = await profileInfoPage.contactDetailsName.innerText();
    expect(contactDetailsNameAfterCancellingChanges).toMatch(currentContactDetailsName);
  });
  */
});