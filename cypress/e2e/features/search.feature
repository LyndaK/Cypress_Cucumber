Feature: Product search functionality

  Scenario: User searches for an existing product
    Given I am on the search page
    When I search for "tablets"
    Then I should see a list of products related

  Scenario: User searches for a non-existent product
    Given I am on the search page
    When I search for "iphones"
    Then I should see a message saying No results for iphones
    