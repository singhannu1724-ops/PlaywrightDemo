const{test,expect} = require('@playwright/test')

test("file upload", async ({page}) => {


    await page.goto("https://the-internet.herokuapp.com/upload")
    
    //await page.waitForTimeout(5000)
    //From the file path
    //await page.locator("#file-upload").setInputFiles("/Users/anami/OneDrive/Desktop/test.png");

    //from the project folder
    await page.locator("#file-upload").setInputFiles("./upload/test.png");

    await page.locator("//input[@id='file-submit']").click()

    await page.waitForTimeout(3000)

    expect(await page.locator("//h3")).toHaveText("File Uploaded!")

})