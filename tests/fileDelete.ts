import {test, Page } from '@playwright/test';
import {Admin} from "../Admin";
test.describe("Test case Delete Employee",async()=>{
    test("Delete Employee",async({page,baseURL})=>{
        const admin = new Admin(page);
        await page.goto(`${baseURL}web/index.php/auth/login`);
        await admin.Login.loginId("Admin", "admin123");
        await admin.Search.clickAdminmenu();
        await admin.Search.inputUsername("Admin");
        await admin.Search.searchUserole();
        await admin.Search.searhStatus();
        await admin.Search.submitSearch();
        await page.waitForTimeout(500);
        await admin.Delete.clickDelete();
    })
})
