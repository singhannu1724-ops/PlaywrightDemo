const {test,expect} = require('@playwright/test')

test("Mouse Hover",async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByPlaceholder("Enter Email").type("admin@gmail.com")

    await page.getByPlaceholder("Enter Password").type("admin123")

    await page.getByRole("button", { name: "Sign in" }).click()

    await page.locator("//button[text()='Cart']").hover()



})