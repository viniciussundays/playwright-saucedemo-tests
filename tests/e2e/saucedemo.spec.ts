import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

// Dados de teste
const validUser = {
  username: 'standard_user',
  password: 'secret_sauce'
};

const lockedUser = {
  username: 'locked_out_user',
  password: 'secret_sauce'
};

test.describe('SauceDemo - Testes de Automação', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    
    await loginPage.goto();
  });

  test('TC01 - Login com sucesso', async ({ page }) => {
    await loginPage.login(validUser.username, validUser.password);
    
    // Verifica se foi redirecionado para o inventário
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(inventoryPage.productTitle).toHaveText('Products');
  });

  test('TC02 - Login com usuário bloqueado', async () => {
    await loginPage.login(lockedUser.username, lockedUser.password);
    
    // Verifica mensagem de erro
    expect(await loginPage.isErrorMessageVisible()).toBeTruthy();
    expect(await loginPage.getErrorMessage()).toContain('locked out');
  });

  test('TC03 - Login com credenciais inválidas', async () => {
    await loginPage.login('usuario_invalido', 'senha_errada');
    
    expect(await loginPage.getErrorMessage()).toContain('Username and password do not match');
  });

  test('TC04 - Adicionar produto ao carrinho', async ({ page }) => {
    await loginPage.login(validUser.username, validUser.password);
    
    // Adiciona um produto
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    
    // Verifica contador do carrinho
    expect(await inventoryPage.getCartItemCount()).toBe(1);
  });

  test('TC05 - Adicionar múltiplos produtos ao carrinho', async ({ page }) => {
    await loginPage.login(validUser.username, validUser.password);
    
    const produtos = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
    await inventoryPage.addMultipleProducts(produtos);
    
    expect(await inventoryPage.getCartItemCount()).toBe(2);
  });

  test('TC06 - Remover produto do carrinho', async ({ page }) => {
    await loginPage.login(validUser.username, validUser.password);
    
    // Adiciona e depois remove
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    expect(await inventoryPage.getCartItemCount()).toBe(1);
    
    await inventoryPage.removeProductFromCart('Sauce Labs Backpack');
    expect(await inventoryPage.getCartItemCount()).toBe(0);
  });

  test('TC07 - Finalizar compra com sucesso', async ({ page }) => {
    await loginPage.login(validUser.username, validUser.password);
    
    // Adiciona produto
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    
    // Vai para o carrinho
    await inventoryPage.goToCart();
    
    // Checkout
    await cartPage.proceedToCheckout();
    await cartPage.fillCheckoutInfo('João', 'Silva', '12345-678');
    await cartPage.finishCheckout();
    
    // Verifica mensagem de sucesso
    const successMessage = await cartPage.getSuccessMessage();
    expect(successMessage).toContain('Thank you for your order!');
  });

  test('TC08 - Ordenar produtos por preço', async ({ page }) => {
    await loginPage.login(validUser.username, validUser.password);
    
    // Seleciona ordenação por preço (menor para maior)
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    
    // Verifica se os preços estão em ordem crescente
    const prices = await page.locator('.inventory_item_price').allTextContents();
    const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
    
    for (let i = 0; i < numericPrices.length - 1; i++) {
      expect(numericPrices[i]).toBeLessThanOrEqual(numericPrices[i + 1]);
    }
  });
});