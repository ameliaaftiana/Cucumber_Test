Feature: User Login and Shopping Cart
    As a user
    I want to login and manage my shopping cart
    So that I can access the application and purchase items

    Scenario: Successful login with valid details
        Given the user is on the login page
        When the user enters a valid username and password
        And the user clicks the login button
        Then the user should see a success message

    Scenario: Failed login with invalid credential
        Given the user is on the login page
        When the user enters an invalid username and password
        And the user clicks the login button
        Then the user should see a failed message

    Scenario: Successfully adding an item to cart
        Given the user is on the login page
        And the user is on the item page
        When the user add item to the cart
        And the user in the item list
        Then item should be seen in the item page

    Scenario: Successfully removing an item from cart
        Given the user is on the login page
        And the user is on the item page
        When the user add item to the cart
        And the user in the item list
        When the user remove item to the cart
        Then item shouldn't be seen in the item page

    Scenario: User can logout successfully
        Given the user is on the login page
        And the user is logged in successfully
        When the user clicks the logout button
        Then the user should be redirected to login page

    Scenario: User can view product details
        Given the user is on the login page
        And the user is logged in successfully
        When the user clicks on a product
        Then the user should see product details page
        And the user should see product information