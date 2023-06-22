import {Page} from '@playwright/test';
export default class Add{
    constructor(public page:Page){

    }
    async clickAdd(){
        return await this.page.locator("xpath=//*[contains(button,'Add')]//button").click();
    }
    async fillInfor(password:string, confirmpassword:string, username:string,employeeName:string ){
        await this.page.fill("xpath=//*[contains(text(),'Username')]//parent::div/following-sibling::div//input",username);
        await this.page.fill("xpath=//*[contains(text(),'Employee Name')]//parent::div/following-sibling::div//input",employeeName);
        await this.page.fill("xpath=//*[contains(text(),'Confirm Password')]//parent::div/following-sibling::div//input",confirmpassword);
        await this.page.fill("xpath=//*[contains(text(),'Password')]/ancestor::div//*[contains(@class,'oxd-grid-item oxd-grid-item--gutters user-password-cell')]//input",password);
    }
    async clickUSerole(){
        return await this.page.locator("xpath=//*[contains(text(),'User Role')]/parent::div//following-sibling::div//*[contains(text(),'Select')]").click();
    }
    async optUserole(){
        return await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='Admin']").click();
    }
    async addUserole(){
        await this.page.locator("xpath=//*[contains(text(),'User Role')]/parent::div//following-sibling::div//*[contains(text(),'Select')]").click();
        await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='Admin']").click();
    }
    async clickStatus(){
        return await this.page.locator("xpath=//*[contains(text(),'Status')]/parent::div//following-sibling::div//*[contains(text(),'Select')]").click();
    }
    async optStatus(){
        return await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='Enabled']").click();
    }
    async addStatus(){
        await this.page.locator("xpath=//*[contains(text(),'Status')]/parent::div//following-sibling::div//*[contains(text(),'Select')]").click();
        await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='Enabled']").click();
    }
    async submitSave(){
        return await this.page.locator("xpath=//*[contains(@class,'oxd-form-actions')]/child::button[@type='submit']").click();
    }
}