//functions for getBalance, withdraw, deposit, validatepin
const prompt = require('prompt-sync')();
const {pin, bal} = require('./account.js'); //importing from account

function getBalance(){ //place to grab the active balance
    prompt("Your balance is: ", +balance);
}

function pinVerification(){ //verification for the pin
let userInput = prompt("Please enter your pin. ");
    if (userInput === pin){
        console.log("Correct pin.");   
    }
    else if (userInput !== pin){
        console.log("Wrong pin, try again. ");
    }
}

function newBalance(){
    bal;
    newBalance = bal -20;
}

function withDrawing(balance){ //withdraw function
    if(amount / 20 && amount !=0 ){
        prompt("Please withdraw multiples of 20s");
        return newBalance;
    }
    else if (amount >= balance){
        console.log("Insufficient funds");
        return withDrawing;
    }
}

module.exports = { //exporting from atm
    pinVerify: pinVerification,
    balance: getBalance,
    withdraw: withDrawing,
    balance: bal,
    }