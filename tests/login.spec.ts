import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test.describe('Login Testcase', () => {
    test.only('First Playwright Test with browser context', async ({ browser }) => {
        const context = await browser.newContext(); // Fresh Instance of Browser - Incognito Mode
        const page = await context.newPage(); // Open the page from the context
        // We can also use page default context from the parameter like {page}
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await page.locator('#username').fill('rahulshettyacademy_1');
        await page.locator("[type='password']").fill('learning');
        await page.locator("[type='submit']").click();
        const validationMessage = await page.locator("[style*='block']").textContent();
        console.log('Validation Message: ', validationMessage);
        await expect(validationMessage).toContain('Incorrect username/password.');
    })

    test('Second Playwright Test with page context', async ({ page }) => {
        await page.goto('https://www.google.com');
        const pageTitle = await page.title();
        console.log('Page Title: ', pageTitle);

        // We can verify title using both the ways as below.
        await expect(pageTitle).toBe('Google');
        await expect(page).toHaveTitle('Google');
    })
});
