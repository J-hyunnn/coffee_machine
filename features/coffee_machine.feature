Feature: Coffee machine
    As a coffee lover
    I want a coffee machine that
    shows the situation for every steps
    and I can put some money for the coffee
    and choose the coffee among americano, latte or just milk
    and can even get ice if need
    because I need to wake up.


    Scenario Outline: buy coffee with cash with enough money
        Given that the machine is plugged in
        And has enough coffee
        And has enough milk
        And has enough ice
        And that water is available
        When the user places own cup on the coffee machine
        And the display asks which coffee the user wants to have
        And the user selects menu <menu1> with <price> price
        And the display asks if the user wants to add ice
        And the user decide <menu2>
        And the machine ask how the user wants to pay for it
        And the user chooses to pay with cash
        And the display shows how much the coffee costs
        And the user inserts some <money> kr
        And the display ask if the user wanna order or cancel
        And the user presses the start button with enough money
        Then the user recieves 1 cup of coffee
        And the machine give the chagne if needed.


        Examples:
            | menu1     | menu2  | price | money |
            | americano | ice    | 20    | 20    |
            | americano | ice    | 20    | 30    |
            | americano | no ice | 15    | 15    |
            | americano | no ice | 15    | 20    |
            | latte     | ice    | 25    | 25    |
            | latte     | ice    | 25    | 50    |
            | latte     | no ice | 20    | 20    |
            | latte     | no ice | 20    | 30    |
            | milk      | no ice | 15    | 15    |
            | milk      | no ice | 15    | 20    |

    Scenario Outline: buy coffee with cash without enough money
        Given that the machine is plugged in
        And has enough coffee
        And has enough milk
        And has enough ice
        And that water is available
        When the user places own cup on the coffee machine
        And the display asks which coffee the user wants to have
        And the user selects menu <menu1> with <price> price
        And the display asks if the user wants to add ice
        And the user decide <menu2>
        And the machine ask how the user wants to pay for it
        And the user chooses to pay with cash
        And the display shows how much the coffee costs
        And the user inserts some <money> kr
        And the display ask if the user wanna order or cancel
        And the user presses the start button without enough money
        Then the display show that the user did not insert enough money
        And the user recieves 0 cup of coffee.
        And the inserted money returns.

        Examples:
            | menu1     | menu2  | price | money |
            | americano | ice    | 20    | 15    |
            | americano | no ice | 15    | 10    |
            | latte     | ice    | 25    | 20    |
            | latte     | no ice | 20    | 20    |
            | milk      | no ice | 15    | 10    |


    Scenario Outline: buy coffee with card
        Given that the machine is plugged in
        And has enough coffee
        And has enough milk
        And has enough ice
        And that water is available
        When the user places own cup on the coffee machine
        And the display asks which coffee the user wants to have
        And the user selects menu <menu1> with <price> price
        And the display asks if the user wants to add ice
        And the user decide <menu2>
        And the machine ask how the user wants to pay for it
        And the user chooses to pay with card
        And the display shows how much the coffee costs
        And the user swipes the card
        And the display ask if the user wanna order or cancel
        And the user presses the start button
        And the cardreader arranges the payment <money> kr
        And the display shows that it will start now
        Then the user recieves the coffee.

        Examples:
            | menu1     | menu2  | price |
            | americano | ice    | 20    |
            | americano | no ice | 15    |
            | latte     | ice    | 25    |
            | latte     | no ice | 20    |
            | milk      | no ice | 15    |

   
    Scenario Outline: cancel the order with cash
        Given that the machine is plugged in
        And has enough coffee
        And has enough milk
        And has enough ice
        And that water is available
        When the user places own cup on the coffee machine
        And the display asks which coffee the user wants to have
        And the user selects menu <menu1> with <price> price
        And the display asks if the user wants to add ice
        And the user decide <menu2>
        And the machine ask how the user wants to pay for it
        And the user chooses to pay with cash
        And the display shows how much the coffee costs
        And the user inserts some <money> kr
        And the display ask if the user wanna order or cancel
        And the user presses the cancel button
        Then the inserted money returns.

        Examples:
            | menu1     | menu2  | price | money |
            | americano | ice    | 20    | 15    |
            | americano | ice    | 20    | 20    |
            | americano | ice    | 20    | 30    |
            | americano | no ice | 15    | 10    |
            | americano | no ice | 15    | 15    |
            | americano | no ice | 15    | 20    |
            | latte     | ice    | 25    | 20    |
            | latte     | ice    | 25    | 25    |
            | latte     | ice    | 25    | 50    |
            | latte     | no ice | 20    | 10    |
            | latte     | no ice | 20    | 20    |
            | latte     | no ice | 20    | 30    |
            | milk      | no ice | 15    | 10    |
            | milk      | no ice | 15    | 15    |
            | milk      | no ice | 15    | 20    |



    Scenario Outline: cancel the order with card
        Given that the machine is plugged in
        And has enough coffee
        And has enough milk
        And has enough ice
        And that water is available
        When the user places own cup on the coffee machine
        And the display asks which coffee the user wants to have
        And the user selects menu <menu1> with <price> price
        And the display asks if the user wants to add ice
        And the user decide <menu2>
        And the machine ask how the user wants to pay for it
        And the user chooses to pay with card
        And the display shows how much the coffee costs
        And the user swipes the card
        And the display ask if the user wanna order or cancel
        And the user presses the cancel button
        Then the machine stops making coffee

        Examples:
            | menu1     | menu2  | price |
            | americano | ice    | 20    |
            | americano | no ice | 15    |
            | latte     | ice    | 25    |
            | latte     | no ice | 20    |
            | milk      | no ice | 15    |