import { Page } from "@playwright/test";
import { ReporterUtils } from "../../utils/reporter-utils";
import { BasePage } from "./base-page";

export class LandingPage extends BasePage {
    locator: Record<string, string> = {};
    page: Page;
    private dynamicIdButton: string = '//a[.="Dynamic ID"]';

    private readonly locators = {
        dynamicIdButton: this.page.locator('//a[.="Dynamic ID"]'),
        pageTitle: this.page.locator('#title'),
    }

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.locator.dynamicIdButton = '//a[.="Dynamic ID"]';
    }

    async clickDynamicIdButton() {
        await ReporterUtils.createStep(`Click on dynamic id button`, async () => {
            await (await this.pageElement(this.locator.dynamicIdButton)).click();
        })
    }
}