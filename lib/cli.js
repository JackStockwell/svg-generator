// Imports.

const questions = require('./questions.js');
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle, Text } = require('./shapes.js');

// Main Command Line programe, used to generate the entire SVG
class CLI {
    constructor() {

    }
    // Prompts inquirer, uses the data generated to create the SVG file by calling upon other functions in this class.
    run() {
        return inquirer
            .prompt(questions)
            // After the questions are completed.
            .then(
                (res) => {
                    // Runs the genSVG func, returns all of its data and creates a const.
                    const data = this.genSVG(res)
                    // The data from the above func is the parsed into another function.
                    const svgMarkUp = this.renderSVG(data)
                    // Calls upon the writeSVG function which creates the SVG file for use.
                    this.writeSVG(svgMarkUp)
                }
            )
            .catch((error) => error.isTtyError ? console.log("Prompt could not be rendered in current enviroment. Please follow all instruction from GitHub.") : console.log("Something went wrong.. (Check GitHub for issues)"));
    };

    genSVG(res) {
        // Deconstruct the res
        const { text, textColor, shape, shapeColor } = res
        // Generates a new class with the logo text and color.
        const genText = new Text(text, textColor)
        const logoText = genText.render()
        // Lookup table of classes.
        const shapes = {
            Circle: Circle, 
            Square: Square, 
            Triangle: Triangle
        };

        const genShape = new shapes[shape]();

        genShape.setColor(shapeColor);
        const renderShape = genShape.render();
        return {renderShape, logoText};
    };

    renderSVG(data) {
        const { renderShape, logoText } = data;
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${renderShape}${logoText}</svg>`
    };

    writeSVG(data) {
        fs.writeFile('./gen-svg/shape.svg', data, (err) => err ? console.error(err) : console.info("SVG Generated!"));
    };
 
};

module.exports = CLI