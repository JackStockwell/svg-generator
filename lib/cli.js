// const { writeFile } = reqiore('fs/promises');
// const { Circle, Triangle, Square} = require('./shapes');
const questions = require('./questions');
const inquirer = require('inquirer');

class CLI {
    constructor() {

    }

    run() {
        return inquirer
            .prompt(questions)
            .then(
                (rep) => {
                    renderSVG(rep)
                    console.log(rep)
                }

            )
    }

    renderSVG(rep) {
        
    }
}

module.exports = CLI