const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');

Given('I am on the login page', async function () {
  this.driver = await new Builder().forBrowser('chrome').build();
  await this.driver.get('https://app360uat.crm.dynamics.com/main.aspx?appid=f74f22ad-0db4-ec11-9840-002248046196&pagetype=custom&name=abi_homepage_c0e42');
});

When('I enter my username and password', async function () {
  await this.driver.findElement(By.name('username')).sendKeys('myusername');
  await this.driver.findElement(By.name('password')).sendKeys('mypassword');
});

When('I click the login button', async function () {
  await this.driver.findElement(By.css('button[type="submit"]')).click();
});

Then('I should be redirected to the dashboard page', async function () {
  await this.driver.wait(until.urlIs('https://example.com/dashboard'), 5000);
  await this.driver.quit();
});
