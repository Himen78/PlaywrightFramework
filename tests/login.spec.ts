import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test.describe('Login Testcase', () => {
    test('First Playwright Test with browser context', async ({ browser }) => {
        const context = await browser.newContext(); // Fresh Instance of Browser - Incognito Mode
        const page = await context.newPage(); // Open the page from the context
        // We can also use page default context from the parameter like {page}
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    })

    test('Second Playwright Test with page context', async ({ page }) => {
        await page.goto('https://www.google.com');
        const pageTitle = await page.title();
        console.log('Page Title: ', pageTitle);

        // We can verify ttlle using both the ways as below.
        await expect(pageTitle).toBe('Google');
        await expect(page).toHaveTitle('Google');
    })
});
