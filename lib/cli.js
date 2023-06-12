// const { writeFile } = reqiore('fs/promises');
const questions = require('./questions.js');
const inquirer = require('inquirer');
const { Circle, Square, Triangle, Text } = require('./shapes.js');

class CLI {
    constructor() {

    }

    run() {
        return inquirer
            .prompt(questions)
            .then(
                (rep) => {
                    const data = this.genSVG(rep)
                }

            )
    }

    

    genSVG(rep) {

        console.log(rep)

        const { text, textColor, shape, shapeColor } = rep

        const genText = new Text(text, textColor)

        const logoText = genText.render()

        console.log(logoText)

        // switch(rep.shape) {
        //     case "Circle":

        //     case "Square":

        //     case "Triangle":
        // }
    }
}

module.exports = CLI