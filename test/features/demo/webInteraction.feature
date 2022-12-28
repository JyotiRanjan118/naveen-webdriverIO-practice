Feature: webInteraction feature

    @demo
    Scenario Outline: Run web interaction feature
    Given A web page is opened

     Examples:
        | TestID | Searchitem | ExpectedURL |
        | DEMO_TC001 | WDIO  | https://webdriver.io/  |
    