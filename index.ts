#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your firstnumber", type: "number", name: "firstNumber" },
  { message: "Enter your secondnumber", type: "number", name: "secondNumber" },
  {
    message: "select one operator to perform function",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);
if(answer.operator === "ADDITION"){
    console.log(answer.firstNumber + answer.secondNumber);
}else if(answer.operator === "SUBTRACTION"){
    console.log(answer.firstNumber  - answer.secondNumber);
}else if(answer.operator === "MULTIPLICATION"){
    console.log(answer.firstNumber * answer.secondNumber);
}else if(answer.operator === "DIVISION"){
    console.log(answer.firstNumber / answer.secondNumber);
}else{
    console.log("please select valid operators")
}
