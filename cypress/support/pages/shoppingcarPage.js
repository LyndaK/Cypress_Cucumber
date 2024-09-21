class ShoppingCarPage { 
    addToCart() {
      cy.get('img[id="16"]').click()
      cy.get('button[name="save_to_cart"]').click()
    }
  
    verifyProductInCart(productName) {
      cy.get('a[id="shoppingCartLink"]').click()
      cy.get('tr[class="ng-scope lastProduct"]').should('be.visible')
      cy.get('label[class="roboto-regular productName ng-binding"]').should('contain', productName); 
    }
  }
  
  export default new ShoppingCarPage();
  