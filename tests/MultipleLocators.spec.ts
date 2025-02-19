import {test, expect } from "@playwright/test";

test.describe('Multiple Locators', () => {
    test('Get Multiple Locators', async ({ browser }) => {
        const context = await browser.newContext(); // Fresh Instance of Browser - Incognito Mode
        const page = await context.newPage(); // Open the page from the context
        // We can also use page default context from the parameter like {page}
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

        const userName = await page.locator('#username');
        const signInButton = await page.locator("[type='submit']");
        const cardTitles = await page.locator('.card-body a');
        
        await userName.fill('rahulshettyacademy_1');
        await page.locator("[type='password']").fill('learning');
        await signInButton.click();
        const validationMessage = await page.locator("[style*='block']").textContent();
        console.log('Validation Message: ', validationMessage);
        expect(validationMessage).toContain('Incorrect username/password.'); // await is not required here

        await userName.fill(""); // Clear the username field
        await userName.fill('rahulshettyacademy');
        await signInButton.click();

        const getFirstProductName = await cardTitles.first().textContent();
        console.log('First Product Name: ', getFirstProductName);

        // Get all the product names
        const allProductNames = await cardTitles.all();
        console.log('Total Products: ', allProductNames.length);
        for (const productName of allProductNames) {
            console.log('Product Name: ', await productName.textContent());
        }
    });
});