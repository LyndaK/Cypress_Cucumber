import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ShoppingCarPage from '../pages/shoppingcarPage';
import searchPage from '../pages/searchPage'; 

Given('I am on the product page', () => {
  searchPage.visit();
  searchPage.searchProduct("tablet");
});

When('I click on "Add to cart"', () => {
  ShoppingCarPage.addToCart();
});

Then('the product should be added to the cart', () => {
  ShoppingCarPage.verifyProductInCart("HP ELITEPAD 1000 G2 TABLET");
});