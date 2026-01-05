import { Locator, Page } from "@playwright/test";
import { PageElement } from "../component/base/page-element";
import {TestParam} from "../../constants/test-param";

export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async pageElement(element: string) {
        return new PageElement(this.page, element);
    }

    async navigateToBaseUrl(page: Page) {
        await page.goto(TestParam.getLandingPageUrl());
    }
}