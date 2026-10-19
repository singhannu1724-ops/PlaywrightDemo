const {test,expect} = require('@playwright/test')

test("Verify Error message", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").type("Admin")

    await page.getByPlaceholder("Password").type("admin12")

    await page.locator("(//button[normalize-space()='Login'])[1]").click()

    const errorMessage = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()

    console.log("Error message is: "+errorMessage)

    expect(errorMessage.includes("Invalid")).toBeTruthy()

    expect(errorMessage==='Invalid credentials').toBeTruthy()

})
