//functions for getBalance, withdraw, deposit, validatepin
const prompt = require('prompt-sync')();
const {pin, balance} = require('./account.js'); //importing from account

function getBalance(){ //place to grab the active balance
    prompt("Your balance is: ", +balance);
}

function pinVerification(num){ //verification for the pin
    if (num === pin){
        prompt("Correct pin. Press enter to continue.");
    }
    else if (num !== pin){
        prompt("Wrong pin, try again. ");
        return false;
    }
}
function newBalance(amount){
    balance;
    newBalance = balance -20;
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
    withdraw: withDrawing
    }