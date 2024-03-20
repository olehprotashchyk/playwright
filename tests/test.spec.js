const { test, expect } = require('playwright/test')

const login = 'standard_user';
const password = 'secret_sauce';

test.describe('Playwright Home Task 1', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto('/');
    await page.locator("#user-name").click();
    await page.locator("#user-name").fill(login);
    await page.locator("#password").click();
    await page.locator("#password").fill(password);
    await page.locator("#login-button").click();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Test 1 - Perform Login:', async ({ page }) => {
    await expect(page.locator(".title")).toHaveText('Products');
    await expect(page.locator('#shopping_cart_container > a')).toBeVisible();
    await expect(page.locator('#inventory_container > div > div:nth-child(2)')).toBeVisible();
  })

  test('Test 2 - Add product to the cart:', async ({ page }) => {
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await expect(page.locator("#shopping_cart_container>a>span")).toHaveText('1');
    await page.locator("#shopping_cart_container").click();
    await expect(page.locator("#item_4_title_link > div")).toBeVisible()
    await page.locator("#remove-sauce-labs-backpack").click();
    await expect(page.locator("#item_4_title_link > div")).toBeHidden()
  })

});