class PaymentsScreenPage {
     
    getproceedToPayment() {
      cy.get('tr[class="ng-scope lastProduct"]').should('be.visible');
      cy.get('button[id="checkOutPopUp"]').click();
    }
  
    validateProducts(productName) {
      cy.get('h3[class="roboto-regular sticky fixedImportant ng-scope"]').should('contain', productName);
    }
  }
  
  export default new PaymentsScreenPage();
  