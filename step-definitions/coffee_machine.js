
let CoffeeMachine = require('../index.js');
let myMachine, menu1Choice, menu2Choice
let resultOfStartButton;
let amountOfChange;

module.exports = function () {

    this.Given(/^that the machine is plugged in$/, function () {
        myMachine = new CoffeeMachine();

        myMachine.plugIn();
        assert.deepEqual(myMachine.pluggedIn, true,
            'Expected the property pluggedIn to be true after calling the plugIn() method.'
        );
    });

    this.Given(/^has enough coffee$/, function () {
        assert.deepEqual(
            myMachine.checkIfEnoughCoffeeForACup(), false,
            'Expected a new machine not to have enough coffee'
        );

        myMachine.fillWithCoffee(100);
        assert.deepEqual(
            myMachine.checkIfEnoughCoffeeForACup(), true,
            'Expected to have enough coffee for a cup after filling it with 100 grams of ground coffee'
        );
    });

    this.Given(/^has enough milk$/, function () {
        assert.deepEqual(
            myMachine.checkIfEnoughMilkForACup(), false,
            'Expected a new machine to not have enough milk'
        );

        myMachine.fillWithMilk(1000);
        assert.deepEqual(
            myMachine.checkIfEnoughMilkForACup(), true,
            'Expected to have enough milk for a cup after filling it with 1000 ml of milk'
        );
    });

    this.Given(/^has enough ice$/, function () {
        assert.deepEqual(
            myMachine.checkIfEnoughIceForACup(), false,
            'Expected a new machine to not have enough Ice'
        );

        myMachine.fillWithIce(1000);
        assert.deepEqual(
            myMachine.checkIfEnoughIceForACup(), true,
            'Expected to have enough ice for a cup after filling it with 1000 g of ice'
        );
    });

    this.Given(/^that water is available$/, function () {
        myMachine.connectToWater();
        assert.strictEqual(
            myMachine.connectedToWater, true,
            'Expected the property connectedToWater to be true after calling the connectToWater() method.'
        );
    });

    this.When(/^the user places own cup on the coffee machine$/, function () {
        myMachine.placeACup();
        assert.strictEqual(
            myMachine.placedCup, true,
            'Expected the property placedCup to be true after calling the placeACup() method.'
        );
    });

    this.When(/^the display asks which coffee the user wants to have$/, function () {
        myMachine.displayAskWhichCoffee();
        assert.strictEqual(
            myMachine.displayAskedWhichCoffee, true,
            'Expected the property displayAskedWhichCoffee to be true after calling the displayAskWhichCoffee() method.'
        );
    });

    

    this.When(/^the user selects menu americano with (\d+) price$/, function (price) {
        //menu1Choice = "americano";
        myMachine.makeOrderForMenu1("americano");
        assert.isAtLeast(
            myMachine.amountOfCoffee, myMachine.coffeePerCup,
            'Expected the property amountOfCoffee to be more than the amount of coffeePerCup after calling the makeOrderForMenu1() method'
        );
    });

    this.Then(/^the user selects menu latte with (\d+) price$/, function (price) {
        //meny1Choice = "latte";
        myMachine.makeOrderForMenu1("latte");
        assert.isAtLeast(
            myMachine.amountOfCoffee, myMachine.coffeePerCup,
            'Expected the property amountOfCoffee to be equal to the amount of coffeePerCup after calling the makeOrderForMenu1() method'
        );
        assert.isAtLeast(
            myMachine.amountOfMilk, myMachine.milkPerCup,
            'Expected the property amountOfMilk to be equal to the amount of milkPerCup after calling the makeOrderForMenu1() method'
        );
    });

    this.When(/^the user selects menu milk with (\d+) price$/, function (price) {
        //menu1Choice = 'milk';
        myMachine.makeOrderForMenu1("milk");
        assert.isAtLeast(
            myMachine.amountOfMilk, myMachine.milkPerCup,
            'Expected the property amountOfMilk to be equal to the amount of milkPerCup after calling the makeOrderForMenu1() method'
        );
    });

    this.When(/^the display asks if the user wants to add ice$/, function () {
        myMachine.displayAskIfIce();
        assert.strictEqual(
            myMachine.displayAskedIfIce, true,
            'Expected the property displayAskedIfIce to be true after calling the displayAskIfIce() method.'
        );
    });

    this.When(/^the user decide ice$/, function () {
        myMachine.prepareIceForMenu2("ice");
        assert.isAtLeast(
            myMachine.amountOfIce, myMachine.icePerCup,
            'Expected the property amountOfIce to be more than the amount of icePerCup after calling the prepareIceForMenu2() method'
        );
    });
    /////////////////////////////////////////
    this.When(/^the user decide no ice$/, function () {
        let prevIce = myMachine.amountOfIce;
        myMachine.prepareIceForMenu2("no ice");
        assert.strictEqual(
            myMachine.amountOfIce, prevIce,
            'Expected the property amountOfIce to be same as before after calling the prepareIceForMenu2() method.'
        );
    });

    this.When(/^the machine ask how the user wants to pay for it$/, function () {
        myMachine.displayAskPayment();
        assert.strictEqual(
            myMachine.displayAskedPayment, true,
            'Expected the property displayAskedPayment to be true after calling the displayPayment() method.'
        );
    });

    this.When(/^the user chooses to pay with cash$/, function () {
        myMachine.decidePayCash();
        assert.strictEqual(myMachine.decidedPayCash, true,
            'Expected the property decidedPayCash to be true after calling the decidePayCash() method.'
        );
    });

    this.When(/^the display shows how much the coffee costs$/, function () {
        myMachine.displayShowPrice();
        assert.isAtLeast(
            myMachine.calculatedCoffeePrice, true,
            'Expected the property calculatedCoffeePrice to be bigger than coffee price after calling the displayShowPrice() method.'
        );
    });

    this.When(/^the user inserts some (\d+) kr$/, function (amountOfMoney) {
        amountOfMoney /= 1;

        myMachine.insertMoney(amountOfMoney);
        assert.isAtLeast(
            myMachine.insertedMoney, 0,
            'Expexted to insert some money to get what the user wants after calling the insertMoney() method.'
        )
    });

    this.When(/^the display ask if the user wanna order or cancel$/, function () {
        myMachine.displayDoubleCheck();
        assert.strictEqual(
            myMachine.displayAskedDoubleCheck, true,
            'Expected the property displayAskedDoubleCheck to be true after calling the displayDoubleCheck() method.'
        );
    });

    this.Then(/^the user presses the start button with enough money$/, function () {
        myMachine.displayShowPrice();
        assert.strictEqual(
            myMachine.displayShowedPrice, true,
            'Expected the property displayShowedPrice to be true after calling the displayShowPrice() method.'
        );
    });

    this.When(/^the user presses the start button without enough money$/, function () {
        myMachine.pressStartButtonWithout();
        assert.strictEqual(
            myMachine.pressStartButtonWithout(), "You need to insert more money",
            'Expected to ask the user to insert more money to get the order after calling the pressStartButtonWithout() method.'
        );
    });

    this.Then(/^the user recieves 1 cup of coffee$/, function () {
        resultOfStartButton = myMachine.pressStartButton();
        myMachine.recieveCoffee();
        assert.deepEqual(
            resultOfStartButton, "here's your coffee",
            'Expected the user will get a coffee after calling the recieveCoffee() method.'
        );
    });

    this.Then(/^the machine give the chagne if needed\.$/, function () {

        console.log("insertedMoney" + myMachine.insertedMoney)
        console.log("calculatedCoffeePrice" + myMachine.calculatedCoffeePrice)
        //console.log("amountOfChange" + amountOfChange)

        myMachine.giveBackChange()
        assert.strictEqual(
            myMachine.changeMoney, myMachine.insertedMoney-myMachine.calculatedCoffeePrice,
            "Expected the the user will get back the different amount of money as a change after calling the giveBackChange() method."
        );
    });

    this.Then(/^the display show that the user did not insert enough money$/, function () {
        amountOfChange = myMachine.giveBackChange()

        myMachine.displayShowPrice();
        assert.strictEqual(
            myMachine.displayShowedPrice, true,
            'Expected the property displayShowedPrice to be true after calling the displayShowPrice() method.'
        );
    });

    this.Then(/^the user recieves 0 cup of coffee\.$/, function () {
        resultOfStartButton = myMachine.pressStartButtonWithout();
        myMachine.recieveCoffee();
        assert.deepEqual(
            resultOfStartButton, "You need to insert more money",
            'Expected the user will not get a coffee since the user did not insert enough coffee after calling the recieveCoffee() method.'
        );
    });

    this.Then(/^the inserted money returns\.$/, function () {

        myMachine.giveBackChange()
        assert.isAtLeast(
            myMachine.insertedMoney, 0,
            'Expected the property insertedMoney to be bigger than 0 after calling givaBackChange() method'
        )
    });

    this.Then(/^the user chooses to pay with card$/, function () {
        myMachine.decidePayCard();
        assert.strictEqual(myMachine.decidedPayCard, true,
            'Expected the property decidedPayCard to be true after calling the decidePayCard() method.'
        );
    });

    this.When(/^the user swipes the card$/, function () {
        myMachine.swipeCard();
        assert.strictEqual(myMachine.swipedCard, true,
            'Expected the property swipedCard to be true after calling the swipeCard() method.'
        );
    });




}