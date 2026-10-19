# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handlealert.spec.js >> Handle Alert
- Location: tests\handlealert.spec.js:3:4

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://the-internet.herokuapp.com/javascript_alerts", waiting until "load"

```

# Test source

```ts
  1  | const {test,expect} = require("@playwright/test")
  2  | 
  3  |    test("Handle Alert", async ({ page }) => {
  4  | 
> 5  |            await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
     |                       ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6  | 
  7  |            page.on('dialog', async (d) => {
  8  | 
  9  |                expect(d.type()).toContain("alert")
  10 | 
  11 |                expect(d.message()).toContain("I am a JS Alert")
  12 |                await d.accept()
  13 | 
  14 |            })
  15 | 
  16 |            await page.locator("//button[text()='Click for JS Alert']").click()
  17 |        })
  18 | 
  19 |        test("Handle confirm box", async ({ page }) => {
  20 | 
  21 |            await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
  22 | 
  23 |            page.on('dialog', async (dialogWindow) => {
  24 | 
  25 |                expect(dialogWindow.type()).toContain("confirm")
  26 | 
  27 |                expect(dialogWindow.message()).toContain("I am a JS Confirm")
  28 | 
  29 |                await dialogWindow.dismiss()
  30 | 
  31 |               //await dialogWindow.accept()
  32 | 
  33 |            })
  34 | 
  35 |            await page.locator("//button[text()='Click for JS Confirm']").click()
  36 |        })
  37 | 
  38 |        test("Handle prompt", async ({ page }) => {
  39 | 
  40 |            await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
  41 | 
  42 |            page.on('dialog', async (dialogWindow) => {
  43 | 
  44 |                expect(dialogWindow.type()).toContain("prompt")
  45 | 
  46 |                expect(dialogWindow.message()).toContain("I am a JS prompt")
  47 | 
  48 | 
  49 |               await dialogWindow.accept("Anamika")
  50 | 
  51 |            })
  52 | 
  53 |            await page.locator("//button[text()='Click for JS Prompt']").click()
  54 | 
  55 |            await page.waitForTimeout(5000)
  56 |        })
```