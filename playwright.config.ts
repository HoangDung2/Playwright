import { PlaywrightTestConfig } from '@playwright/test';
// import { json } from 'node:stream/consumers';

const config: PlaywrightTestConfig={
  testMatch:["tests/fileLogin.ts"],
  use: {
     /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
     actionTimeout: 0,
     /* Base URL to use in actions like `await page.goto('/')`. */
     // baseURL: 'http://localhost:000',
 /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //  trace: 'on-first-retry',
      // baseURL:"https://opensource-demo.orangehrmlive.com/",
      baseURL:'http://localhost:3000',
      headless:false,
      video:"on",
      screenshot:"on",
      steps:"on",
      launchOptions: {
      },
      trace: "on-first-retry"
  },
  webServer: {  
    command: "yarn dev --port 3000",  
    url: "http://127.0.0.1:3000",  
    reuseExistingServer: !process.env.CI,  
  }, 
  retries:0,
  reporter: [["list"], ["json",{
    outputFile: "jsonReport/jsonReport.json"
  }], ["html",{
        open:"never",
  }]]
};
export default config;
