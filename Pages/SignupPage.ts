import { Page, Locator } from '@playwright/test';

export class SignupPage {
    readonly page: Page;
    readonly signupLoginLink: Locator;
    readonly signupName: Locator;
    readonly signupEmail: Locator;
    readonly signupButton: Locator;
    readonly titleMrRadio: Locator;
    readonly titleMrsRadio: Locator;
    readonly accountInfoName: Locator;
    readonly accountInfoEmail: Locator;
    readonly password: Locator;
    readonly dayDropdown: Locator;
    readonly monthDropdown: Locator;
    readonly yearDropdown: Locator;
    readonly newsletterCheckbox: Locator;
    readonly specialOffersCheckbox: Locator;
    readonly country: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.signupName = page.locator('[data-qa="signup-name"]');
        this.signupEmail = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.locator('[data-qa="signup-button"]');
        this.titleMrRadio = page.locator('#id_gender1');
        this.titleMrsRadio = page.locator('#id_gender2');
        this.accountInfoName = page.locator('[data-qa="name"]');
        this.accountInfoEmail = page.locator('[data-qa="email"]');
        this.password = page.locator('[data-qa="password"]');
        this.dayDropdown = page.locator('#days');
        this.monthDropdown = page.locator('#months');
        this.yearDropdown = page.locator('#years');
        this.newsletterCheckbox = page.locator('#newsletter');
        this.specialOffersCheckbox = page.locator('#optin');
        this.country = page.locator('[data-qa="country"]');
        this.firstName = page.locator('[data-qa="first_name"]');
        this.lastName = page.locator('[data-qa="last_name"]');
        this.address = page.locator('[data-qa="address"]');
        this.state = page.locator('[data-qa="state"]');
        this.city = page.locator('[data-qa="city"]');
        this.zipcode = page.locator('[data-qa="zipcode"]');
        this.mobileNumber = page.locator('[data-qa="mobile_number"]');
        this.createAccountButton = page.locator('[data-qa="create-account"]');
    }

    async goto(): Promise<void> {
        await this.page.goto('https://automationexercise.com/');
        await this.signupLoginLink.click();
    }

    async enterName(name: string): Promise<void> {
        await this.signupName.fill(name);
    }

    async enterEmail(email: string): Promise<void> {
        await this.signupEmail.fill(email);
    }

    async submit(): Promise<void> {
        await this.signupButton.click();
    }

    async selectTitle(title: string): Promise<void> {
        if (title === 'Mr') {
            await this.titleMrRadio.check();
        } else {
            await this.titleMrsRadio.check();
        }
    }

    async enterPass(pass: string): Promise<void> {
        await this.password.fill(pass);
    }

    async selectDob(day: string, month: string, year: string): Promise<void> {
        await this.dayDropdown.selectOption(day);
        await this.monthDropdown.selectOption({ label: month });
        await this.yearDropdown.selectOption(year);
    }

    async checkNewsletter(): Promise<void> {
        await this.newsletterCheckbox.check();
    }

    async checkSpecialOffers(): Promise<void> {
        await this.specialOffersCheckbox.check();
    }

    async selectCountry(ctr: string): Promise<void> {
        await this.country.selectOption(ctr);
    }

    async enterFirstName(firstName: string): Promise<void> {
        await this.firstName.fill(firstName);
    }

    async enterLastName(lastName: string): Promise<void> {
        await this.lastName.fill(lastName);
    }

    async enterAddress(address: string): Promise<void> {
        await this.address.fill(address);
    }

    async enterState(state: string): Promise<void> {
        await this.state.fill(state);
    }

    async enterCity(city: string): Promise<void> {
        await this.city.fill(city);
    }

    async enterZipcode(zipcode: string): Promise<void> {
        await this.zipcode.fill(zipcode);
    }

    async enterMobileNumber(mobile: string): Promise<void> {
        await this.mobileNumber.fill(mobile);
    }

    async createAccount(): Promise<void> {
        await this.createAccountButton.click();
    }
}