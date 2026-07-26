import {test,expect} from '@playwright/test'
test('Homepage loads successfully',async({page})=>{
await page.goto('https://automationexercise.com/')
await expect(page).toHaveTitle(/Automation Exercise/);
})