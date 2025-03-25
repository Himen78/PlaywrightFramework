import { test, expect } from "@playwright/test";

test.describe('Child Window Handling', () => {
    test('Child Window Handling', async ({ browser }) => {
        const context = await browser.newContext(); // Fresh Instance of Browser - Incognito Mode
        const page = await context.newPage(); // Open the page from the context
        // We can also use page default context from the parameter like {page}
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

        // Validate the Atrribute value from any locator
        const documentLink = await page.locator("[href*='documents-request']");
        await expect(documentLink).toHaveAttribute("class", "blinkingText"); // Validate the attribute value

        // Handle new page simoultaneously after click on link
        const [newPage] = await Promise.all([
            context.waitForEvent('page'), // Wait for the new page to open
            documentLink.click() // Click on the document link
        ])

        const getText = await newPage.locator('.red').textContent(); // Get the text from the new page    
        const arrayText = getText?.split("@")
        const domainName = arrayText?.[1].split(' ')[0]; // Safely get the domain name from the text
        if (!domainName) {
            throw new Error("Domain name could not be extracted.");
        }
        console.log("Domain Name: ", domainName);
        await page.locator("#username").fill(domainName); // Click on Terms checkbox
    });
});