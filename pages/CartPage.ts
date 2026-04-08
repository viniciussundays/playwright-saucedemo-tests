import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly cartItems: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.cartItems = page.locator('.cart_item');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
  }

  async getCartItemCount(): Promise<number> {
    return await this.cartItems.count();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async removeItemFromCart(itemName: string) {
    const item = this.page.locator('.cart_item', { hasText: itemName });
    const removeButton = item.locator('button');
    await removeButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  // Dados do checkout
  async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.locator('[data-test="continue"]').click();
  }

  async finishCheckout() {
    await this.page.locator('[data-test="finish"]').click();
  }

  async getSuccessMessage(): Promise<string> {
    return await this.page.locator('.complete-header').textContent() || '';
  }
}