import { Page, Locator } from '@playwright/test';
export class LoginPage{
    readonly page : Page;
        readonly loginLink: Locator;
    readonly loginEmail:Locator;
    readonly loginPassword:Locator;
    readonly loginBtn:Locator;
    constructor(page:Page){
        this.page=page;
        this.loginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.loginEmail=page.locator('[data-qa="login-email"]')
        this.loginPassword=page.locator('[data-qa="login-password"]')
this.loginBtn=page.locator('[data-qa="login-button"]');
    }
    async goto():Promise<void>{
          await this.page.goto('https://automationexercise.com/');
        await this.loginLink.click();
    }
    async enterEmail(email:string):Promise<void>{
        await this.loginEmail.fill(email);
    }
    async enterPassword(pass:string):Promise<void>{
        await this.loginPassword.fill(pass);
    }
    async clickLogin():Promise<void>{
        await this.loginBtn.click();
    }
    }
    
