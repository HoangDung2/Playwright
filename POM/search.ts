import {Page, Locator} from '@playwright/test';
import { login } from '../fileData';
export default class Search{
    
    constructor(public page: Page){
    }
    async inputUsername(enterUsername:string){
        await this.page.fill("xpath=//label[contains(text(),'Username')]/ancestor::div[@class='oxd-input-group__label-wrapper']/following-sibling::div/input",enterUsername);
    }
    async clickAdminmenu(){
        return await this.page.locator("xpath=//span[text()='Admin']").click();
    }
    async clickUserole(){
        return await this.page.locator("xpath=//*[contains(text(),'User Role')]/parent::div/following-sibling::div//*[@class='oxd-select-wrapper']/div").click();
    }
    async optUserole(userole:string){
        return await this.page.locator("xpath=//*[contains(@class,'oxd-select-option')]//span[text()='"+userole+"']").click();
    }
    async searchUserole(userole:string){
        await this.page.locator("xpath=//*[contains(text(),'User Role')]/parent::div/following-sibling::div//*[@class='oxd-select-wrapper']/div").click();
        await this.page.locator("xpath=//*[contains(@class,'oxd-select-option')]//span[text()='"+userole+"']").click();
        // await this.page.locator("xpath=//*[contains(@class,'oxd-select-option')]//span[text()='Admin']").click();
    }   
    async submitSearch(){
        return await this.page.locator("xpath=//*[@class='oxd-form-actions']//button[@type='submit']").click();
    }
    async inputEmloyeeName(name:string){
        await this.page.fill("xpath=//*[contains(text(),'Employee Name')]/parent::div/following-sibling::div//input",name);
    }
    async clickStatus(){
        return await this.page.locator("xpath=//*[contains(text(),'Status')]/parent::div//following-sibling::div//*[contains(text(),'Select')]").click();
    }
    async optStatus(status:string){
        return await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='"+status+"']").click();
    }
    async searhStatus(status:string){
         await this.page.locator("xpath=//*[contains(text(),'Status')]/parent::div//following-sibling::div//*[contains(text(),'Select')]").click();
         await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='"+status+"']").click();
         //  await this.page.locator("xpath=//*[contains(@class,' --positon-bottom')]/child::div/span[text()='Enabled']").click();
    }
}