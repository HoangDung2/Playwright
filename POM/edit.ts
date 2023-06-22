import {Page} from '@playwright/test';
import Search from '../POM/search';
import Login from '../POM/login';
export default class Edit{
    constructor(public page: Page){
    }
    async clickEdit(){
        return await this.page.locator("xpath=//div[@class='oxd-table-cell-actions']//i[@class='oxd-icon bi-pencil-fill']").click();
    }
    async clickUSerole(){
        return await this.page.locator("xpath=//*[contains(text(),'User Role')]/parent::div//following-sibling::div//*[contains(@class,'oxd-select-text--after')]").click();
    }
    async selectUserole(userole:string){
        return await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='"+userole+"']").click();
    }
    async editUserole(userole:string){
        await this.page.locator("xpath=//*[contains(text(),'User Role')]/parent::div//following-sibling::div//*[contains(@class,'oxd-select-text--after')]").click();
        await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='"+userole+"']").click();
        // await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='Admin']").click();
    }
    // choose status
    async clickStatus(){
        return await this.page.locator("xpath=//*[contains(text(),'Status')]/parent::div//following-sibling::div//*[contains(@class,'oxd-select-text--after')]").click();
    }
    async selectStatus(status:string){
        return await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='"+status+"']").click();
    }
    async editStatus(status:string){
        await this.page.locator("xpath=//*[contains(text(),'Status')]/parent::div//following-sibling::div//*[contains(@class,'oxd-select-text--after')]").click();
        await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='"+status+"']").click();
        // await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='Enabled']").click();

    }
    // input username
    async inputUsername(enterUsername:string){
        await this.page.fill("xpath=//label[contains(text(),'Username')]/ancestor::div[@class='oxd-input-group__label-wrapper']/following-sibling::div/input",enterUsername);
    }
    // input Employee Name
    async inputEmloyeeName(name:string){
        await this.page.fill("xpath=//*[contains(text(),'Employee Name')]/parent::div/following-sibling::div//input",name);
    }
    async fillIPUserEm(enterUsername:string,name:string){
        await this.page.fill("xpath=//label[contains(text(),'Username')]/ancestor::div[@class='oxd-input-group__label-wrapper']/following-sibling::div/input",enterUsername);
        await this.page.fill("xpath=//*[contains(text(),'Employee Name')]/parent::div/following-sibling::div//input",name);
    }
    // change password
    async clickChangePWord(){
        return await this.page.locator("xpath=//*[contains(label,'Yes')]//child::label//input").check();
        // return await this.page.locator('label').filter({ hasText: 'Yes' }).locator('i');
    }
    // fill infor password & confirm password
    async fillInforPasswor(password:string, confirmpassword:string){
        await this.page.fill("xpath=//*[contains(text(),'Password')]/ancestor::div//*[contains(@class,'oxd-grid-item oxd-grid-item--gutters user-password-cell')]//input",password);
        await this.page.fill("xpath=//*[contains(text(),'Confirm Password')]//parent::div/following-sibling::div//input",confirmpassword);
    }
    async submitSaveEdit(){
        return await this.page.locator("xpath=//*[contains(@class,'oxd-form-actions')]/child::button[@type='submit']").click();
    }
}