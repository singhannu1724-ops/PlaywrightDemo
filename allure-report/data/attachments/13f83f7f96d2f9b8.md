# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangehrm_Login.spec.js >> Valid Login
- Location: tests\orangehrm_Login.spec.js:5:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  ""
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - waiting for navigation to finish...

```

# Test source

```ts
  1  | const{test,expect} =require('@playwright/test')
  2  | 
  3  | //test.use({viewport: {width: 1000, height: 500}})
  4  | 
  5  | test("Valid Login",async function({page}){
  6  | 
  7  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  8  | 
  9  |    console.log(await page.viewportSize().width)
  10 |    console.log(await page.viewportSize().height)
  11 | 
  12 | 
  13 |     await page.getByPlaceholder("Username").type("Admin", { delay: 100 })
  14 | 
  15 |     await page.locator("input[name=password]").type("admin123" , { delay: 100 })
  16 | 
  17 |     await page.locator("//button[@type='submit']").click()
  18 | 
> 19 |     await expect(page).toHaveURL(/dashboard/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  20 | 
  21 |     await page.getByAltText("profile picture").click()
  22 | 
  23 |     await page.getByText("Logout").click()
  24 | 
  25 |     await expect(page).toHaveURL(/login/); 
  26 | 
  27 | })
```