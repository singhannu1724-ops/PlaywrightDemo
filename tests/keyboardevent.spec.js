const{test,expect} = require("@playwright/test")

test("Keyboard events", async function({page}){

    await page.goto("https://www.google.com/")

    await page.locator("//textarea[@id='ti6dpd']").focus()

    await page.keyboard.type("Mukesh otwani!")

    await page.keyboard.press("ArrowLeft")

    await page.keyboard.down("Shift")

    for (let i = 0; i < "otwani".length; i++) {
        await page.keyboard.press("ArrowLeft")
    }
    await page.keyboard.up("Shift")

    await page.keyboard.press("Backspace")

/*
    await page.locator("//textarea[@id='ti6dpd']").type("Playwright")

    // multiple keys
    await page.keyboard.press("Control+A")

    await page.keyboard.press("Control+C")

    await page.keyboard.press("Backspace")

    await page.keyboard.press("Control+V")

    // single key
    //await page.keyboard.press("Enter")

    */

})