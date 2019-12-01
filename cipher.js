const inquirer = require("inquirer");
const chalk = require('chalk');
class RunCipher{
    constructor() {
        console.log(chalk.cyan('Hello, You run Cipher of Caesar program.'));
        console.log(chalk.cyan('Follow next instructions.'));

        this.questions = [
            {
                type: 'input',
                name: 'text',
                message: "1. Write the text, that you want to cipher"
            },
            {
                type: 'input',
                name: 'number',
                message: "2. Write random number"
            },
        ];
    }

    async answerTheQuestions() {
        const {text, number} = await inquirer.prompt(this.questions);
        if (!text.trim() || !number.trim() || !parseInt(number.trim())){
            console.clear();
            this.answerTheQuestions();
        }else{
            this.getRes(text, parseInt(number));
        }
    }

    getRes(text, number){
        while (number >= text.length){
            number=number-text.length;
        }
        const arr = text.split('');
        const res = [];
        for (let i = 0; i < arr.length; i++) {
            (i+number > arr.length -1 )
                ? res[i+number - arr.length] = arr[i]
                : res[i+number] = arr[i];
            }
        console.log(chalk.green(`Result: ${res.join('')}`));
    }
}

const program = new RunCipher();
program.answerTheQuestions();
