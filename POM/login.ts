import {Page, expect, Locator } from '@playwright/test';
// import { Locator } from 'playwright-core';
export default class Login{
    constructor(public page: Page){
    }
    async loginId(username1:string, password1:string){
        await this.page.fill("input[name='username']",username1);
        await this.page.fill("input[name='password']",password1);
        await this.submitLogin();
    }
    async submitLogin(){
      await this.page.locator("xpath=//*[@class='oxd-form-actions orangehrm-login-action']//*[@type='submit']").click();
    }
    async clickmenuAccount(){
        await this.page.locator("xpath=//span[@class='oxd-userdropdown-tab']").click();
    }
    async logout(){
        await this.page.locator("xpath=//span[@class='oxd-userdropdown-tab']").click();
        await this.page.locator("xpath=//li[@class='--active oxd-userdropdown']//child::ul//a[@href='/web/index.php/auth/logout']").click();
    }
}
