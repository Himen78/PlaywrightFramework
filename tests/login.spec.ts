import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test.describe('Login Testcase', () => {
    test('First Playwright Test', async ({browser}) => {
        const context = await browser.newContext(); // Fresh Instance of Browser - Incognito Mode
        const page = await context.newPage(); // Open the page from the context
        await page.goto('https://www.saucedemo.com/');
    })
})
