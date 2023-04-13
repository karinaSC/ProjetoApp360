
const { By, Key } = require('selenium-webdriver');


class LoginPage {
     constructor(driver) {
  this.driver = driver;
  this.url = 'https://app360qas.crm.dynamics.com/main.aspx?appid=7a259cb5-63b0-ec11-9841-000d3a3367aa&pagetype=custom&name=abi_homepage_c0e42';
  this.usernameInput = By.id('i0116');
  this.passwordInput = By.id('i0118');
  this.loginButton = By.id('idSIButton9');
 }

  visit() {
  this.driver.get(this.url);
 }


 setUsername(username) {
   /*let attr = await driver.switchTo().activeElement().
      console.log(`${attr}`)*/
   const element =  this.driver.findElement(this.usernameInput);
    element.clear();
    element.sendKeys(username);
}



  setPassword(password) {
  const element =  this.driver.findElement(this.passwordInput);
   element.clear();
   element.sendKeys(password);
 }


  clickLoginButton() {
  this.driver.findElement(this.loginButton).sendKeys(Key.RETURN);
 }
}



module.exports = LoginPage;