const prompt = require('prompt-sync')();//making prompt-sync a function
const {pinVerify, withdraw, balance, deposit} = require('./atm.js'); // linking atm to index
startUp(); 

function menuRoute(select){
    if (select === "1"){ //User wants to check their balance
        balance();
    }
    else if (select === "2"){ //User wants to withdraw money
        withdraw();
    }
    else if (select === "3"){ //User wants to add money
        deposit();
    }

}
function startUp(){
    let bankName = "Walls Fargo" // created a Bank Name
    console.log(`*****Welcome to ${bankName}*****`); //Greeting the User
    pinVerify(); //Runs straight to the Pin verify function from Atm     
}
do{ //loop to keep the UI active
    menu();
function menu(){ //ATM Menu
    console.log("What would you like to do? \n Press 1 for Balance  \n 2 for Withdraw  \n 3 for Deposit check or cash. ") //Prompting user to make a choice
    let select = prompt(); //Saving User input as select 
     menuRoute(select); //Runs the menuRoute function
}
//prompting user if they want to exit atm
userInput = prompt("Would you like to go to the main menu? Y/N ");
}while(userInput != "n");
console.log("Thank you for choosing Walls Fargo! \n Have a great rest of your day!");