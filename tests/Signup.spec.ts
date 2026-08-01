import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { SignupPage } from '../Pages/SignupPage';
import signupData from '../Fixtures/SignupData.json';

interface TestUser {
    name: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    mobileNumber: string;
}

interface FixedSignupData {
    title: string;
    day: string;
    month: string;
    year: string;
    country: string;
}

test('Signup', async ({ page }) => {
    const signupPage = new SignupPage(page);

    const testUser: TestUser = {
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password({ length: 8 }),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        mobileNumber: faker.phone.number()
    };

    const fixedData: FixedSignupData = signupData.validuser;

    // Go to Signup page
    await signupPage.goto();
    await expect(page.getByText('New User Signup!')).toBeVisible();

    // Initial signup form
    await signupPage.enterName(testUser.name);
    await signupPage.enterEmail(testUser.email);
    await signupPage.submit();

    // Account Information page
    await expect(page.getByText('Enter Account Information')).toBeVisible();
    await signupPage.selectTitle(fixedData.title);
    await expect(signupPage.titleMrsRadio).toBeChecked();

    await expect(signupPage.accountInfoName).toHaveValue(testUser.name);
    await expect(signupPage.accountInfoEmail).toHaveValue(testUser.email);

    await signupPage.enterPass(testUser.password);
    await signupPage.selectDob(fixedData.day, fixedData.month, fixedData.year);
    await expect(signupPage.dayDropdown).toHaveValue(fixedData.day);
    await expect(signupPage.yearDropdown).toHaveValue(fixedData.year);

    await signupPage.checkNewsletter();
    await expect(signupPage.newsletterCheckbox).toBeChecked();
    await signupPage.checkSpecialOffers();
    await expect(signupPage.specialOffersCheckbox).toBeChecked();

    await signupPage.selectCountry(fixedData.country);
    await expect(signupPage.country).toHaveValue(fixedData.country);

    await signupPage.enterFirstName(testUser.firstName);
    await signupPage.enterLastName(testUser.lastName);
    await signupPage.enterAddress(testUser.address);
    await signupPage.enterState(testUser.state);
    await signupPage.enterCity(testUser.city);
    await signupPage.enterZipcode(testUser.zipcode);
    await signupPage.enterMobileNumber(testUser.mobileNumber);

    await signupPage.createAccount();
    await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();
});