//functions for getBalance, withdraw, deposit, validatepin
const prompt = require('prompt-sync')();
const {pin, bal} = require('./account.js'); //importing from account


function getBalance(){ //place to grab the active balance
    console.log(`Your balance is: ${bal}`);
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

function depositting(){//deposit function
    bal;
    console.log("Please enter the amount you wish to deposit.");
    amount = prompt();
    newBalance = bal + amount;
    console.log(`Success! Your new balance is $${newBalance}!`);
    console.log("Would you like another transaction? Y/N")
    input = prompt().toLowerCase();
    if (input = "y"){      
    }
    else if (input = "n"){
        console.log("Thank you for choosing Walls Fargo! \n Have a great rest of your day!");
    }
}

function withDrawing(amount){ //withdraw function
   bal;
    console.log("Please enter an amount in multiples of 20s");
    amount = prompt();
   if(bal >= amount){
    newBalance = bal - amount;
    console.log(`Here is your money $${amount}, with a new balance of $${newBalance}`);
   }
   else if (bal < amount ){
   console.log("Insufficient funds") 
   }
    console.log("Would you like another transaction? Y/N")
    transAct = prompt().toLowerCase();
   if (transAct = "y"){
       withDrawing();
   }
   else if (transAct = "n"){
    console.log("Thank you for choosing Walls Fargo! \n Have a great rest of your day!");
   }

}

module.exports = { //exporting from atm
    pinVerify: pinVerification,
    balance: getBalance,
    withdraw: withDrawing,
    deposit: depositting,
    }