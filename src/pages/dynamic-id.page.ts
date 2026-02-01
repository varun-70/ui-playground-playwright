import { Locator, Page } from "@playwright/test";

export class DynamicIdPage {
    private readonly page: Page;

    private readonly headerText: Locator;
    private readonly buttonWithDynamicIdButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.headerText = this.page.getByRole('heading', { name: 'Dynamic ID' });
        this.buttonWithDynamicIdButton = this.page.getByRole('button', { name: 'Button with Dynamic ID' });
    }

    async getHeaderText(): Promise<string | null> {
        return await this.headerText.textContent();
    }

    async clickOnButtonWithDynamicIdButton() {
        await this.buttonWithDynamicIdButton.click();
    }
}