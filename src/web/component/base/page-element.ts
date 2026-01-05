import { Locator, Page } from "@playwright/test";
import { ReporterUtils } from "../../../utils/reporter-utils";

export class PageElement {
    element: Locator;

    constructor(page: Page, element: String) {
        this.element = element;
    }

    async click(): Promise<void> {
        try {
            await this.element.click();
        } catch (e) {
            // TODO: Logger
            throw e;
        }
    }
}