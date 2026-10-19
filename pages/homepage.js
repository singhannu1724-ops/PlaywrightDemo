 const {expect} = require("@playwright/test")

class HomePage
{

    constructor(page)
    {
   
        this.page=page
        this.cartoption="//button[text()='Cart']"
        this.menu="//img[@alt='menu']"
        this.logoutoption="//button[text()='Sign out']"

    }

    async verifyCartOption()
    {
       await expect(this.page.locator(this.cartoption)).toBeVisible()
    }

    async logoutFromApplication()
    {
        await this.page.click(this.menu)

        await this.page.click(this.logoutoption)
    }
}
module.exports=HomePage;