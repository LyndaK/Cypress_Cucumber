class SearchPage {
    visit() {
      cy.visit('https://advantageonlineshopping.com/#/');
    }
  
    searchProduct(productName) {
      cy.get('input[name="mobile_search"]').click(); 
      cy.get('input[name="mobile_search"]').type(productName).type('{enter}');      
    }
  
    getProductList() {
      return cy.get('a[class="titleItemsCount ng-binding"]');
    }
  
    getNoProductMessage() {
      cy.get('div[class="searchPunchout ng-scope"]').should('be.visible');
    }
  }
  
  export default new SearchPage();
  