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
                (rep) => {
                    const data = this.genSVG(rep)
                    const svgMarkUp = this.renderSVG(data)
                    console.log(svgMarkUp)
                    this.writeSVG(svgMarkUp)
                }
            )
    };

    genSVG(rep) {
        const { text, textColor, shape, shapeColor } = rep

        const genText = new Text(text, textColor)

        const logoText = genText.render()

        let shapeGen = ""

        switch(shape) {
            case "Circle":
                const genCircle = new Circle(shapeColor);
                shapeGen = genCircle.render()
                return {shapeGen, logoText}
            case "Square":
                const genSquare = new Square(shapeColor);
                shapeGen = genSquare.render()
                return {shapeGen, logoText}
            case "Triangle":
                const genTriangle = new Triangle(shapeColor);
                shapeGen = genTriangle.render()
                return {shapeGen, logoText}
        };
    };

    renderSVG(data) {
        const { shapeGen, logoText } = data
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeGen}${logoText}</svg>`
    };

    writeSVG(data) {
        fs.writeFile('./gen-svg/shape.svg', data, (err) => err ? console.log(err) : console.log("SVG"))
    };
 
};

module.exports = CLI