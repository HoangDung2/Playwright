import { test, chromium, expect, Page, Locator } from '@playwright/test';
import { Admin } from "../Admin";
import { data, employee,User } from '../fileData';
test.describe("Test case Edit", async () => {
    test.beforeEach(async ({ page, baseURL }) => {
        const admin = new Admin(page);
        await page.goto(`${baseURL}web/index.php/auth/login`);
        await admin.Login.loginId("Admin", "admin123");
        await admin.Search.clickAdminmenu();
      });
    data.employee.forEach((element:User,index:number) => {
        test("Edit Employee: "+index.toString(), async ({ page, baseURL }) => {
            const admin = new Admin(page);
            await admin.Search.inputUsername(element.username);
            await admin.Search.searchUserole(element.userole);
            await admin.Search.searhStatus(element.status);
            await admin.Search.submitSearch();
            await admin.Edit.clickEdit();
            await admin.Edit.editUserole(element.userole);
            await admin.Edit.editStatus(element.status);
            await admin.Edit.fillIPUserEm(element.username,element.editusername);
            await admin.Edit.submitSaveEdit();
            var title = page.locator("xpath=h5/*[@class='oxd-text--h5]");
            await expect(title).toBeVisible();
        })
    });
})
