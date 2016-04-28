'use strict';

var webdriver = require('selenium-webdriver'),
    settings = require('./settings'),
    By = webdriver.By,
    until = webdriver.until;

module.exports = {

  run: function(browserName) {
    var driver = new webdriver.Builder().forBrowser(browserName).usingServer(settings.hub_url).build();
    driver.get('http://www.google.com/ncr');
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnG')).click();
    driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    driver.quit();
  }
};
