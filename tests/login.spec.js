const{test,expect} = require("@playwright/test")
   
   //const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))

   // for multiple data(data driven)
    const testdata = JSON.parse(JSON.stringify(require("../testlogin.json")))

    test.describe("Data driven login test", function () {

        for(const data of testdata)
        {
            test.describe(`Login with users ${data.id}`, function () 
            {

               test("Login to applications", async ({ page }) => {

                       await page.goto("https://freelance-learn-automation.vercel.app/login");

                       await page.locator("//input[@id='email1']").fill(data.username)

                       await page.locator("//input[@id='password1']").fill(data.password)

                   });
       
           })
        }
        
    })

/*
    test.skip("Login to application",async ({page}) => {
     
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("//input[@id='email1']").fill(testdata.username)

    await page.locator("//input[@id='password1']").fill(testdata.password)

    })


*/
   /*
   test.skip("Sign up for application",async ({page}) => {
     
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    //await page.locator("//input[@id='name']").fill(testdata.name)
    await page.locator("//input[@id='name']").fill(testdata.gender)
    //await page.locator("//input[@id='name']").fill(testdata.interest[1])
    //await page.locator("//input[@id='name']").fill(testdata.address.area)

    })
*/