const prompt = require('prompt-sync')();//making prompt-sync a function

const {pinVerify, withdraw, balance} = require('./atm.js'); // linking atm to index

let userInput = prompt("Please enter your 4 digit pin. "); //prompting user to enter pin
do{
pinVerify(userInput); //verifying userinput for pin
}while(false) // Is not the correct pin

let mainMenu = prompt("What would you like to do? \n Press 1 for Balance \n 2 for Withdraw \n 3 for Deposit check or cash.  ") //Prompting user to make a choice
function menu(mainMenu){
    if (mainMenu === 1){ //User wants to check their balance
        console.log(balance);
    }
    else if (mainMenu === 2){ //User wants to withdraw money
        return withdraw;
    }
}
