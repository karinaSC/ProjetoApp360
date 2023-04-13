  const { Builder } = require('selenium-webdriver');
  const chrome = require('selenium-webdriver/chrome');
  const chromedriver = require('chromedriver');
  var expect = require('chai').expect;
  const { describe, it, beforeEach, afterEach } = require('mocha');
  const LoginPage = require('../pages/PageLogin');
  const { assert } = require('chai');


  //chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

  describe('Login', function () {

    beforeEach( function () {
      driver =  new Builder().forBrowser('chrome').build();
      loginPage = new LoginPage(driver);  loginPage.visit();
      console.log("passei aqui")
      return  driver.sleep( 30000 );
    });

  /*
  afterEach(async function () {
    await driver.quit();
  });

  */
  // Define the test case
  it( 'enviar e-mail',  function() {
    someAsyncOperation(function() {
    loginPage.setUsername('SRV_GHQ_ITSEngQA@AAAAAAAAA');
    return  driver.sleep( 30000 ).done();
    ;

    })
  

  });

  });

  

  /*
  await loginPage.setPassword(']7}fk3tbuRP~G3^cf?VChd5Qe3y{-]'); 
    await loginPage.clickLoginButton();
  */
