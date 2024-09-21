Feature: Manage shopping cart

  Scenario: Add product to cart
    Given I am on the product page
    When I click on "Add to cart"
    Then the product should be added to the cart