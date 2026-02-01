import { test, expect, Page } from "@playwright/test";
import { LandingPage } from "../src/pages/landing-page";
import { DynamicIdPage } from "../src/pages/dynamic-id.page";
import { ClassAttributePage } from "../src/pages/class-attribute.page";

test.describe('Dynamic Id', () => {
    let currentPage: Page;
    let landingPage: LandingPage;
    let dynamicIdPage: DynamicIdPage;
    let classAtributePage: ClassAttributePage;

    test.beforeEach(async ({page}) => {
        landingPage = new LandingPage(page);
        dynamicIdPage = new DynamicIdPage(page);
        classAtributePage = new ClassAttributePage(page);
        currentPage = page;
    })

    test('Verify the Dynamic Id button', async () => {
        await landingPage.navigateToBaseUrl();
        await landingPage.clickDynamicIdButton();

        expect(await dynamicIdPage.getHeaderText()).toBe('Dynamic ID');
        await dynamicIdPage.clickOnButtonWithDynamicIdButton();
    })

    test('Verify Class Attribute', async () => {
        await landingPage.navigateToBaseUrl();
        await landingPage.clickOnClassAttributeButton();

        expect(await classAtributePage.getHeaderText()).toBe('Class Attribute');
        let alertMessage: string;

        currentPage.on('dialog', (dialog) => {
            alertMessage = dialog.message();
            expect(alertMessage).toBe('Primary button pressed');
            dialog.accept();
        })

        await classAtributePage.clickOnButton();
    })
})
