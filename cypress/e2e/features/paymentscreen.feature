Feature: Validate products in the shopping cart on the payment screen

  Scenario: User validates products in the shopping cart
    Given I have added products to my shopping cart
    When I proceed to the payment screen
    Then I should see the correct products listed in the shopping cart