export class TestParam {
    static landingPageUrl: string;

    static getLandingPageUrl(): string {
        if (!TestParam.landingPageUrl) {
            TestParam.landingPageUrl = process.env.URL.toLowerCase();
            if (!TestParam.landingPageUrl) {
                throw new Error('Landing page URL is missing.')
            }
        }
        return TestParam.landingPageUrl;
    }
}