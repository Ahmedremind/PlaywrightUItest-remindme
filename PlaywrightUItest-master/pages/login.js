const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

export class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginbutton = page.locator('//button[text()="Einloggen"]');
        this.email = page.locator('//input[@placeholder="E-Mail-Adresse"]');
        this.password = page.locator('//input[@type="password"]');
        this.clickfurther = page.locator('//button[text()="Weiter"]');
    }

    async gotoremindme(){
        const { baseURL } = this.page.context()._options;
        await this.page.goto(`${baseURL}`);
        // // Function to accept cookies
        // const acceptCookiesButton = await this.page.waitForSelector('(//button[text()="Alle Akzeptieren"])');
        // if (acceptCookiesButton) {
        //     await acceptCookiesButton.click();
        // }
    }

    async userLogin(Email, Password){
        await this.loginbutton.click();
        await this.email.fill(Email);
        await this.password.fill(Password);
        await this.loginbutton.click();
        //await expect(this.myaccount).toBeVisible();
}}