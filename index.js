const prompt = require('prompt-sync')();//making prompt-sync a function

const {pinVerify, withdraw, balance} = require('./atm.js'); // linking atm to index
startUp();
menu();

function menuRoute(select){
    if (select === "1"){ //User wants to check their balance
        balance();
    }
    else if (select === "2"){ //User wants to withdraw money
        withdraw();
    }
}
function startUp(){
    let bankName = "Walls Fargo" // created a Bank Name
    console.log(`*****Welcome to ${bankName}*****`); //Greeting the User
    pinVerify(); //Runs straight to the Pin verify function from Atm     
    menu(); //Goes to the Menu function
}

function menu(){ //ATM Menu
    console.log("What would you like to do? \n Press 1 for Balance  \n 2 for Withdraw  \n 3 for Deposit check or cash. ") //Prompting user to make a choice
    let select = prompt(); //Saving User input as select 
     menuRoute(select); //Runs the menuRoute function
}
let userInput = prompt("Would you like to go to the main menu? Y/N ", yesNo).toLowerCase(); // Main Menu? Yes or No;
if (userInput == "y"){
    menu(); //User is sent back to the menu
}
else if(userInput = "n") {
     console.log("Thank you for choosing Walls Fargo! \n Have a great rest of your day!");
}

//Function for Yes or No questions
function yesNo(input) {
    return input.toLowerCase() == "y" || input.toLowerCase() == "n";
  }