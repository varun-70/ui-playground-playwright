import { Locator, Page } from "@playwright/test";

export class LandingPage {
    private readonly page: Page;

    private readonly dynamicIdButton: Locator;
    private readonly classAttributeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dynamicIdButton = page.locator('//a[.="Dynamic ID"]');
        this.classAttributeButton = page.getByRole('link', { name: 'Class Attribute' });
    }

    async navigateToBaseUrl() {
        await this.page.goto('http://uitestingplayground.com/');
    }

    async clickDynamicIdButton() {
        await this.dynamicIdButton.click();
    }

    async clickOnClassAttributeButton() {
        await this.classAttributeButton.click();
    }
}