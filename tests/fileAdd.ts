import { test, chromium, expect,Page } from '@playwright/test';
import {Admin} from "../Admin";
test.describe("Test case Add", async()=>{
    test.beforeEach(async ({ page,baseURL}) => {
        const admin = new Admin(page);
        await page.goto(`${baseURL}web/index.php/auth/login`);
        await admin.Login.loginId("Admin","admin123");
        await admin.Search.clickAdminmenu();
     });
    test("Happy case",async({page})=>{
        const admin = new Admin(page);
        await admin.Add.clickAdd();
        await admin.Add.fillInfor("13245679","132456798","lala","john");
        await admin.Add.addUserole();
        await admin.Add.submitSave();
    })
    test("Unfill password & confirm password ",async({page})=>{
        const admin = new Admin(page);
        await admin.Add.clickAdd();
        await admin.Add.fillInfor("","","lala","john");
        await admin.Add.addUserole();
        await admin.Add.submitSave();
    })
})
