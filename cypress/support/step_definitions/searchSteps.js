import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import searchPage from '../pages/searchPage'; 

Given('I am on the search page', () => {
  searchPage.visit();
});

When('I search for {string}', (productName) => {
  searchPage.searchProduct(productName);
});

Then('I should see a list of products related', () => {
  searchPage.getProductList().should('be.visible');
});

Then('I should see a message saying No results for iphones', () => {
  searchPage.getNoProductMessage()
});