import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Automationteststore page is opened$/, async () => {
  console.log(`Before opening browser`);

  //console.log(`Test username: ${process.env.TEST_USERNAME}`);

  await browser.url("https://automationteststore.com/");
  await browser.maximizeWindow();
  await browser.pause(2000);
  console.log(`After opening browser`);
});

Then(/^Select on first link$/, async () => {
  const skincareLinks = await $$("//a[contains(text(), 'Skincare')]");
  await skincareLinks[1].click();
  const skincareProducts_Header_Links = await $$(".fixed_wrapper .prdocutname");

  const itemPrices = [];

  for (const header of skincareProducts_Header_Links) {
    const tempHeaderText = await header.getText();

    if (
      tempHeaderText.toLowerCase() == "creme precieuse nuit 50ml" ||
      tempHeaderText.toLowerCase() == "total moisture facial cream"
    ) {
      const atrr = await header.getAttribute("href");
      // console.log(atrr);
      const itemID = atrr.split("id=").pop();
      console.log(itemID);

      await $('a[data-id="' + itemID + '"]').click();

      //a[@data-id="66"]/following-sibling::div/div[@class='oneprice']
      //a[@data-id="93"]/following-sibling::div/div[@class='pricenew']

      itemPrices.push(
        await $(
          "//a[@data-id='" + itemID +"']/following-sibling::div/div[@class='pricenew']" +
            "| //a[@data-id='" +
            itemID +
            "']/following-sibling::div/div[@class='oneprice']"
        ).getText()
      );
      console.log(...itemPrices);
    }

    const formattedItemPrices = [];

    itemPrices.forEach((price) => {
      formattedItemPrices.push(price.replace("$", ""));
    });

    var itemsTotal = 0;
    formattedItemPrices.forEach((price) => (itemsTotal += parseFloat(price)));
    console.log("Item total : " + itemsTotal);
  }

  await $("//span[text()='Cart']").click();
  await expect(browser).toHaveUrlContaining("checkout");

  let tempShippingRate = await $(
    "//span[text()='Flat Shipping Rate:']/../following-sibling::td"
  ).getText();
  var shippingRate = tempShippingRate.replace("$", "");
  itemsTotal = itemsTotal + parseFloat(shippingRate);
  console.log("Items Total + Shipping Rate: " + itemsTotal);

  var cartTotal = await (
    await $("//span[text()='Total:']/../following-sibling::td")
  ).getText();
  cartTotal = cartTotal.replace("$", "");
  expect(itemsTotal).toEqual(parseFloat(cartTotal));
  await browser.pause(5000);

  await browser.pause(3000);
});

Then(/^add product and validate cart$/, async () => {});
