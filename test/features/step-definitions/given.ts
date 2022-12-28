import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Login to inventory web app$/, async function () {
  await browser.url("https://www.saucedemo.com/");
  await browser.maximizeWindow();
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });

  await $(`#user-name`).setValue("standard_user");
  await $(`#password`).setValue("secret_sauce");
  await $(`#login-button`).click();
  await browser.pause(3000);
});
