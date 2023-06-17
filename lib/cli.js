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
        // Prompts the questions to be answered in the console.
            .prompt(questions)
            // After the questions are completed. The following series of promises will take place.
            // Takes the question responses and generates the SVG strings
            .then((res) => this.genSVG(res))
            // Parses the generated SVG strings for shape and text, the renders a SVG with the parsed strings.
            .then((res) => this.renderSVG(res))
            // Calls upon the writeSVG function which creates the SVG file with the parsed SVG string.
            .then((res) => this.writeSVG(res))

            // Error catch.
            .catch((error) => error.isTtyError ? console.log("Prompt could not be rendered in current enviroment. Please follow all instruction from GitHub.") : console.log("Something went wrong.. (Check GitHub for issues)"));
    };

    // // Takes the question responses and generates the SVG strings
    genSVG(res) {
        // Deconstruct the res var into its appropraite values.
        const { text, textColor, shape, shapeColor } = res;
        // Generates a new class with the logo text and color.
        const genText = new Text(text, textColor);
        const logoText = genText.render();
        // Lookup table of classes.
        const shapes = {
            Circle: Circle, 
            Square: Square, 
            Triangle: Triangle
        };
        // Creates a new Shape class using the lookup table with the shape parsed as the search term.
        const genShape = new shapes[shape]();
        // Sets the color of said shape, then calls the render function to generate 
        genShape.setColor(shapeColor);
        const renderShape = genShape.render();
        // Returns the SVG string for both the shape and text
        return {renderShape, logoText};
    };

    // Parses the generated SVG strings for shape and text, the renders a SVG with the parsed strings.
    renderSVG(data) {
        const { renderShape, logoText } = data;
        // Returns a full SVG string.
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${renderShape}${logoText}</svg>`
    };

    // Calls upon the writeSVG function which creates the SVG file with the parsed SVG string.
    writeSVG(data) {
        fs.writeFile('./generated-svg/shape.svg', data, (err) => err ? console.error(err) : console.info("SVG Generated! Head to the gen-svg folder to see your logo!"));
    };
 
};

// Export
module.exports = CLI