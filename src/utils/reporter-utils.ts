import * as allure from "allure-js-commons";

export class ReporterUtils {
    static async createStep(stepName: string, callback: () => void | Promise<void>, status: string | null = null) {
        console.log(stepName);
        await allure.step(stepName, callback);
    }

    static async addAttachment() {

    }

    static async metadata() {

    }
}