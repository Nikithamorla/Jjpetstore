$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JPetStore_Login3.feature");
formatter.feature({
  "line": 2,
  "name": "JPetStoreLogin with multiple cart items",
  "description": "",
  "id": "jpetstorelogin-with-multiple-cart-items",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@multipleitems"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Adding multiple items to cart and making payment",
  "description": "",
  "id": "jpetstorelogin-with-multiple-cart-items;adding-multiple-items-to-cart-and-making-payment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "open browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter valid \"\u003cusernameNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user selects an item from menu",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user selects multiple items",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "payment has to be done",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user has to sign out",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "jpetstorelogin-with-multiple-cart-items;adding-multiple-items-to-cart-and-making-payment;",
  "rows": [
    {
      "cells": [
        "usernameNumber"
      ],
      "line": 17,
      "id": "jpetstorelogin-with-multiple-cart-items;adding-multiple-items-to-cart-and-making-payment;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 18,
      "id": "jpetstorelogin-with-multiple-cart-items;adding-multiple-items-to-cart-and-making-payment;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Adding multiple items to cart and making payment",
  "description": "",
  "id": "jpetstorelogin-with-multiple-cart-items;adding-multiple-items-to-cart-and-making-payment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@multipleitems"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "open browser and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter valid \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user able to login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user selects an item from menu",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user selects multiple items",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "payment has to be done",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user has to sign out",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.open_browser_and_start_application()"
});
formatter.result({
  "duration": 23933081755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "StepDefinition.i_enter_valid(String)"
});
formatter.result({
  "duration": 1242729451,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Sign In\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.92)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-H706BJI\u0027, ip: \u0027192.168.43.57\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\acer\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64267}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 75cc552311b1caa4f2082498d917dc51\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Sign In\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy26.click(Unknown Source)\r\n\tat miniproject_pages.JPetStore_Login.clickSignIn(JPetStore_Login.java:44)\r\n\tat miniproject_StepDefinition.StepDefinition.i_enter_valid(StepDefinition.java:54)\r\n\tat ✽.When I enter valid \"1\"(JPetStore_Login3.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_an_item_from_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_multiple_items()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.payment_has_to_be_done()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_has_to_sign_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.application_should_be_closed()"
});
formatter.result({
  "status": "skipped"
});
});