$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/orangehrm/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login funtionality",
  "description": "As a user,I want to login to orangehrm website",
  "id": "login-funtionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15685925700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-funtionality;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 482707500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 318846500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 210287100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12630217400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 205143300,
  "status": "passed"
});
formatter.after({
  "duration": 967037800,
  "status": "passed"
});
formatter.before({
  "duration": 14014378800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should not login successfully with in valid credentials",
  "description": "",
  "id": "login-funtionality;user-should-not-login-successfully-with-in-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"admin1236789\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should not login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 58400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 1012516300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin1236789",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 826587300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1551856500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNotLoginSuccessfully()"
});
formatter.result({
  "duration": 213544200,
  "status": "passed"
});
formatter.after({
  "duration": 2030224300,
  "status": "passed"
});
formatter.before({
  "duration": 12327749200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should fail the test credentials",
  "description": "",
  "id": "login-funtionality;user-should-fail-the-test-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should not login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 368505900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 300557400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12373050500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNotLoginSuccessfully()"
});
formatter.result({
  "duration": 30136698500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#spanMessage\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-7HUNRUID\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\srini\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61986}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 92fa8cd7a9f9551752953c0904de344e\n*** Element info: {Using\u003did, value\u003dspanMessage}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.orangehrm.utility.Utility.getTextFromElement(Utility.java:55)\r\n\tat com.orangehrm.pages.HomePage.getLoginErrorMessage(HomePage.java:63)\r\n\tat com.orangehrm.cucumber.stepdefs.MyStepdefs.iShouldNotLoginSuccessfully(MyStepdefs.java:41)\r\n\tat ✽.Then I should not login successfully(src/test/java/com/orangehrm/resources/featurefile/login.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2531671900,
  "status": "passed"
});
formatter.uri("src/test/java/com/orangehrm/resources/featurefile/pim.feature");
formatter.feature({
  "line": 1,
  "name": "Employee Records Display",
  "description": "As a user I am able to see the Employee information on PIM Page",
  "id": "employee-records-display",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14410703300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to view valid Employee Records",
  "description": "",
  "id": "employee-records-display;user-should-be-able-to-view-valid-employee-records",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Welcome Admin Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select Employee Name \" Fiona Grace\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am able to see the Name in the results",
  "keyword": "Then "
});
formatter.match({
  "location": "PimDisplay.iAmOnWelcomeAdminPage()"
});
formatter.result({
  "duration": 12349747900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Fiona Grace",
      "offset": 24
    }
  ],
  "location": "PimDisplay.iSelectEmployeeName(String)"
});
formatter.result({
  "duration": 1267002600,
  "status": "passed"
});
formatter.match({
  "location": "PimDisplay.iClickOnSearchButton()"
});
formatter.result({
  "duration": 649010200,
  "status": "passed"
});
formatter.match({
  "location": "PimDisplay.iAmAbleToSeeTheNameInTheResults()"
});
formatter.result({
  "duration": 144911300,
  "status": "passed"
});
formatter.after({
  "duration": 1184862200,
  "status": "passed"
});
formatter.before({
  "duration": 12242043700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should not be able to view Invalid Employee Records",
  "description": "",
  "id": "employee-records-display;user-should-not-be-able-to-view-invalid-employee-records",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Welcome Admin Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I select Employee Name \" Govind Maharaj Prabhudeva\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get No Records Message in the results",
  "keyword": "Then "
});
formatter.match({
  "location": "PimDisplay.iAmOnWelcomeAdminPage()"
});
formatter.result({
  "duration": 11953273000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Govind Maharaj Prabhudeva",
      "offset": 24
    }
  ],
  "location": "PimDisplay.iSelectEmployeeName(String)"
});
formatter.result({
  "duration": 1761864300,
  "status": "passed"
});
formatter.match({
  "location": "PimDisplay.iClickOnSearchButton()"
});
formatter.result({
  "duration": 820158200,
  "status": "passed"
});
formatter.match({
  "location": "PimDisplay.iGetNoRecordsMessageInTheResults()"
});
formatter.result({
  "duration": 229379700,
  "status": "passed"
});
formatter.after({
  "duration": 2407485000,
  "status": "passed"
});
});