import { test, Page, Locator, expect } from '@playwright/test';
import { Admin } from "../Admin";
import { data, tc_search, User } from '../fileData';
test.describe("Test case Search", async () => {
  test.beforeEach(async ({ page, baseURL }) => {
    const admin = new Admin(page);
    await page.goto(`${baseURL}web/index.php/auth/login`);
    await admin.Login.loginId("Admin", "admin123");
    await admin.Search.clickAdminmenu();
  });
  test("Search Username", async ({ page }) => {
    const admin = new Admin(page);
    await admin.Search.inputUsername("Admin");
    await admin.Search.submitSearch();
    var title = await page.locator("xpath=//*[contains(@class,'oxd-table-row--with-border')]");
    await expect(title.first()).toHaveCount(1);
    // await page.waitForTimeout(500);
  })
  data.tc_search.forEach((element: User, index: number) => {
    test("Search User role: "+index.toString(), async ({ page }) => {
      const admin = new Admin(page);
      await admin.Search.searchUserole(element.userole);
      await admin.Search.submitSearch();
      var title = await page.locator("xpath=//*[contains(@class,'oxd-table-row--with-border')]");
      await expect(title.first()).toHaveCount(1);
      // await page.waitForTimeout(500) ;
    })
  });
  data.tc_search.forEach((element: User, index: number) => {
    test("Search Status: "+index.toString(), async ({ page }) => {
      const admin = new Admin(page);
      await admin.Search.searhStatus(element.status);
      await admin.Search.submitSearch();
      await page.waitForTimeout(500);
    })
  });
})