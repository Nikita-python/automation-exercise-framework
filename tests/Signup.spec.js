import {test,expect} from '@playwright/test'
import { SignupPage } from '../Pages/SignupPage';
test('Signup',async({page})=>{
    const signupPage = new SignupPage(page);
await signupPage.goto();
    await expect(page.getByText('New User Signup!')).toBeVisible();
await signupPage.enterName('seraa');
await signupPage.enterEmail('tujoufoaudeppe-6252@yopmail.com');
await signupPage.submit();
await expect(page.getByText('Enter Account Information')).toBeVisible();
await signupPage.selectTitle('Mrs');
await expect(signupPage.titleMrsRadio).toBeChecked();
await expect(signupPage.accountInfoName).toHaveValue('seraa');
await expect(signupPage.accountInfoEmail).toHaveValue('tujoufoaudeppe-6252@yopmail.com');
await signupPage.enterPass('abcd');
await signupPage.selectDob('15','February','1996');
await expect(signupPage.dayDropdown).toHaveValue('15');
await expect(signupPage.monthDropdown).toHaveValue('2');
await expect(signupPage.yearDropdown).toHaveValue('1996');
await signupPage.checkNewsletter();
await expect(signupPage.newsletterCheckbox).toBeChecked();
await signupPage.checkSpecialOffers();
await expect(signupPage.specialOffersCheckbox).toBeChecked();
await signupPage.selectcountry('India');
await expect(signupPage.country).toHaveValue('India');
await signupPage.enterFirstName('sera');
await signupPage.enterLastName('Mandana');
await signupPage.enterAddress('123 Test Street');
await signupPage.enterState('Maharashtra');
await signupPage.enterCity('Mumbai');
await signupPage.enterZipcode('400001');
await signupPage.enterMobileNumber('9834222561');

await signupPage.createAccount();

await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();
})

