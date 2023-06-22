import {Page} from '@playwright/test';
import Search from '../POM/search';
import Login from '../POM/login';
export default class Delete{
    constructor(public page: Page){
    }
    async clickDelete(){
        return await this.page.locator("xpath=//*[contains(@class,'oxd-table-row--with-border')]/child::div/child::div/button//*[contains(@class,'oxd-icon bi-trash')]/parent::button").click();
    }
}