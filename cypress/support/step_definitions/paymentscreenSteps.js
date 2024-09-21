import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import shoppingCarPage from '../pages/shoppingcarPage';
import searchPage from '../pages/searchPage'; 
import paymentscreenPage from '../pages/paymentscreenPage';


Given('I have added products to my shopping cart', () => {
  searchPage.visit();
  searchPage.searchProduct("tablet");
  shoppingCarPage.addToCart()
});

When('I proceed to the payment screen', () => {
    paymentscreenPage.getproceedToPayment();
});

Then('I should see the correct products listed in the shopping cart', (productName) => {
    paymentscreenPage.validateProducts("ORDER PAYMENT");
});