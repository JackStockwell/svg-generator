// const { writeFile } = reqiore('fs/promises');
const { Circle, Square, Triangle, Text } = require('./shapes');
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

                    this.genMdSVG(rep)

                    renderSVG(rep)

                }

            )
    }

    

    genMdSVG(rep) {

        console.log(rep)

        const { text, textColor, shape, shapeColor } = rep

        const renderText = new Text(text, textColor)
        renderText.render()

        console.log(renderText)

        // switch(rep.shape) {
        //     case "Circle":

        //     case "Square":

        //     case "Triangle":
        // }
    }
}

module.exports = CLI