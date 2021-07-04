//functions for getBalance, withdraw, deposit, validatepin
const prompt = require('prompt-sync')();
const account = require('./account'); //importing account


function getBalance(){ //place to grab the active balance
    console.log("Your balance is:");
    console.log(account.bal);
}

function pinVerification(){ //verification for the pin
let userInput = prompt("Please enter your pin: ");
    if (userInput === account.pin){
        console.log("Correct pin.");   
    }
    else if (userInput !== account.pin){
        console.log("Wrong pin, try again. ");
        pinVerification(userInput);
    }
}

function depositting(){//deposit function
    console.log("Please enter the amount you wish to deposit.");
    amount = prompt();
    newBalance = account.bal + parseInt(amount);
    console.log(`Success! Your new balance is $${newBalance}!`);
}

function withDrawing(){ //withdraw function
    console.log("Please enter an amount in multiples of 20s");
    amount = prompt();
    if (account.bal >= amount){
       newBalance = account.bal - amount;
       console.log(`Here is your money $${amount}, your new balance is $${newBalance}`);
   }
   else if (account.bal < amount){
       console.log("Insufficient funds!")
   }
}

module.exports = { //exporting from atm
    pinVerify: pinVerification,
    balance: getBalance,
    withdraw: withDrawing,
    deposit: depositting,
    }