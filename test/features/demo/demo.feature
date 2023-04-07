Feature: Demo feature

    #@demo @smoke
    Scenario Outline: Run first demo feature
    Given Google page is opened
    When Search with <Searchitem>
    Then Click on the 1st search result
    Then URL should match <ExpectedURL>
    

    Examples:
        | TestID | Searchitem | ExpectedURL |
        | DEMO_TC001 | WDIO  | https://webdriver.io/  |