import {test,expect} from '@playwright/test'
import { SignupPage } from '../Pages/SignupPage';
import { faker } from '@faker-js/faker';
import SignupData from './Fixtures/SignupData.json' assert { type: 'json' };

test('Signup',async({page})=>{
    const signupPage = new SignupPage(page);
    const testUser={
name:faker.person.firstName(),
email:faker.internet.email(),
password: faker.internet.password({ length: 8 }),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        mobileNumber: faker.phone.number()
    }
    const fixedData = SignupData.validuser;
    //Go To Signup page 
await signupPage.goto();
await expect(page.getByText('New User Signup!')).toBeVisible();
//Initial signupForm
await signupPage.enterName(testUser.name);

await signupPage.enterEmail(testUser.email);
await signupPage.submit();
//Account Information page
await expect(page.getByText('Enter Account Information')).toBeVisible();
await signupPage.selectTitle(fixedData.title);
await expect(signupPage.titleMrsRadio).toBeChecked();
await expect(signupPage.accountInfoName).toHaveValue(testUser.name);
await expect(signupPage.accountInfoEmail).toHaveValue(testUser.email);
await signupPage.enterPass(testUser.password);
await signupPage.selectDob(fixedData.day,fixedData.month,fixedData.year);
await expect(signupPage.dayDropdown).toHaveValue(fixedData.day);
await expect(signupPage.yearDropdown).toHaveValue(fixedData.year);
await signupPage.checkNewsletter();
await expect(signupPage.newsletterCheckbox).toBeChecked();
await signupPage.checkSpecialOffers();
await expect(signupPage.specialOffersCheckbox).toBeChecked();
await signupPage.selectcountry(fixedData.country);
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
})

