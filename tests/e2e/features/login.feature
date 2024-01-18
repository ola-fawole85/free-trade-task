Feature: Limit Order for Plus customers

  # Scenario for Limit Buy
  Scenario Outline: Place a Limit Buy Order
    Given the user is on the Limit Order page
    When the user sets the share price to "<price>"
    And the user sets the share amount to "<amount>"
    And the user submits a buy order
    Then a buy order should be placed successfully

  # Scenario for Limit Sell
  Scenario Outline: Place a Limit Sell Order
    Given the user is on the Limit Order page
    When the user sets the share price to "<price>"
    And the user sets the share amount to "<amount>"
    And the user submits a sell order
    Then a sell order should be placed successfully

  # Scenario for Stop Loss
  Scenario Outline: Place a Stop Loss Order
    Given the user is on the Limit Order page
    When the user sets the lower limit price to "<lowerLimitPrice>"
    And the user sets the share amount to "<amount>"
    And the user submits a stop loss order
    Then a stop loss order should be placed successfully

  Examples:
    | country | price | lowerLimitPrice | amount |
    | UK      | 100   | 95              | 1      |
    | USA     | 32    | 30              | 0.01   |

