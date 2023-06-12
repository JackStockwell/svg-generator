const { writeFile } = reqiore('fs/promises');
const { Circle, Triangle, Square} = require('./shapes');
const questions = require('./questions');
const inquirer = require('inquirer');

class CLI {
    tsConstructorType() {

    }
    run() {
        return inquirer
            .prompt(questions)
    }
}