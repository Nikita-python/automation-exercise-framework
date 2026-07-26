 export class SignupPage{
    constructor(page){
        this.page = page;
this.signupLoginLink = page.getByRole('link',{name:' Signup / Login'});
this.signupName = page.locator('[data-qa="signup-name"]');
this.signupEmail = page.locator('[data-qa="signup-email"]');
this.signupButton = page.locator('[data-qa="signup-button"]');
this.titleMrRadio = page.locator("#id_gender1");
this.titleMrsRadio = page.locator("#id_gender2");
this.accountInfoName = page.locator('[data-qa="name"]');
this.accountInfoEmail = page.locator('[data-qa="email"]');
this.password = page.locator('[data-qa="password"]');
this.dayDropdown = page.locator("#days");
this.monthDropdown = page.locator("#months");
this.yearDropdown = page.locator("#years");
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
    async goto(){
        await this.page.goto('https://automationexercise.com/');
        await this.signupLoginLink.click();
    }
    async enterName(name){
await this.signupName.fill(name);
    }
    async enterEmail(email){
        await this.signupEmail.fill(email);
    }
    async submit(){
        await this.signupButton.click();
    }
    async selectTitle(title){
        if(title==='Mr')
        await this.titleMrRadio.check();
    else{
        await this.titleMrsRadio.check();
    }

    }
    async enterPass(pass){
        await this.password.fill(pass);
    }
    async selectDob(day,month,year){
await this.dayDropdown.selectOption(day);
await this.monthDropdown.selectOption({label:month});
await this.yearDropdown.selectOption(year);

    }
    async checkNewsletter() {
    await this.newsletterCheckbox.check();
}

async checkSpecialOffers() {
    await this.specialOffersCheckbox.check();
}
async selectcountry(ctr){
    await this.country.selectOption(ctr);
}
async enterFirstName(firstName) {
    await this.firstName.fill(firstName);
}

async enterLastName(lastName) {
    await this.lastName.fill(lastName);
}

async enterAddress(address) {
    await this.address.fill(address);
}

async enterState(state) {
    await this.state.fill(state);
}

async enterCity(city) {
    await this.city.fill(city);
}

async enterZipcode(zipcode) {
    await this.zipcode.fill(zipcode);
}

async enterMobileNumber(mobile) {
    await this.mobileNumber.fill(mobile);
}
async createAccount(){
    await this.createAccountButton.click();
}
}
 