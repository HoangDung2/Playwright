import { test,Page } from '@playwright/test';
import Add from './POM/addEmployee';
import Login from "./POM/login";
import Search from "./POM/search";
import Delete from "./POM/delete";
import Edit from "./POM/edit";
export class Admin{
    readonly page: Page;
    readonly Add:Add;
    readonly Login:Login;
    readonly Search:Search;
    readonly Delete:Delete;
    readonly Edit:Edit;
    constructor(page:Page){
        this.page=page;
        this.Login= new Login(page);
        this.Add= new Add(page);
        this.Search= new Search(page);
        this.Delete= new Delete(page);
        this.Edit = new Edit(page);
    }
}