# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: waitforloadstate.spec.js >> working with load state
- Location: tests\waitforloadstate.spec.js:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 10
Received: 0
```

# Page snapshot

```yaml
- generic [ref=f32e3]:
  - navigation [ref=f32e4]:
    - generic [ref=f32e5]:
      - generic [ref=f32e6] [cursor=pointer]:
        - img "logo" [ref=f32e7]
        - heading "Learn Automation Courses" [level=1] [ref=f32e8]
      - generic [ref=f32e9]:
        - img "menu" [ref=f32e10] [cursor=pointer]
        - generic [ref=f32e11]:
          - generic [ref=f32e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f32e13] [cursor=pointer]
          - generic [ref=f32e14]:
            - link "Home" [ref=f32e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f32e17] [cursor=pointer]:
              - /url: /practise
            - button "Log in" [ref=f32e19] [cursor=pointer]
  - generic [ref=f32e21]:
    - generic [ref=f32e24]:
      - heading "Sign Up" [level=2] [ref=f32e25]
      - textbox "Name" [ref=f32e26]
      - textbox "Email" [ref=f32e27]
      - textbox "Password must be atleast 6 characters" [ref=f32e28]:
        - /placeholder: Password
      - heading "Interests" [level=4] [ref=f32e29]
      - generic [ref=f32e30]:
        - generic [ref=f32e31]:
          - checkbox "Rag_chint" [ref=f32e33]
          - generic [ref=f32e34]: Rag_chint
        - generic [ref=f32e35]:
          - checkbox "API12" [ref=f32e37]
          - generic [ref=f32e38]: API12
        - generic [ref=f32e39]:
          - checkbox "API1234" [ref=f32e41]
          - generic [ref=f32e42]: API1234
        - generic [ref=f32e43]:
          - checkbox "automation" [ref=f32e45]
          - generic [ref=f32e46]: automation
        - generic [ref=f32e47]:
          - checkbox "API123" [ref=f32e49]
          - generic [ref=f32e50]: API123
        - generic [ref=f32e51]:
          - checkbox "react" [ref=f32e53]
          - generic [ref=f32e54]: react
        - generic [ref=f32e55]:
          - checkbox "RAG" [ref=f32e57]
          - generic [ref=f32e58]: RAG
        - generic [ref=f32e59]:
          - checkbox "rest assured" [ref=f32e61]
          - generic [ref=f32e62]: rest assured
        - generic [ref=f32e63]:
          - checkbox "appium" [ref=f32e65]
          - generic [ref=f32e66]: appium
        - generic [ref=f32e67]:
          - checkbox "Navjot Category" [ref=f32e69]
          - generic [ref=f32e70]: Navjot Category
      - heading "Gender" [level=4] [ref=f32e71]
      - generic [ref=f32e72]:
        - generic [ref=f32e73]:
          - radio [checked] [ref=f32e74]
          - generic [ref=f32e75]: Male
        - generic [ref=f32e76]:
          - radio [ref=f32e77]
          - generic [ref=f32e78]: Female
      - generic [ref=f32e79]:
        - heading "State:" [level=4] [ref=f32e80]
        - combobox [ref=f32e81]:
          - option "Andhra Pradesh"
          - option "Arunachal Pradesh"
          - option "Assam"
          - option "Bihar"
          - option "Chhattisgarh"
          - option "Goa"
          - option "Gujarat"
          - option "Haryana"
          - option "Himachal Pradesh"
          - option "Jammu and Kashmir"
          - option "Jharkhand"
          - option "Karnataka"
          - option "Kerala"
          - option "Madhya Pradesh"
          - option "Maharashtra"
          - option "Manipur"
          - option "Meghalaya"
          - option "Mizoram"
          - option "Nagaland"
          - option "Odisha"
          - option "Punjab"
          - option "Rajasthan"
          - option "Sikkim"
          - option "Tamil Nadu"
          - option "Telangana"
          - option "Tripura"
          - option "Uttarakhand"
          - option "Uttar Pradesh"
          - option "West Bengal"
          - option "Andaman and Nicobar Islands"
          - option "Chandigarh"
          - option "Dadra and Nagar Haveli"
          - option "Daman and Diu"
          - option "Delhi"
          - option "Lakshadweep"
          - option "Puducherry"
      - generic [ref=f32e82]:
        - heading "Hobbies:" [level=4] [ref=f32e83]
        - listbox [ref=f32e84]:
          - option "Playing" [ref=f32e85]
          - option "Reading" [ref=f32e86]
          - option "Swimming" [ref=f32e87]
          - option "Singing" [ref=f32e88]
          - option "Dancing" [ref=f32e89]
      - button "Sign up" [disabled] [ref=f32e90]
      - link "Already a user? Login" [ref=f32e91] [cursor=pointer]:
        - /url: /login
    - img "Login" [ref=f32e93]
  - generic [ref=f32e95]:
    - generic [ref=f32e96]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f32e97]
      - heading "©2023 All rights reserved" [level=2] [ref=f32e98]
    - generic [ref=f32e99] [cursor=pointer]:
      - link [ref=f32e100]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f32e104]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f32e107]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f32e110]:
        - /url: https://www.facebook.com/groups/256655817858291
```

# Test source

```ts
  1  | const{test,expect} = require("@playwright/test")
  2  | 
  3  |     test("working with load state",async ({ page }) => {
  4  | 
  5  |             await page.goto("https://freelance-learn-automation.vercel.app/login")
  6  | 
  7  |             await page.getByText("New user? Signup").click()
  8  | 
  9  |             await page.waitForLoadState("networkidle")
  10 | 
  11 |             const count = await page.locator("//input[@type='checkbox']").count()
  12 | 
> 13 |             expect(count).toBe(10)
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  14 | 
  15 |         })
```