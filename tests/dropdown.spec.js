const{test,expect} = require('@playwright/test')

test("Verify Dropdown",async function({page}){

    /*
label
value
index

    */

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#state").selectOption({label:"Arunachal Pradesh"})

    //await page.waitForTimeout(2000)

    await page.locator("#state").selectOption({value:"Assam"})

    //await page.waitForTimeout(2000)

    await page.locator("#state").selectOption({index:4})
/*
    const value = await page.locator("#state").textContent()

    console.log("All dropdown values : "+value)

    await expect(value.includes("Goa")).toBeTruthy()

*/

    let state = await page.$("#state")
    let allElement = await state.$$("option")
    let ddStatus = false

    for(let i=0;i<allElement.length;i++)
    {
        let element = allElement[i]
        let value = await element.textContent()
        console.log("All dropdown values : "+value)

        if(value.includes("Goa"))
        {
            ddStatus = true
            break
        }
    }

    await expect(ddStatus).toBeTruthy()

    await page.locator("#hobbies").selectOption(['Playing', 'Swimming'])

    await page.waitForTimeout(2000)

})

