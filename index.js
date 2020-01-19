
class CoffeeMachine {

    constructor() {
        this.pluggedIn = false;
        this.amountOfCoffee = 0;
        this.coffeePerCup = 13;
        this.amountOfMilk = 0;
        this.milkPerCup = 200;
        this.amountOfIce = 0;
        this.icePerCup = 100;
        this.connectedToWater = false;
        this.placedCup = false;
        this.displayAskedWhichCoffee = false;
        this.displayAskedIfIce = false;
        this.calculatedCoffeePrice = 0;
        this.displayAskedPayment = false;
        this.decidedPayCash = false;
        this.displayShowedPrice = false;
        this.totalMoney = 0;
        this.insertedMoney = 0;
        this.displayAskedDoubleCheck = false;
        this.changeMoney = 0;
        this.pressedStartButton = false;
        this.pressedStartButtonWithout = false;


        this.decidedPayCard = false;
        this.swipedCard = false
    }


    plugIn() {
        this.pluggedIn = true;
    }

    checkIfEnoughCoffeeForACup() {
        return this.amountOfCoffee >= this.coffeePerCup
    }

    fillWithCoffee(amount) {
        this.amountOfCoffee += amount;
    }

    checkIfEnoughMilkForACup() {
        return this.amountOfMilk >= this.milkPerCup;
    }

    fillWithMilk(amount) {
        this.amountOfMilk += amount;
    }

    checkIfEnoughIceForACup() {
        return this.amountOfIce >= this.icePerCup;
    }

    fillWithIce(amount) {
        this.amountOfIce += amount;
    }

    connectToWater() {
        this.connectedToWater = true;
    }

    placeACup() {
        this.placedCup = true;
    }

    displayAskWhichCoffee() {
        this.displayAskedWhichCoffee = true;
    }

    makeOrderForMenu1(menu1) {
        if (menu1 == "americano") {
            this.amountOfCoffee -= this.coffeePerCup;
            this.calculatedCoffeePrice = 10 + 5;
        } else if (menu1 == "latte") {
            this.amountOfCoffee -= this.coffeePerCup;
            this.amountOfMilk -= this.milkPerCup;
            this.calculatedCoffeePrice = 10 + 5 + 5;
        } else {
            this.amountOfMilk -= this.milkPerCup;
            this.calculatedCoffeePrice = 10 + 5;
        }
    }

    displayAskIfIce() {
        this.displayAskedIfIce = true;
    }

    prepareIceForMenu2(menu2) {
        if (menu2 == "ice") {
            this.amountOfIce -= this.icePerCup;
            this.calculatedCoffeePrice += 5;
            console.log('coffee price is ' + this.calculatedCoffeePrice)
        } else {
            //console.log('coffee price is ' + this.calculatedCoffeePrice)
            //return this.amountOfIce;            
        }
    }

    displayAskPayment() {

        this.displayAskedPayment = true;
    }

    decidePayCash() {
        this.decidedPayCash = true;
    }

    displayShowPrice() {
        this.displayShowedPrice = true;
    }

    insertMoney(inserted) {
        if (typeof inserted !== 'number' && inserted >= 0) {
            throw (new Error('You must insert money not ' + nonMoney));
        }
        this.insertedMoney = inserted;
        this.totalMoney += this.insertedMoney;
    }

    displayDoubleCheck() {
        this.displayAskedDoubleCheck = true;
    }

    pressStartButton() {
        this.pressedStartButton = true;
        return "here's your coffee"
    }

    pressStartButtonWithout() {
        return "You need to insert more money";

    }

    recieveCoffee() {
        if (this.calculatedCoffeePrice <= this.insertedMoney) {
            return "here's your coffee"
        } else {
            return "you didnt insert enough money so cant get any."
        }
    }

    giveBackChange() {
        if (this.insertedMoney > this.calculatedCoffeePrice){
            this.totalMoney -= this.insertedMoney;
            this.changeMoney = this.insertedMoney - this.calculatedCoffeePrice

        } else if (this.insertedMoney < this.calculatedCoffeePrice){
            this.totalMoney -= this.insertedMoney;
        }
    }

    decidePayCard(){
        this.decidedPayCard = true;
    }

    swipeCard(){
        this.swipedCard = true;
    }
}


// Export the CoffeeMachine class
module.exports = CoffeeMachine;

