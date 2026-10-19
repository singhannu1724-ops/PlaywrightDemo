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

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "Search" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "Admin" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "PIM" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "Leave" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "Time" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "My Info" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "Performance" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "Buzz" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: Abdul Architect
              - generic [ref=f1e128]: 
            - menu [ref=f1e129]:
              - listitem [ref=f1e130]:
                - menuitem "About" [ref=f1e131] [cursor=pointer]
              - listitem [ref=f1e132]:
                - menuitem "Support" [ref=f1e133] [cursor=pointer]
              - listitem [ref=f1e134]:
                - menuitem "Change Password" [ref=f1e135] [cursor=pointer]
              - listitem [ref=f1e136]:
                - menuitem "Logout" [ref=f1e137] [cursor=pointer]
      - navigation "Topbar Menu" [ref=f1e139]:
        - list [ref=f1e140]:
          - button "" [ref=f1e142] [cursor=pointer]
  - generic [ref=f1e144]:
    - generic [ref=f1e146]:
      - generic [ref=f1e148]:
        - generic [ref=f1e150]:
          - generic [ref=f1e151]: 
          - paragraph [ref=f1e152]: Time at Work
        - separator [ref=f1e153]
      - generic [ref=f1e157]:
        - generic [ref=f1e159]:
          - generic [ref=f1e160]: 
          - paragraph [ref=f1e161]: My Actions
        - separator [ref=f1e162]
        - generic [ref=f1e164]:
          - img "No Content" [ref=f1e165]
          - paragraph [ref=f1e166]: No Pending Actions to Perform
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: Quick Launch
        - separator [ref=f1e173]
      - generic [ref=f1e177]:
        - generic [ref=f1e179]:
          - generic [ref=f1e180]: 
          - paragraph [ref=f1e181]: Buzz Latest Posts
        - separator [ref=f1e182]
      - generic [ref=f1e186]:
        - generic [ref=f1e187]:
          - paragraph [ref=f1e192]: Employees on Leave Today
          - generic [ref=f1e193] [cursor=pointer]: 
        - separator [ref=f1e194]
      - generic [ref=f1e198]:
        - generic [ref=f1e200]:
          - generic [ref=f1e201]: 
          - paragraph [ref=f1e202]: Employee Distribution by Sub Unit
        - separator [ref=f1e203]
      - generic [ref=f1e207]:
        - generic [ref=f1e209]:
          - generic [ref=f1e210]: 
          - paragraph [ref=f1e211]: Employee Distribution by Location
        - separator [ref=f1e212]
    - generic [ref=f1e215]:
      - paragraph [ref=f1e216]: OrangeHRM OS 5.9
      - paragraph [ref=f1e217]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e218] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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