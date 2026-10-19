# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegenBranded.spec.js >> test
- Location: tests\codegenBranded.spec.js:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - locator resolved to <html>…</html>
    - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    - waiting for navigation to finish...

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username": admin
- text:  Password
- textbox "Password": admin123
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  5  |   await page.getByRole('textbox', { name: 'Username' }).click();
  6  |   await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  7  |   await page.getByRole('textbox', { name: 'Password' }).click();
  8  |   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  9  |   await page.getByRole('button', { name: 'Login' }).click();
> 10 |   await expect(page).toHaveURL(/dashboard/)
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  11 |   await page.getByAltText("profile picture").click()
  12 |   await page.getByRole('menuitem', { name: 'Logout' }).click();
  13 |   await expect(page).toHaveURL(/login/)
  14 | 
  15 | });
```