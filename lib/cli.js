// const { writeFile } = reqiore('fs/promises');
const questions = require('./questions.js');
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle, Text } = require('./shapes.js');

class CLI {
    constructor() {

    }

    run() {
        return inquirer
            .prompt(questions)
            .then(
                (res) => {
                    const data = this.genSVG(res)
                    const svgMarkUp = this.renderSVG(data)
                    console.log(svgMarkUp)
                    this.writeSVG(svgMarkUp)
                }
            )
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
        fs.writeFile('./gen-svg/shape.svg', data, (err) => err ? console.log(err) : console.log("SVG"));
    };
 
};

module.exports = CLI