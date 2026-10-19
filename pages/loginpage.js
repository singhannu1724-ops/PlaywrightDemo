 const {expect} = require("@playwright/test")

class LoginPage
{

    constructor(page)
    {

        this.page=page
        this.header="//h2[text()='Sign In']"
        this.username="#email1"
        this.password="//input[@id='password1']"
        this.loginbtn="//button[text()='Sign in']"
    }

    async loginToApplication()
    {
        
        await this.page.fill(this.username,"admin@gmail.com")
        await this.page.fill(this.password,"admin123")
        await this.page.click(this.loginbtn)
    }

    async VerifyLogin()
    {
        await expect(this.page.locator(this.header)).toBeVisible()
    }
}

module.exports=LoginPage;