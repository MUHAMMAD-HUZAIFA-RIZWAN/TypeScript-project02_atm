#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import Choices from "inquirer/lib/objects/choices.js";
function ready(){
    console.log(figlet.textSync("WELCOME ATM  !!!"));
    
  }

ready();
const questions = await inquirer.prompt([
  {
    type: "string",
    name: "userId",
    message: chalk.greenBright("Please enter your userId "),
  },
  {
    type: "number",
    name: "user_pin",
    message:chalk.greenBright( "Please enter your pin_number "),
  },
  {
    type: "list",
    name: "accountType",
    message: chalk.greenBright("Please select your Account_Type "),
    choices: ["Current", "Saving"],
  },
  {
    type: "list",
    name: "transactionType",
    message: chalk.greenBright("Please select your Transaction_Type "),
    choices: ["Fast Cash", "Withdraw"],
    when(questions) {
      return questions.accountType;
    },
  },
  {
    type: "list",
    name: "amount",
    message: chalk.greenBright("Please select your amount"),
    choices: [
      "500",
      "1000",
      "2000",
      "3000",
      "4000",
      "5000",
      "6000",
      "10000",
      "20000",
    ],
    when(questions) {
      return questions.transactionType === "Fast Cash";
    },
  },
  {
    type: "number",
    name: "amount",
    message: chalk.greenBright("Please enter your withdrawal amount"),
    when(questions) {
      return questions.transactionType === "Withdraw";
    },
  },
]);
if(questions.userId && questions.user_pin){
    const balanceAmount= Math.floor(Math.random()*1000000);
    console.log(chalk.bgBlueBright(`Your balance is :  ${balanceAmount}`));
    const enteredAmount=questions.amount;
    if(balanceAmount>enteredAmount){
    const remainingBalance = balanceAmount - enteredAmount;
    console.log(chalk.bgBlue(`Your reamining balance is : ${remainingBalance}`));
    }
    else{
console.log(chalk.bgRedBright("You have Insufficient Balance"));
    }
}



