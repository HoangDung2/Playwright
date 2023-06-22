import { chromium, expect, Page,test} from '@playwright/test';
import {Admin} from "../Admin";
import {User,data,} from '../fileData';
test.describe("Test case login", async () => {
  test.beforeEach(async ({ page,baseURL}) => {
   await page.goto(`${baseURL}web/index.php/auth/login`);
});
  // data.tc.forEach((element:User,index:number) => {
    test("Happy case: ", async ({page,baseURL}) => {
      const admin = new Admin(page);
      await page.goto(`${baseURL}web/index.php/auth/login`);
      await admin.Login.loginId("Admin","admin123");
      let logo = await page.locator("xpath=//img[@src='/web/images/orangehrm-logo.png?v=1683010990518']");
      await expect(logo).toBeVisible();
    })
  // });
  // data.tc_unfill.forEach((element:User,index:number) => {
    test("Unfill unsername & password: ", async ({ page}) => {
      const admin = new Admin(page);;
      await admin.Login.loginId("","");
      let ms ="Required";
      expect("Required").toBe(ms);
    })
  // });
  // data.tc_false.forEach((element:User,index:number) => {
    test("Fill unsername & password invalid: ", async ({ page}) => {
      const admin = new Admin(page);;
      await admin.Login.loginId("ádasd","123123");
      let ms = await page.locator("xpath=//*[contains(p,'Invalid credentials')]//child::p").textContent();
      await expect(ms).toBe("Invalid credentials");
    })
  // });
})
