Feature: First Test

    Scenario: Protractor and Cucumber Test1
        Given I am on "profile" page
        When I submit profile form with "Test" and "Test@test.com"
        And I click the NextSection button
        Then I should be on "interests" page
    
    Scenario: Protractor and Cucumber Test2
        Given I am on "interests" page
        When I select "ps" radiobutton
        And I click the NextSection button
        Then I should be on "payment" page