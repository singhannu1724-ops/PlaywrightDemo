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
- generic [ref=f60e3]:
  - navigation [ref=f60e4]:
    - generic [ref=f60e5]:
      - generic [ref=f60e6] [cursor=pointer]:
        - img "logo" [ref=f60e7]
        - heading "Learn Automation Courses" [level=1] [ref=f60e8]
      - generic [ref=f60e9]:
        - img "menu" [ref=f60e10] [cursor=pointer]
        - generic [ref=f60e11]:
          - generic [ref=f60e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=f60e13] [cursor=pointer]
          - generic [ref=f60e14]:
            - link "Home" [ref=f60e15] [cursor=pointer]:
              - /url: /
            - link "Practise" [ref=f60e17] [cursor=pointer]:
              - /url: /practise
            - button "Log in" [ref=f60e19] [cursor=pointer]
  - generic [ref=f60e21]:
    - generic [ref=f60e24]:
      - heading "Sign Up" [level=2] [ref=f60e25]
      - textbox "Name" [ref=f60e26]
      - textbox "Email" [ref=f60e27]
      - textbox "Password must be atleast 6 characters" [ref=f60e28]:
        - /placeholder: Password
      - heading "Interests" [level=4] [ref=f60e29]
      - generic [ref=f60e30]:
        - generic [ref=f60e31]:
          - checkbox "Rag_chint" [ref=f60e33]
          - generic [ref=f60e34]: Rag_chint
        - generic [ref=f60e35]:
          - checkbox "API12" [ref=f60e37]
          - generic [ref=f60e38]: API12
        - generic [ref=f60e39]:
          - checkbox "API1234" [ref=f60e41]
          - generic [ref=f60e42]: API1234
        - generic [ref=f60e43]:
          - checkbox "automation" [ref=f60e45]
          - generic [ref=f60e46]: automation
        - generic [ref=f60e47]:
          - checkbox "API123" [ref=f60e49]
          - generic [ref=f60e50]: API123
        - generic [ref=f60e51]:
          - checkbox "react" [ref=f60e53]
          - generic [ref=f60e54]: react
        - generic [ref=f60e55]:
          - checkbox "RAG" [ref=f60e57]
          - generic [ref=f60e58]: RAG
        - generic [ref=f60e59]:
          - checkbox "rest assured" [ref=f60e61]
          - generic [ref=f60e62]: rest assured
        - generic [ref=f60e63]:
          - checkbox "appium" [ref=f60e65]
          - generic [ref=f60e66]: appium
        - generic [ref=f60e67]:
          - checkbox "Navjot Category" [ref=f60e69]
          - generic [ref=f60e70]: Navjot Category
      - heading "Gender" [level=4] [ref=f60e71]
      - generic [ref=f60e72]:
        - generic [ref=f60e73]:
          - radio [checked] [ref=f60e74]
          - generic [ref=f60e75]: Male
        - generic [ref=f60e76]:
          - radio [ref=f60e77]
          - generic [ref=f60e78]: Female
      - generic [ref=f60e79]:
        - heading "State:" [level=4] [ref=f60e80]
        - combobox [ref=f60e81]:
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
      - generic [ref=f60e82]:
        - heading "Hobbies:" [level=4] [ref=f60e83]
        - listbox [ref=f60e84]:
          - option "Playing" [ref=f60e85]
          - option "Reading" [ref=f60e86]
          - option "Swimming" [ref=f60e87]
          - option "Singing" [ref=f60e88]
          - option "Dancing" [ref=f60e89]
      - button "Sign up" [disabled] [ref=f60e90]
      - link "Already a user? Login" [ref=f60e91] [cursor=pointer]:
        - /url: /login
    - img "Login" [ref=f60e93]
  - generic [ref=f60e95]:
    - generic [ref=f60e96]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=f60e97]
      - heading "©2023 All rights reserved" [level=2] [ref=f60e98]
    - generic [ref=f60e99] [cursor=pointer]:
      - link [ref=f60e100]:
        - /url: https://youtube.com/MukeshOtwani
      - link [ref=f60e104]:
        - /url: https://twitter.com/MukeshOtwani
      - link [ref=f60e107]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
      - link [ref=f60e110]:
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