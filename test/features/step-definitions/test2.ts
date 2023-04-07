import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"
import dataDenerator from "../../../utils/data-denerator";
const commands = require("../../../utils/commands");
const DataGenerator = require("../../../utils/data-denerator")


Given(/^contact us page is opened$/, async () => {
    console.log(`Before opening browser`);
    await browser.url("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    await browser.maximizeWindow();
    await browser.pause(2000);
    console.log(`After opening browser`);
  });

Then(/^fill customer details and click on submit$/, async () => {
    const firstName = await $('//*[@name="first_name"]');
        const lastName = await $('//*[@name="last_name"]');
        const emailAddress = await $('//*[@name="email"]');
        const message = await $('//*[@name="message"]');
        const submitButton = await $('//input[@value="SUBMIT"]');

        await firstName.setValue("Joe");
        await lastName.setValue("Blogs");
        //await emailAddress.setValue("joe_blogs123@mail.com");
        await emailAddress.setValue(dataDenerator.generateRandomString()+"@gmail.com");      //Generate random string
        await browser.pause(1000);
        await message.setValue("Hello how are you?");

        //await browser.debug();
        //await submitButton.click();
       await commands.waitAndClick(submitButton);       //implemented
  });

// Then('valid submission - submit all information', async () =>{
   
    
// });

// Then('invalid submission - dont submit all information', async() => {
   
// });
  