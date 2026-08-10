import { test, expect } from '@playwright/test';
import { LoginPage  } from '../Pages/LoginPage';
import 'dotenv/config';


test('LoginPage',async({page})=>{
const loginpage = new LoginPage(page);
const Email = process.env.Email || '';
    const Password = process.env.Password ||'';
    
await loginpage.goto();
    await expect(page.getByText('Login to your account')).toBeVisible();

await loginpage.enterEmail(Email);
await loginpage.enterPassword(Password);
await loginpage.clickLogin();
    await expect(page.getByText('Logged in as')).toBeVisible();

});
