import { test, expect } from '@playwright/test';


test("Ecommerce Login Test", async ({ browser }) => {

    const context = await browser.newContext();// Fresh Instance of Browser - Incognito Mode
    const page = await context.newPage();// Open the page from the context

    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('input[type="email"]').fill('himenpatel78@gmail.com');
    await page.locator('input[type="password"]').fill('Himen@78');
    await page.locator('input[name="login"]').click();

    await page.waitForLoadState('networkidle');
    const allProductNames = await page.locator('.card-body b').all();
    console.log('Total Products: ', allProductNames.length);
    for (const productName of allProductNames) {
        console.log('Product Name: ', await productName.textContent());
    }
});