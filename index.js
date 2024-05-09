import inquirer from "inquirer";
const randomNumber = 13;
const answer = await inquirer.prompt([
    {
        name: "userGussingNumber",
        type: "number",
        "massage": "Please Guss a Number:",
    },
]);
if (answer.userGussingNumber === randomNumber) {
    console.log("You win the Game");
}
else {
    console.log("You loss the game plseas try again");
}
