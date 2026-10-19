# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegenBranded.spec.js >> test
- Location: tests\codegenBranded.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /login/
Received string:  ""

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
  10 |   await expect(page).toHaveURL(/dashboard/)
  11 |   await page.getByAltText("profile picture").click()
  12 |   await page.getByRole('menuitem', { name: 'Logout' }).click();
> 13 |   await expect(page).toHaveURL(/login/)
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  14 | 
  15 | });
```