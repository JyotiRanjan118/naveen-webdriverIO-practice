import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function () {
  console.log(`Before opening browser`);
  await browser.url("https://www.google.com");
  await browser.maximizeWindow();
  await browser.pause(2000);
  console.log(`After opening browser`);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>> searchItems: ${searchItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the 1st search result$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> expectedURL: ${expectedURL}`);
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});

/**
 * Web Interactions
 *
 */

/**
 * Web Table
 * What are going to cover
 * 1. Check number of rows and columns
 * 2. Get whole table data
 * 3. Get single row based on a condition
 * 4. Get single column
 * 5. Get single cell value based on another cell
 *
 */
Given(/^A web page is opened$/, async function () {
  await browser.url("https://the-internet.herokuapp.com/tables");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });

  let rowCount = await $$(`//table[@id='table1']/tbody/tr`).length;
  chai.expect(rowCount).to.equal(4);
  console.log(`>> Number of rows: ${rowCount}`);
  let colCount = await $$(`//table[@id='table1']/thead/tr/th`).length;
  console.log(`>> NUmber of cols: ${colCount}`);
  chai.expect(colCount).to.equal(6);

  /**
   * Get whole table data
   * Check number of rows and columns
   * Get whole table data
   */
  // let arr = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let personJob = {
  //     lastname: "",
  //     firstname: "",
  //     email: "",
  //     due: "",
  //     web: "",
  //   };
  //   for (let j = 0; j < colCount; j++) {
  //     let cellVal = await $(
  //       `//table[@id='table1']/tbody/tr[${i + 1}]/td[${j + 1}]`
  //     ).getText();
  //     /**
  //      * Assign the values to object
  //      */
  //     if (cellVal === "") {
  //       if (j === 0) personJob.lastname = cellVal;
  //       if (j === 1) personJob.firstname = cellVal;
  //       if (j === 2) personJob.email = cellVal;
  //       if (j === 3) personJob.due = cellVal;
  //       if (j === 4) personJob.web = cellVal;
  //     }

  //     //console.log(`>> Cell value: ${cellVal}`);
  //   }
  //   arr.push(personJob);
  // }
  // console.log(`Whole table: ${JSON.stringify(arr)}`);

  /**
   * Web table part 2
   * 3. get a single row based on condition
   *
   */
  // let arr = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let personJob = {
  //     lastname: "",
  //     firstname: "",
  //     email: "",
  //     due: "",
  //     web: "",
  //   };
  //   for (let j = 0; j < colCount; j++) {
  //     let cellVal = await $(
  //       `//table[@id='table1']/tbody/tr[${i + 1}]/td[${j + 1}]`
  //     ).getText();
  //     let firstname = await $(
  //       `//table[@id='table1']/tbody/tr[${i + 1}]/td[2]`
  //     ).getText();
  //     if (firstname === "Jason") {
  //       if (j === 0) personJob.lastname = cellVal;
  //       if (j === 1) personJob.firstname = cellVal;
  //       if (j === 2) personJob.email = cellVal;
  //       if (j === 3) personJob.due = cellVal;
  //       if (j === 4) personJob.web = cellVal;
  //     }
  //   }
  //   if (personJob.firstname) {
  //     arr.push(personJob);
  //   }
  // }
  // console.log(`Whole table: ${JSON.stringify(arr)}`);

  /**
   * 4.Get single column
   */
  // let arr = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let cellVal = await $(
  //     `//table[@id='table1']/tbody/tr[${i + 1}]/td[4]`
  //   ).getText();
  //   arr.push(cellVal);
  // }
  // console.log(`>> Single col value: ${arr}`);

  /**
   * 5. Get single cell value based on another cell
   */
  let arr = [];
  for (let i = 0; i < rowCount; i++) {
    //for (let j = 0; j < colCount; j++) {
    let price = await (
      await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[4]`)
    ).getText();
    let firstname = await (
      await $(`//table[@id='table1']/tbody/tr[${i + 1}]/td[2]`)
    ).getText();
    if (+price.replace("$", "") > 50) {
      arr.push(firstname);
    }
    //}
  }
  console.log(`>> Single col value: ${arr}`);
});
