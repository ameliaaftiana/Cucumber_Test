import { setDefaultTimeout, Given, When, Then } from "@cucumber/cucumber";
import { Builder, By, until } from "selenium-webdriver";
import { expect } from "chai";

setDefaultTimeout(30000);

let driver;

// === LOGIN SCENARIOS ===

Given("the user is on the login page", async function () {
  driver = new Builder().forBrowser("chrome").build();
  await driver.get("https://www.saucedemo.com/");
});

When("the user enters a valid username and password", async function () {
  await driver.findElement(By.id("user-name")).sendKeys("standard_user");
  await driver.findElement(By.id("password")).sendKeys("secret_sauce");
});

When("the user enters an invalid username and password", async function () {
  await driver.findElement(By.id("user-name")).sendKeys("invalid_user");
  await driver.findElement(By.id("password")).sendKeys("invalid_password");
});

When("the user clicks the login button", async function () {
  await driver.findElement(By.id("login-button")).click();
});

Then("the user should see a success message", async function () {
  const message = await driver
    .wait(until.elementLocated(By.className("title")), 5000)
    .getText();
  expect(message).to.equal("Products");

  const item = await driver.findElement(By.id("item_4_img_link"));
  expect(item).to.exist;
});

Then("the user should see a failed message", async function () {
  const errorMessage = await driver
    .wait(until.elementLocated(By.css('[data-test="error"]')), 5000)
    .getText();
  expect(errorMessage).to.include("Username and password do not match");
  await driver.quit();
});

// === SHOPPING CART SCENARIOS ===

Given("the user is on the item page", async function () {
  // Login first if not already logged in
  try {
    await driver.findElement(By.className("title"));
  } catch (error) {
    // If not on products page, login first
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();
    await driver.wait(until.elementLocated(By.className("title")), 5000);
  }
});

When("the user add item to the cart", async function () {
  // Add first item to cart
  await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
});

When("the user in the item list", async function () {
  // Navigate to cart
  await driver.findElement(By.className("shopping_cart_link")).click();
  await driver.wait(until.elementLocated(By.className("title")), 5000);
});

Then("item should be seen in the item page", async function () {
  const cartTitle = await driver.findElement(By.className("title")).getText();
  expect(cartTitle).to.equal("Your Cart");

  const cartItem = await driver.findElement(
    By.className("inventory_item_name")
  );
  expect(cartItem).to.exist;

  const itemName = await cartItem.getText();
  expect(itemName).to.equal("Sauce Labs Backpack");
});

When("the user remove item to the cart", async function () {
  // Remove item from cart
  await driver.findElement(By.id("remove-sauce-labs-backpack")).click();
});

Then("item shouldn't be seen in the item page", async function () {
  // Check if cart is empty
  const cartItems = await driver.findElements(By.className("cart_item"));
  expect(cartItems).to.have.lengthOf(0);
  await driver.quit();
});

// === ADDITIONAL SCENARIOS ===

Given("the user is logged in successfully", async function () {
  await driver.findElement(By.id("user-name")).sendKeys("standard_user");
  await driver.findElement(By.id("password")).sendKeys("secret_sauce");
  await driver.findElement(By.id("login-button")).click();
  await driver.wait(until.elementLocated(By.className("title")), 5000);
});

When("the user clicks the logout button", async function () {
  // Open menu
  await driver.findElement(By.id("react-burger-menu-btn")).click();
  await driver.sleep(1000); // Wait for menu animation

  // Click logout
  await driver.findElement(By.id("logout_sidebar_link")).click();
});

Then("the user should be redirected to login page", async function () {
  await driver.wait(until.elementLocated(By.id("login-button")), 5000);
  const loginButton = await driver.findElement(By.id("login-button"));
  expect(loginButton).to.exist;
  await driver.quit();
});

When("the user clicks on a product", async function () {
  await driver.findElement(By.id("item_4_title_link")).click();
});

Then("the user should see product details page", async function () {
  await driver.wait(
    until.elementLocated(By.className("inventory_details_name")),
    5000
  );
  const productName = await driver.findElement(
    By.className("inventory_details_name")
  );
  expect(productName).to.exist;
});

Then("the user should see product information", async function () {
  const productDescription = await driver.findElement(
    By.className("inventory_details_desc")
  );
  const productPrice = await driver.findElement(
    By.className("inventory_details_price")
  );

  expect(productDescription).to.exist;
  expect(productPrice).to.exist;

  const priceText = await productPrice.getText();
  expect(priceText).to.include("$");

  await driver.quit();
});
