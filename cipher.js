/**
 * @version v1.0.1
 * @file Caesar cipher implementation on Node.js
 * @author Artem Gusev (corocoto) <gusev2014russia@mail.ru>
 * @copyright Artem Gusev 2019
 * @licence
 * MIT License
 *
 * Copyright (c) 2019 - present Artem Gusev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

const inquirer = require('inquirer');
const chalk = require('chalk');


/**
 * @class
 * @description Run cipher program
 * @example
 * ```js
 * const program = new RunCipher();
 * program.answerTheQuestions();
 * ```
 */
class RunCipher {
	/**
	 * @constructor
	 */
	constructor () {
		console.log(chalk.cyan('Hello, You run Cipher of Caesar program.'));
		console.log(chalk.cyan('Follow next instructions.'));

		this.questions = [
			{
				type    : 'input',
				name    : 'text',
				message : '1. Write the text, that you want to cipher',
			},
			{
				type    : 'input',
				name    : 'number',
				message : '2. Write random number',
			},
		];
	}

	/**
	 * @async
	 * @method
	 * @description Method, that ask the questions, and run `getRes` method if answers have been correct
	 * @return {Promise<void>} get answers on questions
	 */
	async answerTheQuestions () {
		const {text, number} = await inquirer.prompt(this.questions);
		if (!text.trim() || !number.trim() || !parseInt(number.trim())) {
			console.clear();
			this.answerTheQuestions();
		} else {
			this.getRes(text, parseInt(number));
		}
	}

	/**
	 * @async
	 * @method
	 * @description Encrypt the received text
	 * @param text {String} Text, that we want to cipher
	 * @param number {Number} Shift by a certain number of characters
	 */
	getRes (text, number) {
		if (Number.isNaN(number) || number < 0) {
			throw new Error('incorrect number value');
		}
		while (number >= text.length) {
			number-=text.length;
		}
		const arr = text.split('');
		const res = [];
		for (let i = 0; i < arr.length; i++) {
			i+number > arr.length -1
				? res[i+number - arr.length] = arr[i]
				: res[i+number] = arr[i];
		}
		console.log(chalk.green(`Result: ${res.join('')}`));
		return res.join('');
	}
}

const program = new RunCipher();
program.answerTheQuestions();

module.exports = {
	RunCipher,
};
