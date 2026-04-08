import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly cartBadge: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator('.title');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async getProductTitleText(): Promise<string> {
    return await this.productTitle.textContent() || '';
  }

  async addProductToCart(productName: string) {
    // Localiza o botão "Add to cart" baseado no nome do produto
    const productLocator = this.page.locator('.inventory_item', { hasText: productName });
    const addButton = productLocator.locator('button');
    await addButton.click();
  }

  async removeProductFromCart(productName: string) {
    const productLocator = this.page.locator('.inventory_item', { hasText: productName });
    const removeButton = productLocator.locator('button');
    await removeButton.click();
  }

  async getCartItemCount(): Promise<number> {
    if (await this.cartBadge.isVisible()) {
      return parseInt(await this.cartBadge.textContent() || '0');
    }
    return 0;
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async addMultipleProducts(products: string[]) {
    for (const product of products) {
      await this.addProductToCart(product);
    }
  }
}