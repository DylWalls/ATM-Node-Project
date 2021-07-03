const prompt = require('prompt-sync')();//making prompt-sync a function

const {pinVerify, withdraw, balance} = require('./atm.js'); // linking atm to index
menu();

function menuRoute(str){
    if (str === "1"){ //User wants to check their balance
        console.log(balance);
    }
    else if (str === "2"){ //User wants to withdraw money
        return withdraw;
    }
}

function menu(){ //ATM Menu
        pinVerify();
          
        console.log("What would you like to do? \n Press 1 for Balance  \n 2 for Withdraw  \n 3 for Deposit check or cash. ") //Prompting user to make a choice
        let userInput = prompt();
        menuRoute(userInput);
}