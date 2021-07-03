//functions for getBalance, withdraw, deposit, validatepin
const prompt = require('prompt-sync')();
const {Menu} = require('./index.js');
const {pin, bal} = require('./account.js'); //importing from account


function getBalance(){ //place to grab the active balance
    console.log(`Your balance is: ${bal}`);
    console.log("What would you like to do? \n 1 for withdraw money \n 2 for depositting money \n 3 for menu");
    let user = prompt();
    if (user === "1"){
        withDrawing(); //To withdraw
    }
    else if (user === "2"){//to deposit
    }
    else if (user === "3"){ //back to menu
        Menu();
    }
}

function pinVerification(){ //verification for the pin
let userInput = prompt("Please enter your pin: ");
    if (userInput === pin){
        console.log("Correct pin.");   
    }
    else if (userInput !== pin){
        console.log("Wrong pin, try again. ");
        pinVerification(userInput);
    }
}

function newBalance(){ //Correct balance after withdrawing money.
    bal;//current balance
    newBalance = bal - amount; //new active balance
}

function withDrawing(amount){ //withdraw function
    bal;
    amount = prompt("Please withdraw multiples of 20s  ");; //saving user input as amount
    if(amount % 20 && amount != 0 ){
        newBalance(amount);
        console.log(`Success! Your new balance is: ${currentBal}`);
        console.log("Press 1 for menu or press 2 to exit atm");
        select = prompt();//saving user input as select for options
        if (select == "1"){
            menu();
        }
        else if(select == "2"){
            console.log("Thank you for choosing Walls Fargo! \n Have a great rest of your day!");
        }
    }
    else if (amount >= bal){
        console.log("Insufficient funds");
        withDrawing();
    }
}

module.exports = { //exporting from atm
    pinVerify: pinVerification,
    balance: getBalance,
    withdraw: withDrawing,
    }