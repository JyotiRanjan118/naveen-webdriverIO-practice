import { Then } from "@wdio/cucumber-framework";
import chai from "chai";

Then(/^Inventory page should (.*)\s?list (.*)$/, async function (negativecheck, noOfProducts) {
  console.log(`>> The appid: ${this.appid}`);
  if (!noOfProducts) throw Error(`Invalid number provided: ${noOfProducts}`);
  let eleArr = await $$(`.inventory_item_name`);
  chai.expect(eleArr.length).to.equal(parseInt(noOfProducts));
});

/**
 * Get price list
 * 2. Convert string to number
 * 3. Assert if any value is <=0;
 */
Then(/^Validate all products have valid price$/, async function () {
  let eleArr = await $$(`.inventory_item_price`);
  let priceStringArr = [];
  // for (let i = 0; i < eleArr.length; i++) {
  //   let priceStar = await eleArr[i].getText();
  //   priceStringArr.push(priceStar);
  // }

  for (let priceStar of eleArr) {
    let priceString = await priceStar.getText();
    priceStringArr.push(priceString);
  }
  console.log(`>> Price with ${priceStringArr}`);

  /**
   * Convert String to number
   */

  let priceNumArray = priceStringArr.map((ele) => +ele.replace("$", ""));
  console.log(`>> Price in numbers: ${priceNumArray}`);

  /**
   * Assert if any value is <=0;
   */

  let invalidPriceArr = priceNumArray.filter((ele) => ele <= 0);
  chai.expect(invalidPriceArr.length).to.equal(0);
});
