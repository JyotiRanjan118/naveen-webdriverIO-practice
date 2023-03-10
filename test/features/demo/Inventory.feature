Feature: Web Interactions

    @demo @smoke @debug
    Scenario Outline: Demo Web Interactions
    Given Login to inventory web app
    Then Inventory page should list <NumberOfProducts>
    Then Validate all products have valid price


    Examples:
        | TestID | NumberOfProducts | 
        | WEB_TC002 | 6             |

