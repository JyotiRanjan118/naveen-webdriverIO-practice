import { Given } from "@wdio/cucumber-framework";
import chai from "chai";
import dotenv from "dotenv"
dotenv.config()

Given(/^Login to inventory web app$/, async function () {

  console.log(`Test username: ${process.env.TEST_USERNAME}`);

  //await browser.url("https://www.saucedemo.com/");

  //@ts-ignore
  await browser.url(browser.config.sauuceDemoURL);
  // console.log(`>> Test config values :${JSON.stringify(browser.config)}`);
  
  await browser.maximizeWindow();
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });

  await $(`#user-name`).setValue("standard_user");
  await $(`#password`).setValue("secret_sauce");
  // await $(`#user-name`).setValue(process.env.TEST_STD_USERNAME);
  // await $(`#password`).setValue(process.env.TEST_STD_PASSWORD);
  await $(`#login-button`).click();
  await browser.pause(3000);

  
  this.appid = "ABC123"
});
