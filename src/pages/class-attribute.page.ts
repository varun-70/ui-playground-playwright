import { Locator, Page } from "@playwright/test";

export class ClassAttributePage {

    private readonly headerText: Locator;
    private readonly button: Locator;

    constructor(page: Page) {
        this.headerText = page.getByRole('heading', { name: 'Class Attribute' });
        this.button = page.getByRole('button', { name: 'Button' });
    }

    async getHeaderText(): Promise<string | null>  {
        return await this.headerText.textContent();
    }

    async clickOnButton() {
        await this.button.first().click();
    }
}