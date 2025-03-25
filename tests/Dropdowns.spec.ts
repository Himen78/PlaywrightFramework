import {test, expect } from "@playwright/test";

test.describe('Handle Dropdowns', () => {
    test('Get Multiple Locators', async ({ browser }) => {
        const context = await browser.newContext(); // Fresh Instance of Browser - Incognito Mode
        const page = await context.newPage(); // Open the page from the context
        // We can also use page default context from the parameter like {page}
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

        const userName = await page.locator('#username');
        const signInButton = await page.locator("[type='submit']");
        
        const dropdown = await page.locator('select.form-control'); // Dropdown locator
        await dropdown.selectOption("consult"); // Select the option from the dropdown
        
        // Handle Checkbox
        await page.locator(".radiotextsty").last().click(); // Select the last radio button - User
        await page.locator("#okayBtn").click();
        await expect(page.locator(".radiotextsty").last()).toBeChecked(); // Verified the checked the checkbox

        await page.locator("#terms").click(); // Click on Terms checkbox
        await expect(page.locator("#terms")).toBeChecked();

        await page.locator("#terms").uncheck();
        const termsCheckbox = await page.locator("#terms").isChecked();
        await expect(termsCheckbox).toBeFalsy(); // Verified the checkbox is unchecked

        // Validate the Atrribute value from any locator
        const attributeValue = await page.locator("[href*='documents-request']");
        await expect(attributeValue).toHaveAttribute("class","blinkingText"); // Validate the attribute value
    });
});